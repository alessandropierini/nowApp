import React, { useState } from 'react'
import { View, Text, Image, StyleSheet, useWindowDimensions, ScrollView } from 'react-native'
import Logo from '../../../assets/NowLogoIconV2-01.png'
import CustomInput from '../../components/customInput'
import CustomButton from '../../components/customButton'
import { useNavigation } from '@react-navigation/native'

const mainColor = "#2a3491"

const SignInScreen = () => {

    const nav = useNavigation()
    const { height } = useWindowDimensions()

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const onSignInPressed = () => {
        nav.navigate("Home")
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
                <CustomInput placeholder="Username" value={username} setValue={setUsername} />
                <CustomInput placeholder="Password" value={password} setValue={setPassword} secureTextEntry={true} />

                <CustomButton text="Sign In" onPress={onSignInPressed} />
                <CustomButton text="Forgot Password" onPress={onForgotPressed} type="TERTIARY" />

                <CustomButton text="Don't have an account? Create one Now!" onPress={onCreatePressed} type="TERTIARY" />
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
})

export default SignInScreen