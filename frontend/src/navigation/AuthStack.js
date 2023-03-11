import React from 'react'
import { createStackNavigator } from "@react-navigation/stack";

import SignInScreen from '../screens/AuthScreens/SignInScreen'
import SignUpScreen from '../screens/AuthScreens/SignUpScreen'
import ForgotPasswordScreen from '../screens/AuthScreens/ForgotPasswordScreen'
import WelcomeScreen from '../screens/AuthScreens/WelcomeScreen';

const Stack = createStackNavigator()

const AuthStack = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false, headerTransparent: true, }} initialRouteName="WelcomeScreen">
            <Stack.Screen name="Welcome" component={WelcomeScreen} options={{ title: "" }} />
            <Stack.Screen name="SignIn" component={SignInScreen} options={{ title: "" }} />
            <Stack.Screen name="SignUp" component={SignUpScreen} options={{ title: "" }} />
            <Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen} options={{ title: "" }} />
        </Stack.Navigator>
    )
}

export default AuthStack