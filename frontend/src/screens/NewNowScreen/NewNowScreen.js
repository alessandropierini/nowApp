import React, { useState } from 'react'
import { View, Text, Image, StyleSheet, useWindowDimensions, ScrollView, TextInput, Dimensions, TouchableOpacity } from 'react-native'
import Logo from '../../../assets/NowLogoIconV2-01.png'
import CustomInput from '../../components/customInput'
import CustomButton from '../../components/customButton'
import { useNavigation } from '@react-navigation/native'
import { ScreenContainer } from 'react-native-screens'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

const mainColor = "#2a3491"
const ScreenWidth = Dimensions.get('window').width
const ScreenHeight = Dimensions.get('window').height


const NewNowScreen = () => {

    const nav = useNavigation()

    const onAddImagePressed = () => {
        console.warn('image added')
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
                        numberOfLines={5}
                        autoFocus={true}
                    />
                </View>
                <View style={{ alignItems: 'center' }}>
                    <TouchableOpacity style={styles.imageButton} onPress={onAddImagePressed}>
                            <MaterialCommunityIcons name="image-plus" size={50} color={'white'}/>
                    </TouchableOpacity>
                    <View style={styles.button}>
                        <CustomButton text="Post this Now!" type="PRIMARY" />
                    </View>
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
        marginTop: 10,
        paddingBottom: 25
    },
    button: {
        alignItems: 'center'
    },
    imageButton: {
        backgroundColor: '#cdcdcd',
        height: 250,
        width: ScreenWidth - 50,
        borderRadius: 10,
        marginTop: 10,
        marginLeft: 10,
        marginRight: 10,
        marginBottom: 15,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
})

export default NewNowScreen