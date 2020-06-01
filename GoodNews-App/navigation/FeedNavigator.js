import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import FeedScreen from '../screens/FeedScreen';
import ArticleScreen from '../screens/ArticleScreen';
import {Button} from 'react-native-elements';
import {Ionicons} from '@expo/vector-icons';

const FeedStack = createStackNavigator();

export default FeedNavigator = () => {
    return (<FeedStack.Navigator initialRouteName="Feed" screenOptions={{
        headerStyle : {height: 80, borderBottomLeftRadius: 20, borderBottomRightRadius: 20, backgroundColor: '#d9e9e8'},
        headerTitleStyle: {color: '#006666'},
        headerTitleAlign: "center",
    }}>
        <FeedStack.Screen name="Feed" component={FeedScreen} options={{
            title: 'GoodNews',
            headerRight: ()=> (<Button type='clear' icon={<Ionicons name="md-search" size={32} color="#006666" />} />),
            headerLeft: () => (<Button type='clear' icon={<Ionicons name="md-menu" size={32} color="#006666" />} />),
        }}></FeedStack.Screen>
        <FeedStack.Screen name="Article" component={ArticleScreen}></FeedStack.Screen>
    </FeedStack.Navigator>);
};