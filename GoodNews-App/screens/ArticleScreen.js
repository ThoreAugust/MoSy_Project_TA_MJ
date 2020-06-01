import React from 'react';
import {View, Text} from 'react-native';
import {WebView} from 'react-native-webview';

export default ArticleScreen = ({props, navigation}) => {
    return (
            <WebView 
                source={{uri: 'https://www.amnesty.ch/de/laender/asien-pazifik/china/dok/2020/guligeina-tashimaimaiti-aus-lager-entlassen'}}
                style={{flex: 1}}
            />
    );
};