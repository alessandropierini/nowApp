import React from 'react'
import { createStackNavigator } from "@react-navigation/stack";

import HomeScreen from '../screens/HomeStackScreens/HomeScreen';
import UserProfileScreen from '../screens/HomeStackScreens/UserProfileScreen';

const Stack = createStackNavigator()

const HomeStack = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false, headerTransparent: true, }} initialRouteName="HomeScreen">
            <Stack.Screen name="HomeScreen" component={HomeScreen} options={{ title: "" }} />
            <Stack.Screen name="UserProfileScreen" component={UserProfileScreen} />
        </Stack.Navigator>
    )
}

export default HomeStack