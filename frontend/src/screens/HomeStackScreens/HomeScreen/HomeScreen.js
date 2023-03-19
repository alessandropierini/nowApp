import React, { useEffect, useState, useRef, useCallback } from 'react'
import { View, Text, Image, StyleSheet, useWindowDimensions, ScrollView, RefreshControl } from 'react-native'
import Logo from '../../../../assets/NowLogoIconV2-01.png'
import { useNavigation } from '@react-navigation/native'

import CustomButton from '../../../components/customButton'
import NowCard from '../../../components/NowCard/NowCard'
import { DummyData } from '../../../mock/DummyData'

const mainColor = "#2a3491"

const HomeScreen = ({ navigation }) => {

    const [refreshing, setRefreshing] = React.useState(false)
    const onRefresh = React.useCallback(() => {
        setRefreshing(true)
        setTimeout(() => {
            setRefreshing(false)
        }, 2000)
    }, [])

    const { height } = useWindowDimensions()
    const nav = useNavigation()
    const data = DummyData

    return (
        <ScrollView
            showsVerticalScrollIndicator={false}
            refreshControl={
                <RefreshControl refreshing = {refreshing} onRefresh={onRefresh} title="Pull to refresh"/>
            }>
            <View style={styles.root}>
                {data.map(dat =>
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
            <View style={{alignItems:'center', paddingBottom: 20, opacity:.5}}>
                <Text>That's it for Now!</Text>
            </View>
        </ScrollView>
    )
}

/*

*/

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

export default HomeScreen