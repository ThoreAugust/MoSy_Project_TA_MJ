import React, {useState} from "react";
import {Alert, View, FlatList, Button, StyleSheet} from 'react-native';
import {AppLoading} from 'expo';
import FeedTile from "../components/FeedTile";
import {ARTICLES} from "../data/DummyData";

export default MainScreen = ({props, navigation}) => {
    const APIKEY = "e4d9bf0010d34a979ba7a96932e3b01e";
    const displayedArticles = ARTICLES;
    const [searchText, setSearchText] = useState("good news");
    const [articles, setArticles] = useState(displayedArticles);
    let articleId = 0;

    const searchHandler = async () => {
        var url = 'http://newsapi.org/v2/everything?' +
        'q=' + searchText + 
        '&language=de' + 
        '&sortBy=relevancy' + 
        '&apiKey=' + APIKEY;

        var req = new Request(url);
        try {
            let response = await fetch(req);
            response = await response.json();
            response.articles.forEach(element => {
                element.id = articleId;
                console.log(element);
                articleId++;
            });
        } catch (error) {
            Alert.alert("Something went wrong!", error.message, [{title: "Ok"}] );
        }
    };

    const toArticle = () =>{
        navigation.navigate('Article');
    };

        return (
            <View style={{flex: 1, alignItems: "center", justifyContent:"center", backgroundColor: '#ffffff'}}>  
                <FlatList 
                    data={articles}
                    renderItem={(itemData ) => {return <FeedTile title={itemData.item.title} description={itemData.item.description} image={itemData.item.imageURL} source={itemData.item.sourceName} toArticle={toArticle} />}}
                    keyExtractor={(item, index) => item.id}
                    style={{width:'100%'}}
                    contentContainerStyle={{alignItems: "stretch", padding:20}}
                />         
            </View>
        );
};