import React from 'react'
import { View, Text } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import SignInScreen from '../screens/SignInScreen'
import SignUpScreen from '../screens/SignUpScreen'
import ForgotPasswordScreen from '../screens/ForgotPasswordScreen'
import WelcomeScreen from '../screens/WelcomeScreen';

import HomeScreen from '../screens/HomeScreen';
import ProfileScreen from '../screens/ProfileScreen';

const AuthStack = createStackNavigator()

const Navigation = () => {
    return (
        <NavigationContainer>
            <AuthStack.Navigator screenOptions={{ headerShown: false, headerTransparent:true, }} initialRouteName="WelcomeScreen">
                <AuthStack.Screen name="Welcome" component={WelcomeScreen} options={{title: ""}} />
                <AuthStack.Screen name="SignIn" component={SignInScreen} options={{title: ""}} />
                <AuthStack.Screen name="SignUp" component={SignUpScreen} options={{title: ""}} />
                <AuthStack.Screen name="ForgotPassword" component={ForgotPasswordScreen} options={{title: ""}} />

                <AuthStack.Screen name="Home" component={HomeScreen} options={{title: ""}}/>
                <AuthStack.Screen name="Profile" component={ProfileScreen} />
            </AuthStack.Navigator>
        </NavigationContainer>
    )
}

export default Navigation