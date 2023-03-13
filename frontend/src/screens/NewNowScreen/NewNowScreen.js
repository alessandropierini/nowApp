import React, { useState } from 'react'
import { View, Text, Image, StyleSheet, useWindowDimensions, ScrollView, TextInput, Dimensions } from 'react-native'
import Logo from '../../../assets/NowLogoIconV2-01.png'
import CustomInput from '../../components/customInput'
import CustomButton from '../../components/customButton'
import { useNavigation } from '@react-navigation/native'
import { ScreenContainer } from 'react-native-screens'

const mainColor = "#2a3491"
const ScreenWidth = Dimensions.get('window').width
const ScreenHeight = Dimensions.get('window').height


const NewNowScreen = () => {

    const nav = useNavigation()

    const onSignInPressed = () => {
        nav.navigate("SignIn")
    }

    return (
        <ScreenContainer>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.root}>
                    <TextInput
                        placeholder='Whats on your mind right Now?'
                        placeholderTextColor={'gray'}
                        maxLength={150}
                        style={styles.searchText}
                        multiline
                        autoCorrect
                        autoCapitalize='sentences'
                        numberOfLines={10}
                        autoFocus={true}
                    />
                </View>
                <View style={[styles.button, { flexDirection: 'row', justifyContent: 'center', marginLeft: 1 }]}>
                        <CustomButton text="Upload image" type="FOLLOW"/>
                    <CustomButton text="Post this Now!" type="FOLLOW" />
                </View>
            </ScrollView>
        </ScreenContainer>
    )
}

const styles = StyleSheet.create({
    root: {
        alignItems: 'center',
    },
    searchText: {
        flex: 2,
        backgroundColor: 'white',
        paddingLeft: 25,
        textAlignVertical: 'top',
        height: '100%',
        width: ScreenWidth,
        marginBottom: 12,
        color: 'black',
        paddingTop: 15,
        paddingRight: 25,
        fontSize: 18,
        marginTop: 5,
    },
    button: {
        alignItems: 'center'
    }
})

export default NewNowScreen