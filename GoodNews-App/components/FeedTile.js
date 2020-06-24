import React from 'react';
import {View, Image,Text, TouchableOpacity,StyleSheet} from 'react-native';
import {getFeedTheme} from '../constants/Themes';

export default FeedTile = props => {
    const theme = getFeedTheme(props.theme);
    const imageAvailable = props.image !== null;
    const date = new Date(props.date);
    const dateString = date.toLocaleDateString('de-DE') + " " + date.toLocaleTimeString('de-DE');
    return(
        <View style={theme.itemContainer}>
        <TouchableOpacity onPress={()=> props.toArticle(props.articleUrl, props.title)}>
            <Text style={theme.title}>{props.title}</Text>
            <Text style={theme.description}>{props.description}</Text>
            {imageAvailable ? (<Image source={{uri:props.image,}} style={theme.articleImage} />) : (<View></View>)}            
            <View style={{flexDirection: "row", justifyContent:"space-between"}} >
                <Text style={theme.src}>{props.source}</Text>
                <Text style={theme.src}>{dateString}</Text>
            </View>
        </TouchableOpacity>
       </View>
    );
}
