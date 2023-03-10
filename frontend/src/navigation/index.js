import React, { useEffect } from 'react'
import { View, Text, ActivityIndicator } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from "@react-navigation/stack";
import { enableScreens } from 'react-native-screens';
enableScreens(false);

import AsyncStorage from '@react-native-async-storage/async-storage';

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

    const initialLoginState = {
        isLoading: true,
        userName: null,
        userToken: null
    }

    loginReducer = (prevState, action) => {
        switch (action.type) {
            case 'RETRIEVE_TOKEN':
                return {
                    ...prevState,
                    userToken: action.token,
                    isLoading: false
                }
            case 'LOGIN':
                return {
                    ...prevState,
                    userName: action.id,
                    userToken: action.token,
                    isLoading: false
                }
            case 'LOGOUT':
                return {
                    ...prevState,
                    userName: null,
                    userToken: null,
                    isLoading: false
                }
            case 'REGISTER':
                return {
                    ...prevState,
                    userName: action.id,
                    userToken: action.token,
                    isLoading: false
                }
        }
    }

    const [loginState, dispatch] = React.useReducer(loginReducer, initialLoginState)

    const authContext = React.useMemo(() => ({
        signIn: async(userName, password) => {
            let userToken
            userToken = null
            if( userName == 'user' && password == 'pass') {
                try {
                    userToken = 'asdf'
                    await AsyncStorage.setItem('userToken', userToken)
                } catch(e){
                    console.log(e)
                }
            }
            dispatch ({type: 'LOGIN', id: userName, token: userToken})
        },
        signUp: () => {
            setIsLoading(false)
            setUserToken('adf')
        },
        signOut: async() => {
            try {
                await AsyncStorage.removeItem('userToken')
            } catch(e){
                console.log(e)
            }
            dispatch ({type: 'LOGOUT'})

        }

    }))

    useEffect(() => {
        setTimeout(async() => {
            let userToken
            userToken = null
            try {
                userToken = await AsyncStorage.getItem('userToken')
            } catch(e){
                console.log(e)
            }
            dispatch ({type: 'REGISTER', token: userToken})
        }, 500)
    }, [])

    if (loginState.isLoading) {
        return (
            <View>
                <SplashScreen />
            </View>
        )
    }

    return (
        <AuthContext.Provider value={authContext}>
            <NavigationContainer>
                {loginState.userToken !== null ? (
                    <HomeTabs />
                ) : (
                    <AuthStack />
                )}
            </NavigationContainer>
        </AuthContext.Provider>
    )
}

/*



*/
export default Navigation