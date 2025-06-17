import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import TabsNavigator from './TabsNavigator';
import PageSansFooter from '../screens/PageSansFooter';

const Stack = createStackNavigator();

export default function StackNavigator() {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Tabs" component={TabsNavigator} />
            <Stack.Screen name="PageSansFooter" component={PageSansFooter} />
        </Stack.Navigator>
    );
}
