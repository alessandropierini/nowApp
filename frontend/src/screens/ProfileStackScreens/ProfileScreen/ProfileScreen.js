import React, { useState, useEffect } from 'react'
import { View, Image, StyleSheet, useWindowDimensions, ScrollView, Pressable, Text, TouchableOpacity, Animated, RefreshControl } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons';
import Logo from '../../../../assets/NowLogoIconBlancoV2-01.png'
import CustomInput from '../../../components/customInput'
import CustomButton from '../../../components/customButton'
import { useNavigation } from '@react-navigation/native'
import { ScreenContainer } from 'react-native-screens'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import { abbreviateNumber } from 'js-abbreviation-number'

import NowCard from '../../../components/NowCard/NowCard'
import { DummyData } from '../../../mock/DummyData'
import { DummyUserData } from '../../../mock/DummyUserData'

const mainColor = "#2a3491"
const userData = DummyUserData

const filteredTweets = DummyData.filter(dat => dat.id.includes('sofe'))

const ProfileScreen = () => {

    const nav = useNavigation()
    const onEditPressed = () => {
        nav.push('EditProfile', { userData })
    }

    const onFollowersPressed = () => {
        nav.push('ProfileFollowersScreen')
    }
    const onFollowingPressed = () => {
        nav.push('ProfileFollowingScreen')
    }

    const [refreshing, setRefreshing] = React.useState(false)
    const onRefresh = React.useCallback(() => {
        setRefreshing(true)
        setTimeout(() => {
            setRefreshing(false)
        }, 2000)
    }, [])

    return (
        <ScreenContainer>
            <ScrollView
                showsVerticalScrollIndicator={false}
                refreshControl={
                    <RefreshControl refreshing={refreshing} onRefresh={onRefresh} style={{ backgroundColor: mainColor }} title="Pull to refresh" tintColor={'white'} titleColor={'white'} />
                }>
                {userData.map(dat =>
                    <View style={styles.userInfoSection}>
                        <View style={styles.container}>
                            <View style={{ paddingRight: 5 }}>
                                <Image
                                    style={{ height: 100, width: 100, borderRadius: 100, borderColor: 'white', borderWidth: 2 }}
                                    source={{ uri: dat.prof }}
                                />
                            </View>
                            <View style={styles.rightCont}>
                                <View style={styles.topCont}>
                                    <View style={styles.nameCont}>
                                        <Text style={styles.nameText}>{dat.name}</Text>
                                        {dat.verified && <MaterialIcons name="verified" color={'white'} size={20} />}
                                    </View>
                                    <Text style={styles.idText}>@{dat.id}</Text>
                                    <View>
                                        <Text style={styles.bio}>{dat.bio}</Text>
                                    </View>
                                </View>
                            </View>
                        </View>
                        <View style={{ flexDirection: 'row', marginBottom: 5, marginTop: 15, alignItems: 'center', justifyContent: 'space-evenly', marginHorizontal: -20 }}>
                            <CustomButton text="Edit Profile" onPress={onEditPressed} type="FOLLOW" />

                            <View style={styles.followInfo} onPress={onFollowingPressed}>
                                <Text style={{ fontWeight: 'bold', color: 'white' }}>Following</Text>
                                <Text style={{ color: 'white' }}>{abbreviateNumber(dat.following, 1)}</Text>
                            </View>

                            <View style={styles.followInfo} onPress={onFollowersPressed}>
                                <Text style={{ fontWeight: 'bold', color: 'white' }}>Followers</Text>
                                <Text style={{ color: 'white' }}>{abbreviateNumber(dat.followers, 1)}</Text>
                            </View>
                        </View>
                    </View>)}
                <View>
                    {filteredTweets.map(dat =>
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
                            isUser={true}
                            nav={nav}
                        />)}
                </View>
                <View style={{ alignItems: 'center', paddingBottom: 20, opacity: .5, paddingTop: 20 }}>
                    <Text>That's it from {userData[0].name} for Now!</Text>
                </View>
            </ScrollView>
        </ScreenContainer>
    )
}

const styles = StyleSheet.create({
    userInfoSection: {
        paddingHorizontal: 30,
        marginBottom: 25,
        backgroundColor: mainColor
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
    },
    followInfo: {
        alignItems: 'center',
        paddingHorizontal: 10
    },
    root: {
        alignItems: 'center',
        padding: 5,
    },
    bio: {
        flex: 5,
        marginTop: 20,
        marginBottom: 1,
        fontSize: 14,
        lineHeight: 14,
        fontWeight: '500',
        color: 'white',
    },
    container: {
        flexDirection: 'row',
        paddingTop: 5,
        paddingBottom: 1,
    },
    rightCont: {
        flex: 1,
        paddingBottom: 6,
        paddingBottom: 5,
        marginLeft: 5,
        flexDirection: 'column',
        justifyContent: 'center',
    },
    nameCont: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingLeft: 0

    },
    topCont: {
        flex: 1,
    },
    nameText: {
        color: "white",
        marginRight: 5,
        fontSize: 24,
        fontWeight: 'bold',
    },
    idText: {
        marginLeft: 0,
        color: 'white',
    },
    backRightBtn: {
        alignItems: 'flex-end',
        bottom: 0,
        justifyContent: 'center',
        position: 'absolute',
        top: 0,
        width: 75,
        paddingRight: 17,
    },
    backRightBtnLeft: {
        backgroundColor: mainColor,
        right: 75,
    },
    backRightBtnRight: {
        backgroundColor: 'red',
        right: 0,
        borderTopRightRadius: 5,
        borderBottomRightRadius: 5,
    },
    rowBack: {
        alignItems: 'center',
        backgroundColor: '#DDD',
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingLeft: 15,
        margin: 5,
        marginBottom: 15,
        borderRadius: 5,
    },
    trash: {
        height: 25,
        width: 25,
        marginRight: 7,
    },
})

export default ProfileScreen