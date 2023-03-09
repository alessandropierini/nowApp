import React, { useState } from 'react'
import { View, Text, Image, StyleSheet, useWindowDimensions, ScrollView } from 'react-native'
import Logo from '../../../assets/NowLogoIconV2-01.png'
import CustomInput from '../../components/customInput'
import CustomButton from '../../components/customButton'
import { useNavigation } from '@react-navigation/native'

const mainColor = "#2a3491"

const SignUpScreen = () => {

    const { height } = useWindowDimensions()
    const nav = useNavigation()

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [passwordRepeat, setPasswordRepeat] = useState('')

    const onRegisterPressed = () => {
        nav.navigate("Home")
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
                <Image source={Logo} style={[styles.logo, { height: height * 0.3 }]} resizeMode="contain" />
                <Text style={styles.title}>Create an account Now!</Text>
                <CustomInput placeholder="Username" value={username} setValue={setUsername} />
                <CustomInput placeholder="Password" value={password} setValue={setPassword} secureTextEntry />
                <CustomInput placeholder="Confirm password" value={passwordRepeat} setValue={setPasswordRepeat} secureTextEntry />
                <CustomButton text="Register Now!" onPress={onRegisterPressed} />

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