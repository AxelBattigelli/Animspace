import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeScreen from '../screens/HomeScreen';
import Onglet1Screen from '../screens/Onglet1Screen';
import Onglet2Screen from '../screens/Onglet2Screen';

const Tab = createBottomTabNavigator();

export default function TabsNavigator() {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Home" component={HomeScreen} />
            <Tab.Screen name="Onglet1" component={Onglet1Screen} />
            <Tab.Screen name="Onglet2" component={Onglet2Screen} />
        </Tab.Navigator>
    );
}
