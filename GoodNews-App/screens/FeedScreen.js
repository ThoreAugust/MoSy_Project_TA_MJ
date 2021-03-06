import React, {useState, useEffect} from "react";
import {View, FlatList, Alert, Text, ActivityIndicator, Keyboard, Platform} from 'react-native';
import {Header, Button, Input} from 'react-native-elements';
import FeedTile from "../components/FeedTile";
import Menu from '../components/Menu';
import SideMenu from 'react-native-side-menu';
import ArticleScreen from './ArticleScreen';
import {Ionicons} from '@expo/vector-icons';
import {getFeedTheme, getHeaderTheme} from '../constants/Themes';
import * as Location from 'expo-location';
import * as Permissions from 'expo-permissions';

export default MainScreen = ({navigation}) => {
    const [articles, setArticles] = useState([]); //anzuzeigende Artikel
    const [searchText, setSearchText] = useState("allgemein"); // Wonach gesucht wurde (Kategorie oder Suchwort)
    const [isArticle, setIsArticle] = useState({visible: false, url: "", title: ""}); // Artikel welcher im ArticleScreen angezeigt wird
    const [isMenuOpen, setIsMenuOpen] = useState(false);    // ist das Menü offen oder nicht
    const [themeType, setThemeType] = useState('colorfull'); // string welches theme genutzt werden soll
    const [initialLoading, setInitialLoading] = useState(true); // wird die app das erste mal geöffnet
    const [loadingArticles, setLoadingArticles] = useState(false); // wird gerade nach Artikeln gesucht
    const [searchBarFocused, setSearchBarFocused] = useState(false); // ist im Header der Title oder die Suchleiste angezeigt
    const [searchWord, setSearchWord] = useState(''); // input wonach gesucht wird

    const feedTheme = getFeedTheme(themeType); // holt das Styling für den Feed
    const headerTheme = getHeaderTheme(themeType); // holt das Styling für den Header
    const NEWS_APIKEY = "e4d9bf0010d34a979ba7a96932e3b01e"; // API-Key für newsapi.org

    //holt die news für die ausgewählte Kategory
    const getCategoryNews = async (category) => {
        let articleId = 0;
        let response;
        var url = `http://newsapi.org/v2/top-headlines?category=${category}&country=de&pageSize=100&apiKey=${NEWS_APIKEY}`;
        if (category === 'local') {
            response = await getLocalNews();
            return response;
        }else{
            try {
                response = await fetch(new Request(url));
                response = await response.json();
                response.articles.forEach(element => {
                    if (element !== undefined) {
                        element.id = 'a' + articleId;
                        articleId++;   
                    }
                });
                return response.articles;
            } catch (error) {
                Alert.alert("Something went wrong!", error.message, [{title: "Ok"}] );
            }
        }
    }

    //holt die News für den Ort an dem sich der Nutzer befindet
    const getLocalNews = async () =>{
        const locationName = await getLocationName();
        let articleId = 0;
        setSearchText(locationName.city);
        var url = `https://newsapi.org/v2/everything?q=${locationName.city}&language=de&pageSize=100&apiKey=${NEWS_APIKEY}`;
        try {
                let response = await fetch(new Request(url));
                response = await response.json();
                response.articles.forEach(element => {
                    if (element !== undefined) {
                        element.id = 'a' + articleId;
                        articleId++;   
                    }
                });
                return response.articles;
            } catch (error) {
                Alert.alert("Something went wrong!", error.message, [{title: "Ok"}] );
            }
    };
    
    //holt News nach Kategorie oder Location und Filtert diese
    const getNews = async (type) => {
        if(isMenuOpen) setIsMenuOpen(false);
        setLoadingArticles(true);

        const categories = ['wirtschaft', 'unterhaltung','allgemein','gesundheit', 'wissenschaft','sport' , 'technologie', 'lokal'];
        let engVersions = ['business', 'entertainment', 'general', 'health', 'science', 'sports', 'technology', 'local'];
        let category = 'general';
        for (let index = 0; index < categories.length; index++) {
            if (categories[index] === type) {
                category = engVersions[index];
                setSearchText(categories[index]);
            }
        }
        let allArticles = await getCategoryNews(category);
        let goodArticles = await getGoodNews(allArticles);

        setArticles(goodArticles);
        setLoadingArticles(false);
    };

    //holt News für das eingegebene Suchwort
    const getKeyWordNews = async () =>{
        setLoadingArticles(true);
        let articleId = 0;
        let allArticles = []
        setSearchText(searchWord);
        var url = `https://newsapi.org/v2/everything?q=${searchWord}&language=de&pageSize=100&apiKey=${NEWS_APIKEY}`;
        try {
                let response = await fetch(new Request(url));
                response = await response.json();
                response.articles.forEach(element => {
                    if (element !== undefined) {
                        element.id = 'a' + articleId;
                        articleId++;   
                    }
                });
                allArticles = response.articles;
                let goodArticles = await getGoodNews(allArticles);
                setArticles(goodArticles);
            } catch (error) {
                Alert.alert("Something went wrong!", error.message, [{title: "Ok"}] );
            }
            setLoadingArticles(false);
    };
    
    //holt sich die Analyse für die Artikel
    const getSentiment = async (url, options) => {
        try {
            let response = await fetch(url, options)
            response = await response.text();
            return response;          
        } catch (error) {
                    
        }
    }
    
    //filtert die guten News
    const getGoodNews = async (allArticles) =>{
        var subscription_key = "852f4884e878444097e5ea038c0e9540";
        var endpoint = "https://goodnewsapp.cognitiveservices.azure.com";
        var path = "/text/analytics/v2.1/sentiment";
        var myHeaders = new Headers();
        myHeaders.append("Ocp-Apim-Subscription-Key", subscription_key);
        myHeaders.append("Content-Type", "application/json");
        myHeaders.append("Accept", "application/json");
        let body = {"documents" : []};
        let articlesToCheck = [];

        for (let index = 0; index < allArticles.length; index++) {
            const element = {"id" : `${index}`, "language": "de","text" : `${allArticles[index].description}`};
            articlesToCheck.push(element);            
        }

        body.documents = articlesToCheck;

        var raw = JSON.stringify(body);
        var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
        };

        let goodArticles = [];
        try {   
            let response = await getSentiment(endpoint+path, requestOptions);
            response = JSON.parse(response);
            console.log(response);                
                response.documents.forEach(item => {
                    if (item !== undefined) {
                        if (item.score > 0.65) {
                            goodArticles.push(allArticles[parseInt(item.id)]);
                        }
                    }
                    
                });
        } catch (error) {
            Alert.alert("Something went wrong!", error.message, [{title: "Ok"}] );
        }
        
        return goodArticles;
    };

    //holt sich den Ort des Nutzers
    const getLocationName = async () => {
        const hasPermissions = getPermissions();

        if (!hasPermissions) {
            return;
        }else{
            try {
                const position = await Location.getCurrentPositionAsync({timeout: 5000});
                const location = {latitude: position.coords.latitude, longitude: position.coords.longitude};
                const town = await Location.reverseGeocodeAsync(location);
                return town[0];
            } catch (error) {
                Alert.alert("Could not get location!", "Please try again later.", [{title: "Ok"}] );
            }
        }
    };

    // holt sich die Permissiions des Nutzer für die Location
    const getPermissions = async () => {
        const result = await Permissions.askAsync(Permissions.LOCATION);
        if (!result.granted) {
            Alert.alert("No Permissions!", "Please give location permissions to use this app.", [{title: "Ok"}])
            return false;
        }else{
            return true;
        }
    };

    //navigiert zum ArticleScreen mit dem ausgewählten Artikel
    const toArticle = (url, title) =>{
        let currentArticle = {visible: true, url: url, title: title};
        setIsArticle(currentArticle);
    };

    //setzt den Artikel zurück und geht zurück zum FeedScreen
    const goBack = () =>{
        let defaultArticle = {visible: false, url:"", title: ""};
        setIsArticle(defaultArticle);
    }

    //öffnet oder schließt das Menü
    const toggleMenu = () =>{
        setIsMenuOpen(isOpen => !isOpen);
    }
    
    //setzt das Theme
    const setTheme = type => {
        setThemeType(type);
    };

    //bei geschlossener Suchleiste öffnet diese 
    //bei geöffneter Suchleiste initiert die Suche
    const handleSearchBar = () => {
        if (searchBarFocused) {
            Keyboard.dismiss();
            getKeyWordNews();
        }
        setSearchBarFocused(prev => !prev);
    };

    //lädt News beim öffnen der App
    useEffect(() => {
        if (initialLoading) {
            getNews('allgemein');
            setInitialLoading(false);
        }
    },[]);

    const menu = <Menu theme={themeType} changeTheme={setTheme} newsHandler={getNews}/>;
    const title = <Text style={headerTheme.headerText}>Good News App</Text>;
    const searchBar = <Input onChangeText={text => setSearchWord(text)} onSubmitEditing={handleSearchBar} blurOnSubmit={true} autoFocus={true}/>;
        return (
            <SideMenu menu={menu} disableGestures={true} isOpen={isMenuOpen}>
                <Header 
                    leftComponent={<Button type="clear" icon={ <Ionicons name={Platform.OS === 'ios' ? "ios-menu":"md-menu"} size={32} color={headerTheme.headerButtons.color} />} onPress={toggleMenu} />}
                    centerComponent={searchBarFocused ? searchBar : title}
                    rightComponent={<Button type="clear" icon={ <Ionicons name={Platform.OS === 'ios' ? "ios-search":"md-search"} size={32} color={headerTheme.headerButtons.color} />} onPress={handleSearchBar}/>}
                    containerStyle={headerTheme.header}
                />
                <View style={feedTheme.feedBackground}>  
                    <View style={{backgroundColor: headerTheme.header.backgroundColor, width: '100%', padding: 10, alignItems: "center"}}>
                        <Text style={{color:headerTheme.headerText.color, fontFamily: headerTheme.headerText.fontFamily, fontSize: 12}}>Wir haben {articles.length} Artikel zum Thema {searchText.toUpperCase()} gefunden </Text>
                    </View>
                    {loadingArticles ? ( <View style={feedTheme.feedBackground}>
                        <ActivityIndicator size="large" color={feedTheme.title.color}/>
                    </View> ):
                    (<FlatList 
                        data={articles}
                        renderItem={(itemData ) => {return <FeedTile title={itemData.item.title} description={itemData.item.description} image={itemData.item.urlToImage} source={itemData.item.source.name} toArticle={toArticle} articleUrl={itemData.item.url} theme={themeType} date={itemData.item.publishedAt}/>}}
                        keyExtractor={(item, index) => item.id}
                        style={{width:'100%'}}
                        contentContainerStyle={{alignItems: "stretch"}}
                        />)}
                         
                    <ArticleScreen visible={isArticle.visible} url={isArticle.url} title={isArticle.title} goBack={goBack} theme={themeType} />    
                </View>
            </SideMenu>
        );
};