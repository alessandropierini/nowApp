import React, { useEffect } from 'react'
import { View, Alert } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { enableScreens } from 'react-native-screens';
enableScreens(false);

import AuthStack from './AuthStack';
import HomeTabs from './HomeTabs';

import SplashScreen from '../screens/SplashScreen';

import { AuthContext } from '../context/AuthContext';
import AsyncStorage from '@react-native-async-storage/async-storage';

//Main file where all navigation takes place, including login

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

    //SignIn, SignUp, SignOut petitions
    const authContext = React.useMemo(() => ({
        signIn: async (userName, password) => {
            let userToken
            userToken = null
            if (userName == 'user' && password == 'pass') {
                try {
                    userToken = 'asdf'
                    await AsyncStorage.setItem('userToken', userToken)
                } catch (e) {
                    console.log(e)
                }
            } else {
                Alert.alert(
                    'Login Error',
                    'Invalid user or password',
                )
            }
            dispatch({ type: 'LOGIN', id: userName, token: userToken })
        },
        signUp: () => {
            setIsLoading(false)
            setUserToken('adf')
        },
        signOut: async () => {
            try {
                await AsyncStorage.removeItem('userToken')
            } catch (e) {
                console.log(e)
            }
            dispatch({ type: 'LOGOUT' })
        }
    }))

    //On app launch, checks if previous session exists
    useEffect(() => {
        setTimeout(async () => {
            let userToken
            userToken = null
            try {
                userToken = await AsyncStorage.getItem('userToken')
            } catch (e) {
                console.log(e)
            }
            dispatch({ type: 'REGISTER', token: userToken })
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
        //Checks if userToken exists
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