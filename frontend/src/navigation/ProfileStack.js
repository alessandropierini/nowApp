import React from 'react'
import { createStackNavigator } from "@react-navigation/stack";

import ProfileScreen from '../screens/ProfileStackScreens/ProfileScreen';
import EditProfileScreen from '../screens/ProfileStackScreens/EditProfileScreen';
import ProfileFollowersScreen from '../screens/ProfileStackScreens/ProfileFollowersScreen';
import ProfileFollowingScreen from '../screens/ProfileStackScreens/ProfileFollowingScreen';

const Stack = createStackNavigator()

const mainColor = "#2a3491"

const ProfileStack = () => {
    return (
        <Stack.Navigator initialRouteName='Profile' screenOptions={{
            headerShown: true,
            headerTransparent: false,
            headerShown: true,
            headerStyle: {
                backgroundColor: mainColor,
            },
            headerTitleAlign: 'center',
            headerBackTitle: "Back",
            headerTintColor: 'white'

        }}>
            <Stack.Screen name="ProfileScreen" component={ProfileScreen} />
            <Stack.Screen name="EditProfile" component={EditProfileScreen} />
            <Stack.Screen name="ProfileFollowingScreen" component={ProfileFollowingScreen} />
            <Stack.Screen name="ProfileFollowersScreen" component={ProfileFollowersScreen} />

        </Stack.Navigator>
    )
}

export default ProfileStack