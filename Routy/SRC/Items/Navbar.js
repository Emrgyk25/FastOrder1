/* eslint-disable prettier/prettier */
/* eslint-disable eol-last */
/* eslint-disable semi */
/* eslint-disable prettier/prettier */
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Settings from '../Screens/Settings';
import LoginPage from '../Screens/LoginPage';
import Router from '../Router';




const Tab = createBottomTabNavigator();
const Navbar = () => {

    return (


        <Tab.Navigator>
            <Tab.Screen name="LoginPage" component={LoginPage} />
            <Tab.Screen name="Settings" component={Settings} />
        </Tab.Navigator>



    );
}

export default Navbar;