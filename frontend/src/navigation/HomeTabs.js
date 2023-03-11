import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View, Text, StyleSheet, Button, Image } from 'react-native'
import { Ionicons } from '@expo/vector-icons'

import ProfileStack from './ProfileStack';
import NewNowScreen from '../screens/NewNowScreen';
import HomeStack from './HomeStack';

const Tabs = createBottomTabNavigator()

const mainColor = "#2a3491"
const tabsColor = 'white'

const HomeTabs = () => {
    return (
        <Tabs.Navigator initialRouteName='Home' screenOptions={{
            headerShown: true,
            tabBarShowLabel: false,
            tabBarInactiveBackgroundColor: mainColor,
            tabBarActiveBackgroundColor: mainColor
        }}>
            <Tabs.Screen name="Home" component={HomeStack}
                options={{
                    headerTitle: () => (
                        <Image style={{ width: 100, height: 120 }} source={require("../../assets/NowLogoCompletoBlancoV2-01.png")} resizeMode="contain" />
                    ),
                    title: 'Welcome',
                    headerStyle: {
                        backgroundColor: mainColor,
                    },
                    headerTitleAlign: 'center',
                    headerTransparent: false,
                    tabBarIcon: () => (
                        <Ionicons style={{ color: tabsColor }} name="home" size={24} />
                    )
                }} />
            
            <Tabs.Screen name="New Now" component={NewNowScreen} options={{
                tabBarIcon: () => (
                    <Image style={{ width: 35 }} source={require("../../assets/NowLogoIconBlancoV2-01.png")} resizeMode="contain" />
                ),
                headerTitle: () => (
                    <Image style={{ width: 40 }} source={require("../../assets/NowLogoIconBlancoV2-01.png")} resizeMode="contain" />
                ),
                title: 'New Now',
                headerStyle: {
                    backgroundColor: mainColor,
                },
                headerTitleAlign: 'center',
                headerTransparent: false,
            }} />
           
            <Tabs.Screen name="Profile" component={ProfileStack} options={{
                headerTitle: () => (
                    <Text style={styles.title}>Sofi</Text>
                ),
                tabBarIcon: () => (
                    <Ionicons style={{ color: tabsColor }} name="person" size={24} />
                ),
                title: 'Sofi',
                headerStyle: {
                    backgroundColor: mainColor,
                },
                headerTitleAlign: 'center',
                headerTransparent: false,
                headerShown: false,
            }} />
        </Tabs.Navigator>)
}

const styles = StyleSheet.create({
    root: {
        alignItems: 'center',
        padding: 20,

    },
    logo: {
        width: '70%',
        maxWidth: 500,
        maxHeight: 500
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: 'white',
        margin: 10,
    },
    text: {
        color: 'gray',
        marginVertical: 10,
    },
    link: {
        color: mainColor,

    },
})

export default HomeTabs