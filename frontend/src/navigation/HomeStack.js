import React from 'react'
import { Image } from 'react-native'
import { createStackNavigator } from "@react-navigation/stack";
import { Ionicons } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'

import HomeScreen from '../screens/HomeStackScreens/HomeScreen';
import UserProfileScreen from '../screens/HomeStackScreens/UserProfileScreen';
import UserProfileFollowersScreen from '../screens/HomeStackScreens/UserProfileFollowersScreen'
import UserProfileFollowingScreen from '../screens/HomeStackScreens/UserProfileFollowingScreen'
import SearchScreen from '../screens/HomeStackScreens/SearchScreen/SearchScreen';

const mainColor = "#2a3491"
const tabsColor = 'white'

const Stack = createStackNavigator()

const HomeStack = () => {

    const nav = useNavigation()

    return (
        <Stack.Navigator initialRouteName="HomeScreen" screenOptions={{
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
            <Stack.Screen name="HomeScreen" component={HomeScreen} options={{
                headerTitle: () => (
                    <Image style={{ width: 100, height: 120 }} source={require("../../assets/NowLogoCompletoBlancoV2-01.png")} resizeMode="contain" />
                ),
                title: 'Welcome',
                headerStyle: {
                    backgroundColor: mainColor,
                },
                headerTitleAlign: 'center',
                headerTransparent: false,
                headerRight: () => (
                    <Ionicons style={{ color: tabsColor, padding: 15 }} name="search" size={27}  onPress={() => {nav.navigate('SearchScreen')}}/>
                )
            }} />
            <Stack.Screen name="UserProfileScreen" component={UserProfileScreen} />
            <Stack.Screen name="UserProfileFollowersScreen" component={UserProfileFollowersScreen} />
            <Stack.Screen name="UserProfileFollowingScreen" component={UserProfileFollowingScreen} />
            <Stack.Screen name="SearchScreen" component={SearchScreen} /> 

        </Stack.Navigator >
    )
}

export default HomeStack