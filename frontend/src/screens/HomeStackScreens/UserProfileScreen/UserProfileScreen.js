import React, { useState } from 'react'
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native'
import { useNavigation } from '@react-navigation/native'

const mainColor = "#2a3491"

const UserProfileScreen = () => {

    const nav = useNavigation()

    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.root}>
                <Text style={styles.title}>User profile screen</Text>
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

export default UserProfileScreen