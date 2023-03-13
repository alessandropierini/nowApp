import React, { useState } from 'react'
import { View, Image, StyleSheet, useWindowDimensions, ScrollView, Pressable, Text } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Logo from '../../../../assets/NowLogoIconBlancoV2-01.png'
import CustomInput from '../../../components/customInput'
import CustomButton from '../../../components/customButton'
import { useNavigation } from '@react-navigation/native'
import { ScreenContainer } from 'react-native-screens'

const mainColor = "#2a3491"

const ProfileCard = ({ id, name, verified, bio, prof }) => {

    const nav = useNavigation()

    return (
        <ScreenContainer>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.userInfoSection}>
                    <View style={{ flexDirection: 'row', marginTop: 15 }}>
                        <Image
                            style={{ height: 30, width: 30, borderRadius: 30 }}
                            source={{ uri: prof }}
                        />                        <View>
                            <Text style={[styles.title, {
                                marginTop: 15,
                                marginBottom: 5,
                                color: 'white'
                            }]}>{name}</Text>
                            <Text style={styles.caption}>@{id}</Text>
                        </View>
                    </View>
                    <View style={styles.bio}>
                        <Text style={styles.caption}>{bio}</Text>
                    </View>
                    <View style={{ flexDirection: 'row', marginBottom: 5, marginTop: 15, alignItems: 'center', justifyContent: 'space-evenly', marginHorizontal: -20 }}>
                        <CustomButton text="Edit Profile" onPress={() => { nav.push('EditProfile') }} type="FOLLOW" />

                        <View style={styles.followInfo} >
                            <Text onPress={() => { nav.push('ProfileFollowingScreen') }} style={{ fontWeight: 'bold', color: 'white' }}>Following</Text>
                            <Text style={{ color: 'white' }}>123</Text>
                        </View>

                        <View style={styles.followInfo}>
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
        color: 'white',
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
        maxWidth: 80,
        maxHeight: 80
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
    bio: {
        flex: 5,
        marginTop: 20,
        marginBottom: 1,
    }
})

export default ProfileCard