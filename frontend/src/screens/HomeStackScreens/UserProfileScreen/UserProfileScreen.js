import React, { useState } from 'react'
import { View, Text, Image, StyleSheet, ScrollView, RefreshControl } from 'react-native'
import { ScreenContainer } from 'react-native-screens'
import { useNavigation } from '@react-navigation/native'
import Logo from '../../../../assets/NowLogoIconBlancoV2-01.png'
import CustomButton from '../../../components/customButton/customButton'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import { DummyData } from '../../../mock/DummyData'
import NowCard from '../../../components/NowCard'
import { abbreviateNumber } from 'js-abbreviation-number'

const mainColor = "#2a3491"
const defaultImage = "https://t3.ftcdn.net/jpg/00/64/67/52/360_F_64675209_7ve2XQANuzuHjMZXP3aIYIpsDKEbF5dD.jpg"


const UserProfileScreen = ({ route }) => {

    const { id, name, verified, prof, bio, followers, following } = route.params

    const filteredTweets = DummyData.filter(dat => dat.id.includes(id))

    const nav = useNavigation()

    const [followed, setFollowed] = useState(false)
    const onFollowPressed = () => {
        if (followed == false) {
            setFollowed(true)
        } else {
            setFollowed(false)
        }
    }

    const [refreshing, setRefreshing] = React.useState(false)
    const onRefresh = React.useCallback(() => {
        setRefreshing(true)
        setTimeout(() => {
            setRefreshing(false)
        }, 2000)
    }, [])

    return (
        <ScrollView
            showsVerticalScrollIndicator={false}
            refreshControl={
                <RefreshControl refreshing={refreshing} onRefresh={onRefresh} style={{ backgroundColor: mainColor }} title="Pull to refresh" tintColor={'white'} titleColor={'white'} />
            }>
            <View style={styles.userInfoSection}>
                <View style={styles.container}>
                    <View style={{ paddingRight: 5 }}>
                        {prof ?
                            <Image
                                style={{ height: 100, width: 100, borderRadius: 100, borderColor: 'white', borderWidth: 2 }}
                                source={{ uri: prof }}
                            /> :
                            <Image
                                style={{ height: 100, width: 100, borderRadius: 100, borderColor: 'white', borderWidth: 2 }}
                                source={{ uri: defaultImage }}
                            />}
                    </View>
                    <View style={styles.rightCont}>
                        <View style={styles.topCont}>
                            <View style={styles.nameCont}>
                                <Text style={styles.nameText}>{name}</Text>
                                {verified && <MaterialIcons name="verified" color={'white'} size={20} />}
                            </View>
                            <Text style={styles.idText}>@{id}</Text>
                            <View>
                                <Text style={styles.bio}>{bio}</Text>
                            </View>
                        </View>
                    </View>
                </View>
                <View style={{ flexDirection: 'row', marginBottom: 5, marginTop: 15, alignItems: 'center', justifyContent: 'space-evenly', marginHorizontal: -20 }}>
                    {followed ? <CustomButton text="Unfollow" onPress={onFollowPressed} type="FOLLOW2" />
                        : <CustomButton text="Follow" onPress={onFollowPressed} type="FOLLOW" />}

                    <View style={styles.followInfo} >
                        <Text style={{ fontWeight: 'bold', color: 'white' }}>Following</Text>
                        <Text style={{ color: 'white' }}>{abbreviateNumber(following, 1)}</Text>
                    </View>

                    <View style={styles.followInfo}>
                        <Text style={{ fontWeight: 'bold', color: 'white' }}>Followers</Text>
                        <Text style={{ color: 'white' }}>{abbreviateNumber(followers, 1)}</Text>
                    </View>
                </View>
            </View>
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
                        nav={nav}
                        bio={dat.bio}
                        followers={dat.followers}
                        following={dat.following}
                    />)}
            </View>
        </ScrollView>
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
})

export default UserProfileScreen