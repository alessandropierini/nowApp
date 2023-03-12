import React, { useState } from 'react'
import { View, Image, StyleSheet, useWindowDimensions, ScrollView, Pressable, Text } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Logo from '../../../../assets/NowLogoIconBlancoV2-01.png'
import CustomInput from '../../../components/customInput'
import CustomButton from '../../../components/customButton'
import { useNavigation } from '@react-navigation/native'
import { ScreenContainer } from 'react-native-screens'

import NowCard from '../../../components/NowCard/NowCard'
import { DummyData } from '../../../mock/DummyData'

const mainColor = "#2a3491"

const ProfileScreen = () => {

    const nav = useNavigation()

    return (
        <ScreenContainer>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.userInfoSection}>
                    <View style={{ flexDirection: 'row', marginTop: 15 }}>
                        <Image source={Logo} style={styles.logo} resizeMode="contain" />
                        <View>
                            <Text style={[styles.title, {
                                marginTop: 15,
                                marginBottom: 5,
                                color: 'white'
                            }]}>Sofia Ferrer</Text>
                            <Text style={styles.caption}>@soferrer06</Text>
                        </View>
                    </View>
                    <View style={styles.bio}>
                        <Text style={styles.caption}>Soy demasiado cool tengo un novio demasiado bello y yo tambien soy hermosa</Text>
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
                <View>
                    {DummyData.map(dat =>
                        <NowCard
                            key={dat.id}
                            prof={dat.prof}
                            id={dat.id}
                            name={dat.name}
                            verified={dat.verified}
                            image={dat.image}
                            tweet={dat.tweet}
                            time={dat.time}
                            like={dat.like}
                            reply={dat.reply}
                        />)}
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

export default ProfileScreen