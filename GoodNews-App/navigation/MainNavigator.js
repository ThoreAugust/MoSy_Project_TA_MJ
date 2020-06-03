import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import FeedNavigator from './FeedNavigator';

const Drawer = createDrawerNavigator();

export default MainNavigator = () => { 
    return(
            <NavigationContainer>
                <Drawer.Navigator>
                    <Drawer.Screen name="Start" component={FeedNavigator}>

                    </Drawer.Screen>
                    <Drawer.Screen name="Politik" component={FeedNavigator}>

                    </Drawer.Screen>
                    <Drawer.Screen name="Gesellschaft" component={FeedNavigator}>

                    </Drawer.Screen>
                    <Drawer.Screen name="Wirtschaft" component={FeedNavigator}>

                    </Drawer.Screen>
                    <Drawer.Screen name="Freizeit" component={FeedNavigator}>

                    </Drawer.Screen>
                    <Drawer.Screen name="Kultur" component={FeedNavigator}>

                    </Drawer.Screen>
                </Drawer.Navigator>
            </NavigationContainer>
    );
};