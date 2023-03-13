import React from 'react'
import { createStackNavigator } from "@react-navigation/stack";
import { Pressable, Alert } from 'react-native';
import { Ionicons } from '@expo/vector-icons'

import ProfileScreen from '../screens/ProfileStackScreens/ProfileScreen';
import EditProfileScreen from '../screens/ProfileStackScreens/EditProfileScreen';
import ProfileFollowersScreen from '../screens/CommonScreens/ProfileFollowersScreen';
import ProfileFollowingScreen from '../screens/CommonScreens/ProfileFollowingScreen';

import { AuthContext } from '../context/AuthContext';

const Stack = createStackNavigator()

const mainColor = "#2a3491"

const ProfileStack = () => {

    const { signOut } = React.useContext(AuthContext)
    const onLogoutPressed = () => {
        Alert.alert(
            'Warning',
            'Are you sure you want to log out?',
            [
                { text: 'Cancel', style: 'cancel' },
                {text: "Log out", onPress: () => signOut()}]
        )
    }

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
            headerTintColor: 'white',

        }}>
            <Stack.Screen name="ProfileScreen" component={ProfileScreen} options={{
                title: 'Profile',
                headerRight: () => (
                    <Pressable>
                         <Ionicons style={{ color: 'white', padding: 10 }} name="exit" size={24} onPress={onLogoutPressed} />
                    </Pressable>
                 )
            }}

            />
            <Stack.Screen name="EditProfile" component={EditProfileScreen} options={{
                title: 'Edit Profile'
            }} />
            <Stack.Screen name="ProfileFollowingScreen" component={ProfileFollowingScreen} options={{
                title: 'Following'
            }} />
            <Stack.Screen name="ProfileFollowersScreen" component={ProfileFollowersScreen} options={{
                title: 'Followers'
            }} />

        </Stack.Navigator>
    )
}

export default ProfileStack