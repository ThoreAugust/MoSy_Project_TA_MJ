import React from 'react';
import {View, Image,Text, TouchableOpacity,StyleSheet} from 'react-native';
import {getFeedTheme} from '../constants/Themes';

export default FeedTile = props => {
    const theme = getFeedTheme(props.theme);
    return(
        <View style={theme.itemContainer}>
        <TouchableOpacity onPress={()=> props.toArticle(props.articleUrl, props.title)}>
            <Text style={theme.title}>{props.title}</Text>
            <Text style={theme.description}>{props.description}</Text>
            <Image source={{uri:props.image,}} style={theme.articleImage} />
            <Text style={theme.src}>{props.source}</Text>
        </TouchableOpacity>
       </View>
    );
}
