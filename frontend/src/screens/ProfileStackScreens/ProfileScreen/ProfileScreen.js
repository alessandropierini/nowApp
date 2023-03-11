import React, { useState } from 'react'
import { View, Text, Image, StyleSheet, useWindowDimensions, ScrollView } from 'react-native'
import Logo from '../../../../assets/NowLogoIconV2-01.png'
import CustomInput from '../../../components/customInput'
import CustomButton from '../../../components/customButton'
import { useNavigation } from '@react-navigation/native'
import { ScreenContainer } from 'react-native-screens'

const mainColor = "#2a3491"

const ProfileScreen = () => {

    const nav = useNavigation()

    const onSignInPressed = () => {
        nav.navigate("SignIn")
    }

    return (
        <ScreenContainer>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.root}>
                    <Text style={styles.title}>Profile</Text>
                </View>
                <View>
                    <Text onPress={() => {nav.push('EditProfile')}}>Edit Profile</Text>
                </View>
                <View>
                    <Text onPress={() => {nav.push('ProfileFollowingScreen')}}>Following</Text>
                </View>
                <View>
                    <Text onPress={() => {nav.push('ProfileFollowersScreen')}}>Followers</Text>
                </View>
            </ScrollView>
        </ScreenContainer>
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

export default ProfileScreen