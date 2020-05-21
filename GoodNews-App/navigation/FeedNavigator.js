import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import FeedScreen from '../screens/FeedScreen';
import ArticleScreen from '../screens/ArticleScreen';

const FeedStack = createStackNavigator();

export default FeedNavigator = () => {
    return (<FeedStack.Navigator>
        <FeedStack.Screen name="Feed" component={FeedScreen}></FeedStack.Screen>
        <FeedStack.Screen name="Article" component={ArticleScreen}></FeedStack.Screen>
    </FeedStack.Navigator>);
};