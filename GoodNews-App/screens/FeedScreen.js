import React, {useState, useEffect, useContext} from "react";
import {Alert, View, FlatList, Button, StyleSheet} from 'react-native';
import {AppLoading} from 'expo';
import FeedTile from "../components/FeedTile";
import {ARTICLES} from "../data/DummyData";
import {NewsContext} from '../data/NewsContext';

export default MainScreen = ({navigation}) => {
    const [articles] = useContext(NewsContext);

    const toArticle = (url) =>{
        navigation.navigate('Article', {articleUrl : url});
    };

        return (
            <View style={{flex: 1, alignItems: "center", justifyContent:"center", backgroundColor: '#ffffff'}}>  
                <FlatList 
                    data={articles}
                    renderItem={(itemData ) => {return <FeedTile title={itemData.item.title} description={itemData.item.description} image={itemData.item.urlToImage} source={itemData.item.source.name} toArticle={toArticle} articleUrl={itemData.item.url} />}}
                    keyExtractor={(item, index) => item.id}
                    style={{width:'100%'}}
                    contentContainerStyle={{alignItems: "stretch", padding:20}}
                />         
            </View>
        );
};