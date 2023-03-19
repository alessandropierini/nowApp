import React, { useState } from 'react'
import { View, Text, Image, StyleSheet, useWindowDimensions, ScrollView } from 'react-native'
import Logo from '../../../../assets/NowLogoIconV2-01.png'
import CustomInput from '../../../components/customInput'
import CustomButton from '../../../components/customButton'
import { useNavigation } from '@react-navigation/native'
import { useForm } from 'react-hook-form'

const mainColor = "#2a3491"
const EMAIL_REGEX = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/

const TermsScreen = () => {

    const { height } = useWindowDimensions()
    const nav = useNavigation()

    const { control, handleSubmit, formState: { errors }, watch } = useForm({
        defaultValues: {
            username: ''
        }
    })
    const pwd = watch('password')

    const onResetPressed = (data) => {
        console.log(data)
    }

    const onBackPressed = () => {
        nav.navigate("SignIn")
    }


    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.root}>
                <Text style={styles.title}>Reset your password Now!</Text>
                <View style={{ paddingLeft: 10, paddingRight: 10, paddingBottom: 20, paddingTop: 10 }}>
                    <Text style={{ fontWeight: 'bold', fontSize: 18 }}>
                        Please, introduce your username and the email you registered with to reset your password.
                    </Text>
                </View>
                <CustomInput
                    name="username"
                    placeholder="username"
                    control={control}
                    rules={{
                        required: 'Username is required',
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
                    placeholder="New password"
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
                    placeholder="Confirm new password"
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
                <View style={{paddingTop: 25}}>
                    <CustomButton text="Reset Password Now!" onPress={handleSubmit(onResetPressed)} />
                </View>
                <View style={{paddingTop: 50}}>
                    <CustomButton text="Go back to Sign in" onPress={onBackPressed} type="TERTIARY" />
                </View>
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

export default TermsScreen