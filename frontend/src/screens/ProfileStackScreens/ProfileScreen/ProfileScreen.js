import React, { useState, useEffect } from 'react'
import { View, Image, StyleSheet, useWindowDimensions, ScrollView, Pressable, Text, TouchableOpacity, Animated } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons';
import Logo from '../../../../assets/NowLogoIconBlancoV2-01.png'
import CustomInput from '../../../components/customInput'
import CustomButton from '../../../components/customButton'
import { useNavigation } from '@react-navigation/native'
import { ScreenContainer } from 'react-native-screens'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import { abbreviateNumber } from 'js-abbreviation-number'
import { SwipeListView } from 'react-native-swipe-list-view'

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

    const [listData, setListData] = useState(
        filteredTweets.map((filteredTweetsItem, index) => ({
            key: `${index}`,
            tweet: filteredTweetsItem.tweet,
            prof: filteredTweetsItem.prof,
            id: filteredTweetsItem.id,
            name: filteredTweetsItem.name,
            verified: filteredTweetsItem.verified,
            image: filteredTweetsItem.image,
            time: filteredTweetsItem.time,
            like: filteredTweetsItem.like,
            reply: filteredTweetsItem.reply
        }))
    )

    const closeRow = (rowMap, rowKey) => {
        if (rowMap[rowKey]) {
            rowMap[rowKey].closeRow()
        }
    }

    const deleteRow = (rowMap, rowKey) => {
        closeRow(rowMap, rowKey)
        const newData = [...listData]
        const prevIndex = listData.findIndex(item => item.key == rowKey)
        newData.splice(prevIndex, 1)
        setListData(newData)
    }

    const onRowDidOpen = rowKey => {
        console.log('This row opened', rowKey)
    }
    const onLeftActionStatusChange = rowKey => {
        console.log('onLeftActionStatusChange', rowKey)
    }
    const onRightActionStatusChange = rowKey => {
        console.log('onRightActionStatusChange', rowKey)
    }
    const onRightAction = rowKey => {
        console.log('onRightAction', rowKey)
    }
    const onLeftAction = rowKey => {
        console.log('onLeftAction', rowKey)
    }

    const VisibleItem = props => {
        const { data, rowHeightAnimatedValue, removeRow, leftActionState, rightActionState } = props

        if(rightActionState) {
            Animated.timing(rowHeightAnimatedValue, {
                toValue: 0,
                duration: 1,
            }).start(()=> {
                removeRow()
            })
        }

        return (
            <Animated.View style={{ backgroundColor: 'white', borderRadius: 0 }}>
                <NowCard
                    key={data.item.id}
                    prof={data.item.prof}
                    id={data.item.id}
                    name={data.item.name}
                    verified={data.item.verified}
                    image={data.item.image}
                    tweet={data.item.tweet}
                    time={data.item.time}
                    like={data.item.like}
                    reply={data.item.reply}
                />
            </Animated.View>
        )
    }

    const renderItem = (data, rowMap) => {
        const rowHeightAnimatedValue = new Animated.Value(60)
        return (
            <VisibleItem data={data} rowHeightAnimatedValue={rowHeightAnimatedValue} removeRow={() => deleteRow(rowMap, data.item.key)} />
        )
    }

    const HiddenItemWithActions = props => {
        const { swipeAnimatedValue, leftActionActivated, rightActionActivated, rowActionAnimatedValue, rowHeightAnimatedValue, onClose, onDelete } = props

        if (rightActionActivated) {
            Animated.spring(rowActionAnimatedValue, {
                toValue: 500
            }).start()
        }

        return (
            <Animated.View style={[styles.rowBack, {height: rowHeightAnimatedValue}]}>
                <Text>Left</Text>
                <TouchableOpacity style={[styles.backRightBtn, styles.backRightBtnLeft, {height: 80}]} onPress={onClose}>
                    <Animated.View style={[styles.trash, {
                        transform: [
                            {
                                scale: swipeAnimatedValue.interpolate({
                                    inputRange: [-90, -45],
                                    outputRange: [1, 0],
                                    extrapolate: 'clamp',
                                }),
                            },
                        ],
                    },]}>
                        <Ionicons name="close" size={25} color={'white'} />
                    </Animated.View>
                </TouchableOpacity>
                <Animated.View style={[styles.backRightBtn, styles.backRightBtnRight, { flex: 1, width: rowActionAnimatedValue, height: 80}]}>
                    <TouchableOpacity style={[styles.backRightBtn, styles.backRightBtnRight]} onPress={onDelete}>
                        <Animated.View style={[styles.trash, {
                            transform: [
                                {
                                    scale: swipeAnimatedValue.interpolate({
                                        inputRange: [-90, -45],
                                        outputRange: [1, 0],
                                        extrapolate: 'clamp',
                                    }),
                                },
                            ],
                        },]}>
                            <Ionicons name="md-trash" size={25} color={'white'} />
                        </Animated.View>
                    </TouchableOpacity>
                </Animated.View>
            </Animated.View>
        )
    }

    const renderHiddenItem = (data, rowMap) => {
        const rowActionAnimatedValue = new Animated.Value(75)
        const rowHeightAnimatedValue = new Animated.Value(60)
        return (
            <HiddenItemWithActions
                data={data}
                rowMap={rowMap}
                onClose={() => closeRow(rowMap, data.item.key)}
                onDelete={() => deleteRow(rowMap, data.item.key)}
                rowActionAnimatedValue={rowActionAnimatedValue}
                rowHeightAnimatedValue={rowHeightAnimatedValue}
            />
        )
    }

    return (
        <ScreenContainer>
            <ScrollView showsVerticalScrollIndicator={false}>
                <SwipeListView
                    data={listData}
                    renderItem={renderItem}
                    renderHiddenItem={renderHiddenItem}
                    rightOpenValue={-150}
                    disableRightSwipe
                    onRowDidOpen={onRowDidOpen}
                    leftActivationValue={100}
                    rightActivationValue={-200}
                    leftActionValue={0}
                    rightActionValue={-500}
                    onLeftAction={onLeftAction}
                    onRightAction={onRightAction}
                    onLeftActionStatusChange={onLeftActionStatusChange}
                    onRightActionStatusChange={onRightActionStatusChange}
                />
                {userData.map(dat =>
                    <View style={styles.userInfoSection}>
                        <View style={styles.container}>
                            <View style={styles.leftCont}>
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

                            <View style={styles.followInfo} >
                                <Text onPress={() => { nav.push('ProfileFollowingScreen') }} style={{ fontWeight: 'bold', color: 'white' }}>Following</Text>
                                <Text style={{ color: 'white' }}>{abbreviateNumber(dat.following, 1)}</Text>
                            </View>

                            <View style={styles.followInfo}>
                                <Text onPress={() => { nav.push('ProfileFollowersScreen') }} style={{ fontWeight: 'bold', color: 'white' }}>Followers</Text>
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
                        />)}
                </View>
            </ScrollView>
        </ScreenContainer>
    )

        //

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
        paddingLeft: 3

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
        marginLeft: 5,
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