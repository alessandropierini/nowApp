import React, { useState } from 'react'
import { View, Text, Image, StyleSheet, useWindowDimensions, ScrollView } from 'react-native'
import Logo from '../../../assets/NowLogoIconV2-01.png'
import CustomInput from '../../components/customInput'
import CustomButton from '../../components/customButton'
import { useNavigation } from '@react-navigation/native'

const mainColor = "#2a3491"

const ForgotPasswordScreen = () => {

    const { height } = useWindowDimensions()
    const nav = useNavigation()

    const [username, setUsername] = useState('')
    const [newPassword, setNewPassword] = useState('')
    const [newPasswordRepeat, setNewPasswordRepeat] = useState('')

    const onResetPressed = () => {
        console.warn("onResetPressed")
    }

    const onBackPressed = () => {
        nav.navigate("SignIn")
    }


return (
    <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.root}>
            <Text style={styles.title}>Reset your password Now!</Text>
            <CustomInput placeholder="Username" value={username} setValue={setUsername} />
            <CustomInput placeholder="Type a new password" value={newPassword} setValue={setNewPassword} secureTextEntry />
            <CustomInput placeholder="Confirm password" value={newPasswordRepeat} setValue={setNewPasswordRepeat} secureTextEntry />
            <CustomButton text="Reset Password Now!" onPress={onResetPressed} />

            <CustomButton text="Go back to Sign in" onPress={onBackPressed} type="TERTIARY" />
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

export default ForgotPasswordScreen