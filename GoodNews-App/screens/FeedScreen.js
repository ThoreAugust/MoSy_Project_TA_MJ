import React, {useContext, useState, useEffect} from "react";
import {View, FlatList, Alert} from 'react-native';
import {Header, Button} from 'react-native-elements';
import FeedTile from "../components/FeedTile";
import Menu from '../components/Menu';
import SideMenu from 'react-native-side-menu';
import ArticleScreen from './ArticleScreen';
import {Ionicons} from '@expo/vector-icons';

export default MainScreen = ({navigation}) => {
    const [articles, setArticles] = useState([]);
    const [searchText, setSearchText] = useState("hamburg");
    const [isArticle, setIsArticle] = useState({visible: false, url: "", title: ""});
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    
    const getNews = async () => {
        let articleId = 0;
        const NEWS_APIKEY = "e4d9bf0010d34a979ba7a96932e3b01e";
        var url = `http://newsapi.org/v2/everything?q=${searchText}&language=de&sortBy=relevancy&pageSize=100&apiKey=${NEWS_APIKEY}`;

        try {
            let response = await fetch(new Request(url));
            response = await response.json();
            response.articles.forEach(element => {
                if (element !== undefined) {
                    element.id = 'a' + articleId;
                    articleId++;   
                }
            });
            setArticles(response.articles);
            
        } catch (error) {
            Alert.alert("Something went wrong!", error.message, [{title: "Ok"}] );
        }
    };

    const getGoodNews = async () =>{
        let goodArticles = [];
        var index, len;
        try{
            for (index = 0, len = articles.length; index < len; ++index) {

                let response = await fetch("https://text-sentiment.p.rapidapi.com/analyze", {
                    "method": "POST",
                    "headers": {
                        "x-rapidapi-host": "text-sentiment.p.rapidapi.com",
                        "x-rapidapi-key": "8d70e32e62msha8e73dfa263e74bp161ae2jsna6e3d797e585",
                        "content-type": "application/x-www-form-urlencoded"
                    },
                    "body": {
                        "text": articles[index].description
                    }
                });
                response = await response.json();
                let pos_percent = parseInt(response.pos_percent);
                let mid_percent = parseInt(response.mid_percent);
                let neg_percent = parseInt(response.neg_percent);
                console.log('Pos ' + pos_percent + ',neg ' + neg_percent + ',mid ' + mid_percent);
                if(neg_percent !== 0){
                    if(pos_percent >= 50) {
                        goodArticles.push(articles[index]);
                    }
                    if(mid_percent >= 75){
                        goodArticles.push(articles[index]);
                    }
                } 
            }
            setArticles(goodArticles);
            console.log(goodArticles);
        }catch(error){
            //Alert.alert("Something went wrong!", error.message, [{title: "Ok"}] );
        }
    };

    useEffect(()=>{
        getNews();//.then(getGoodNews())
      },[]);

    const toArticle = (url, title) =>{
        let currentArticle = {visible: true, url: url, title: title};
        setIsArticle(currentArticle);
    };

    const goBack = () =>{
        let defaultArticle = {visible: false, url:"", title: ""};
        setIsArticle(defaultArticle);
    }

    const toggleMenu = () =>{
        setIsMenuOpen(isOpen => !isOpen);
    }

    const menu = <Menu />;
        return (
            <SideMenu menu={menu} disableGestures={true} isOpen={isMenuOpen}>
                <Header 
                    leftComponent={<Button type="clear" icon={ <Ionicons name="md-menu" size={32} color="white" />} onPress={toggleMenu}/>}
                    centerComponent={{ text: 'Good News App', style: { color: '#fff' } }}
                    rightComponent={<Button type="clear" icon={ <Ionicons name="md-search" size={32} color="white" />} />}
                />
                <View style={{flex: 1, alignItems: "center", justifyContent:"center", backgroundColor: '#ffffff'}}>  
                    <FlatList 
                        data={articles}
                        renderItem={(itemData ) => {return <FeedTile title={itemData.item.title} description={itemData.item.description} image={itemData.item.urlToImage} source={itemData.item.source.name} toArticle={toArticle} articleUrl={itemData.item.url} />}}
                        keyExtractor={(item, index) => item.id}
                        style={{width:'100%'}}
                        contentContainerStyle={{alignItems: "stretch", padding:20}}
                        />     
                    <ArticleScreen visible={isArticle.visible} url={isArticle.url} title={isArticle.title} goBack={goBack}/>    
                </View>
            </SideMenu>
        );
};