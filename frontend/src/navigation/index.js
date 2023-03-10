import React, { useEffect } from 'react'
import { View, Text, ActivityIndicator } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from "@react-navigation/stack";

import SplashScreen from '../screens/SplashScreen';
import SignInScreen from '../screens/SignInScreen'
import SignUpScreen from '../screens/SignUpScreen'
import ForgotPasswordScreen from '../screens/ForgotPasswordScreen'
import WelcomeScreen from '../screens/WelcomeScreen';

import HomeScreen from '../screens/HomeScreen';
import ProfileScreen from '../screens/ProfileScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { AuthContext } from '../context/AuthContext';

const Stack = createStackNavigator()
const Tabs = createBottomTabNavigator()

const AuthStack = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false, headerTransparent: true, }} initialRouteName="WelcomeScreen">
            <Stack.Screen name="Welcome" component={WelcomeScreen} options={{ title: "" }} />
            <Stack.Screen name="SignIn" component={SignInScreen} options={{ title: "" }} />
            <Stack.Screen name="SignUp" component={SignUpScreen} options={{ title: "" }} />
            <Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen} options={{ title: "" }} />
            <Stack.Screen name="Home" component={HomeScreen} options={{ title: "" }} />
        </Stack.Navigator>
    )
}

const HomeTabs = () => {
    return (
        <Tabs.Navigator initialRouteName='Home'>
            <Tabs.Screen name="Home" component={HomeScreen} />
            <Tabs.Screen name="Profile" component={ProfileScreen} />
        </Tabs.Navigator>)
}

const Navigation = () => {

    const [isLoading, setIsLoading] = React.useState(true)
    const [userToken, setUserToken] = React.useState(null)

    const authContext = React.useMemo(() => ({
        signIn: () => {
            setIsLoading(false)
            setUserToken('adf')
        },
        signUp: () => {
            setIsLoading(false)
            setUserToken('adf')
        },
        signOut: () => {
            setIsLoading(false)
            setUserToken(null)
        }

    }))

    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false)
        }, 500)
    }, [])

    if (isLoading) {
        return (
            <View>
                <SplashScreen />
            </View>
        )
    }

    return (
        <AuthContext.Provider value={authContext}>
            <NavigationContainer>
                <AuthStack />
            </NavigationContainer>
        </AuthContext.Provider>
    )
}

/*

            <Tab.Navigator>
                <Tab.Screen name="Home" component={HomeScreen} />
                <Tab.Screen name="Profile" component={ProfileScreen} />
            </Tab.Navigator>

*/
export default Navigation