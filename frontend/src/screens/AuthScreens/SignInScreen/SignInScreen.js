import React, { useState } from 'react'
import { View, Text, Image, StyleSheet, useWindowDimensions, ScrollView, TextInput, Button } from 'react-native'
import Logo from '../../../../assets/NowLogoIconV2-01.png'
import CustomInput from '../../../components/customInput'
import CustomButton from '../../../components/customButton'
import { useNavigation } from '@react-navigation/native'
import { useForm } from 'react-hook-form'

import { AuthContext } from '../../../context/AuthContext'

const mainColor = "#2a3491"

//Handles signin calling signin function from navigation/index.js

const SignInScreen = () => {

    const nav = useNavigation()
    const { height } = useWindowDimensions()

    const { signIn } = React.useContext(AuthContext)

    const { control, handleSubmit, formState: { errors } } = useForm()

    const onSignInPressed = (data) => {
            console.log(data)
            signIn(data.username, data.password)
        
    }

    const onForgotPressed = () => {
        nav.navigate("ForgotPassword")
    }

    const onCreatePressed = () => {
        nav.navigate("SignUp")
    }

    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.root}>
                <Image source={Logo} style={[styles.logo, { height: height * 0.3 }]} resizeMode="contain" />
                <Text style={styles.title}>Sign in Now!</Text>

                <CustomInput
                    name="username"
                    placeholder="Username"
                    control={control}
                    rules={{
                        required: 'Username is required'
                    }}
                />
                <CustomInput
                    name="password"
                    placeholder="Password"
                    control={control}
                    secureTextEntry
                    rules={{
                        required: 'Password is required',
                    }}
                />

                <CustomButton text="Sign In" onPress={handleSubmit(onSignInPressed)} />
                <CustomButton text="Forgot Password" onPress={onForgotPressed} type="TERTIARY" />

                <CustomButton text="Don't have an account? Create one Now!" onPress={onCreatePressed} type="TERTIARY" />
            </View>
        </ScrollView>
    )
}

/*


*/
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
        color: mainColor,
        margin: 10,
    },
})

export default SignInScreen