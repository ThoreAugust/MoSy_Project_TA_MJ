import React, {useState, useEffect} from 'react';
import FeedScreen from './screens/FeedScreen';
import {useFonts} from '@use-expo/font';
import {AppLoading} from 'expo';

export default function App() {
    let [fontsLoaded] = useFonts({
        'Roboto-Light': require('./assets/fonts/Roboto-Light.ttf'),
        'YesevaOne' : require('./assets/fonts/YesevaOne-Regular.ttf'),  
      });
    
    if(!fontsLoaded){
      return <AppLoading />;
    }else{
      return <FeedScreen />
    }  
}