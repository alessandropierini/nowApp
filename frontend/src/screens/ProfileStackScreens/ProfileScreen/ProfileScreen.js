import React, { useState } from 'react'
import { View, Image, StyleSheet, useWindowDimensions, ScrollView, Pressable } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Logo from '../../../../assets/NowLogoIconV2-01.png'
import CustomInput from '../../../components/customInput'
import CustomButton from '../../../components/customButton'
import { useNavigation } from '@react-navigation/native'
import { ScreenContainer } from 'react-native-screens'

import { Avatar, Title, Caption, Text, TouchableRipple } from 'react-native-paper';

const mainColor = "#2a3491"

const ProfileScreen = () => {

    const nav = useNavigation()

    const onFollowPressed = () => {
        console.warn("Followed")
    }



    return (
        <ScreenContainer>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.userInfoSection}>
                    <View style={{ flexDirection: 'row', marginTop: 15 }}>
                        <Avatar.Image
                            source={{
                                uri: 'https://api.adorable.io/avatars/80/abott@adorable.png',
                            }}
                            size={80}
                        />
                        <View style={{ marginLeft: 15 }}>
                            <Title style={[styles.title, {
                                marginTop: 15,
                                marginBottom: 5,
                                color: 'white'
                            }]}>John Doe</Title>
                            <Caption style={styles.caption}>@j_doe</Caption>
                        </View>
                    </View>
                    <View style={{ flexDirection: 'row', marginBottom: 5, marginTop: 15, alignItems: 'center', justifyContent: 'space-evenly', marginHorizontal: -20}}>
                        <CustomButton text="Edit" onPress={() => { nav.push('EditProfile') }} type="FOLLOW" />

                        <View style={styles.followInfo} >
                            <Text onPress={() => { nav.push('ProfileFollowingScreen') }} style={{ fontWeight: 'bold', color: 'white'}}>Following</Text>
                            <Text style={{ color: 'white' }}>123</Text>
                        </View>

                        <View  style={styles.followInfo}>
                            <Text onPress={() => { nav.push('ProfileFollowersScreen') }} style={{ fontWeight: 'bold', color: 'white' }}>Followers</Text>
                            <Text style={{ color: 'white' }}>157</Text>
                        </View>
                    </View>
                </View>







            </ScrollView>
        </ScreenContainer>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    userInfoSection: {
        paddingHorizontal: 30,
        marginBottom: 25,
        backgroundColor: mainColor
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
    },
    caption: {
        fontSize: 14,
        lineHeight: 14,
        fontWeight: '500',
        color: 'white'
    },
    row: {
        flexDirection: 'row',
        marginBottom: 10,
    },
    followInfo: {
        alignItems: 'center',
        paddingHorizontal: 10
    },
    root: {
        alignItems: 'center',
        padding: 5,
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