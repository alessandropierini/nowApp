import React, { useState } from 'react'
import { View, Text, Image, StyleSheet, useWindowDimensions, ScrollView } from 'react-native'
import Logo from '../../../assets/NowLogoIconV2-01.png'
import CustomInput from '../../components/customInput'
import CustomButton from '../../components/customButton'
import { useNavigation } from '@react-navigation/native'

const mainColor = "#2a3491"

const WelcomeScreen = () => {

    const { height } = useWindowDimensions()
    const nav = useNavigation()

    const onSignInPressed = () => {
        nav.navigate("SignIn")
    }

    const onCreatePressed = () => {
        nav.navigate("SignUp")
    }
    
    const onTermsPressed = () => {
        console.warn("terms")
    }

    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.root}>
                <Image source={Logo} style={[styles.logo, { height: height * 0.3 }]} resizeMode="contain" />
                <Text style={styles.title}>Welcome to Now!</Text>
                <CustomButton text="Sign In Now!" onPress={onSignInPressed} />
                <CustomButton text="Create an account Now!" onPress={onCreatePressed} type="SECONDARY" />
                <Text style={styles.text}>Click here to read about our <Text style={styles.link} onPress={onTermsPressed}>Terms of use & Privacy Policy</Text>!</Text>

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

export default WelcomeScreen