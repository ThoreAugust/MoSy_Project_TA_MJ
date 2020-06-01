import React from 'react';
import {View, Image,Text, TouchableOpacity,StyleSheet} from 'react-native';

export default FeedTile = props => {
    return(
        <View style={styles.itemContainer}>
        <TouchableOpacity onPress={props.toArticle}>
            <Text style={styles.title}>{props.title}</Text>
            <Text style={styles.description}>{props.description}</Text>
            <Image source={{uri:props.image,}} style={styles.articleImage} />
            <Text style={styles.src}>{props.source}</Text>
        </TouchableOpacity>
       </View>
    );
}

const styles = StyleSheet.create({
    itemContainer : {
        flex:1,
        marginTop: 5,
        padding: 5,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "white",
        borderRadius: 10,
        shadowColor: "black",
        shadowOpacity: 0.25,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 10,
        elevation: 10,
    },
    articleImage: {
        width: 300,
        height: 150,
    },
    src:{
        fontSize: 10,
        marginRight: 20,
    },
    title:{
        fontWeight: "bold",
        fontSize: 16,
    },
    description: {
        fontSize: 12,
    }
});