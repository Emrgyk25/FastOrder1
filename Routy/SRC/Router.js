/* eslint-disable prettier/prettier */
/* eslint-disable semi */
/* eslint-disable prettier/prettier */
import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Splash from './Screens/Splash';

import Information from './Screens/Information';
import LoginPage from './Screens/LoginPage';
import MainPage from './Screens/MainPage';
import Profile from './Screens/Profile';
import Details from './Screens/Details';
import Card from './Items/Card';


const HomeStack = createNativeStackNavigator();

function App() {
    return (
        <NavigationContainer>
            <HomeStack.Navigator screenOptions={{
                headerShown: false,
            }} >
                <HomeStack.Screen name="Splash" component={Splash} />
                <HomeStack.Screen name="Information" component={Information} />
                <HomeStack.Screen name="Login Page" component={LoginPage} />
                <HomeStack.Screen name="Main Page" component={MainPage} />
                <HomeStack.Screen name="Profile" component={Profile} />
                <HomeStack.Screen name="Details" component={Details} />
            </HomeStack.Navigator>
        </NavigationContainer>
    );
}





export default App;






