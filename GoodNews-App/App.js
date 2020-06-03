import React, {useState, useEffect} from 'react';
import MainNavigator from './navigation/MainNavigator';
import {NewsContext} from './data/NewsContext';

export default function App() {
    const [articles, setArticles] = useState([]);
    const APIKEY = "e4d9bf0010d34a979ba7a96932e3b01e";
    const [searchText, setSearchText] = useState("good news");
    let articleId = 0;

    const getNews = async () => {
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

    useEffect(()=>{
        getNews();
      },[]);
    return (
        <NewsContext.Provider value={[articles, setArticles]}>
            <MainNavigator />
        </NewsContext.Provider>
    ); 
}