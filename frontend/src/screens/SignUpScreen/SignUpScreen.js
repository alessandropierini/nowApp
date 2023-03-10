import React, { useState } from 'react'
import { View, Text, Image, StyleSheet, useWindowDimensions, ScrollView } from 'react-native'
import Logo from '../../../assets/NowLogoIconV2-01.png'
import CustomInput from '../../components/customInput'
import CustomButton from '../../components/customButton'
import { useNavigation } from '@react-navigation/native'
import { useForm } from 'react-hook-form'

import { AuthContext } from '../../context/AuthContext'

const mainColor = "#2a3491"
const EMAIL_REGEX = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/

const SignUpScreen = () => {

    const { signUp } = React.useContext(AuthContext)

    const { height } = useWindowDimensions()
    const nav = useNavigation()

    const { control, handleSubmit, formState: { errors }, watch } = useForm({
        defaultValues: {
            username: ''
        }
    })
    const pwd = watch('password')

    const onRegisterPressed = (data) => {
        console.log(data)
        if (errors) { } else {
            signUp()
        }
    }

    const onSignInPressed = () => {
        nav.navigate("SignIn")
    }

    const onTermsPressed = () => {
        console.warn("terms")
    }

    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.root}>
                <Image source={Logo} style={[styles.logo, { height: height * 0.1 }]} resizeMode="contain" />
                <Text style={styles.title}>Create an account Now!</Text>

                <CustomInput
                    name="username"
                    placeholder="Username"
                    control={control}
                    rules={{
                        required: 'Username is required',
                        minLength: { value: 7, message: 'Username must be at least 7 characters long' },
                        maxLength: { value: 13, message: 'Password must be less than 13 characters long' }
                    }}
                />
                <CustomInput
                    name="email"
                    placeholder="email"
                    control={control}
                    rules={{
                        required: 'Email is required',
                        pattern: { value: EMAIL_REGEX, message: 'Invalid email' }
                    }}
                />
                <CustomInput
                    name="password"
                    placeholder="Password"
                    control={control}
                    secureTextEntry
                    rules={{
                        required: 'Password is required',
                        minLength: { value: 7, message: 'Username must be at least 7 characters long' },
                        maxLength: { value: 13, message: 'Password must be less than 13 characters long' }
                    }}
                />
                <CustomInput
                    name="passwordRepeat"
                    placeholder="Confirm password"
                    control={control}
                    secureTextEntry
                    rules={{
                        required: 'Please confirm your password',
                        minLength: { value: 7, message: 'Username must be at least 7 characters long' },
                        maxLength: { value: 13, message: 'Password must be less than 13 characters long' },
                        validate: value =>
                            value === pwd || 'Passwords do not match'
                    }}
                />

                <CustomButton text="Register Now!" onPress={handleSubmit(onRegisterPressed)} />

                <Text style={styles.text}>By registering, you accept our <Text style={styles.link} onPress={onTermsPressed}>Terms of use & Privacy Policy</Text>!</Text>

                <CustomButton text="Already have an account? Sign in Now!" onPress={onSignInPressed} type="TERTIARY" />
            </View>
        </ScrollView>
    )
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
        color: mainColor,
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

export default SignUpScreen