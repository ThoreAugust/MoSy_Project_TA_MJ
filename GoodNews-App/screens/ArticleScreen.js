import React from 'react';
import {View, Text} from 'react-native';
import {WebView} from 'react-native-webview';

export default ArticleScreen = ({navigation, route}) => {
    return (
            <WebView 
                source={{uri: route.params.articleUrl}}
                style={{flex: 1}}
            />
    );
};