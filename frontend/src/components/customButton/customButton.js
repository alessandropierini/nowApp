import React from 'react'
import { View, Text, StyleSheet, Pressable } from 'react-native'

const mainColor = "#2a3491"

const CustomButton = ({ onPress, text, type = "PRIMARY" }) => {
    return (
        <Pressable onPress={onPress} style={[styles.container, styles[`container_${type}`]]}>
            <Text style={[styles.text, styles[`text_${type}`]]}>{text}</Text>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        padding: 15,
        marginVertical: 5,
        alignItems: 'center',
        borderRadius: 100
    },

    container_PRIMARY: {
        backgroundColor: mainColor,
    },
    container_SECONDARY: {
        borderColor: mainColor,
        borderWidth: 2
    },
    container_TERTIARY: {

    },
    text: {
        fontWeight: 'bold',
        color: 'white'
    },
    text_SECONDARY: {
        color: mainColor,
    },
    text_TERTIARY: {
        color: 'gray',
    }

})

export default CustomButton