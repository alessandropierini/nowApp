import React from 'react'
import { createStackNavigator } from "@react-navigation/stack";

import SignInScreen from '../screens/AuthScreens/SignInScreen'
import SignUpScreen from '../screens/AuthScreens/SignUpScreen'
import ForgotPasswordScreen from '../screens/AuthScreens/ForgotPasswordScreen'
import WelcomeScreen from '../screens/AuthScreens/WelcomeScreen';
import TermsScreen from '../screens/AuthScreens/TermsScreen';

const Stack = createStackNavigator()

//All Authentication flow screens are declared

const AuthStack = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false, headerTransparent: true }} initialRouteName="WelcomeScreen">
            <Stack.Screen name="Welcome" component={WelcomeScreen} options={{ title: "" }} />
            <Stack.Screen name="SignIn" component={SignInScreen} options={{ title: "" }} />
            <Stack.Screen name="SignUp" component={SignUpScreen} options={{ title: "" }} />
            <Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen} options={{ title: "" }} />
            <Stack.Screen name="Terms" component={TermsScreen} options={{ title: "" }} />
        </Stack.Navigator>
    )
}

export default AuthStack