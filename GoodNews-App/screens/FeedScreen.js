import React, {useState} from "react";
import {Alert, View, Text, Button} from 'react-native';


export default MainScreen = ({props, navigation}) => {
    const APIKEY = "f0555566e38794304829d0f41210a396";
    const [searchText, setSearchText] = useState("{good news}");

    const searchHandler = async () => {
        let requestText = "q=" + searchText;
        try {
            let response = await fetch('https://gnews.io/api/v3/search?'+ requestText +'&lang=de&country=de&token=' + APIKEY);
            response = await response.json();
            console.log(response);
        } catch (error) {
            Alert.alert("Something went wrong!", error.message, [{title: "Ok"}] );
        }
    };


    return (
        <View style={{flex: 1, alignItems: "center", justifyContent:"center"}}>
            <Text>Test</Text>
            <Button
  onPress={()=> {
      searchHandler();
      navigation.navigate('Article');}}
  title="Article"
/>
        </View>
    );
};