import React, { useState } from 'react'
import { View, Text, Image, StyleSheet, ScrollView, TextInput, Dimensions, TouchableOpacity, Alert } from 'react-native'
import CustomInput from '../../components/customInput'
import CustomButton from '../../components/customButton'
import { useNavigation } from '@react-navigation/native'
import { ScreenContainer } from 'react-native-screens'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import * as ImagePicker from 'expo-image-picker';
import { DummyUserData } from '../../mock/DummyUserData'
import moment from 'moment'

const mainColor = "#2a3491"
const ScreenWidth = Dimensions.get('window').width
const ScreenHeight = Dimensions.get('window').height

const imageSelected = "https://media.istockphoto.com/id/1322277517/photo/wild-grass-in-the-mountains-at-sunset.jpg?s=612x612&w=0&k=20&c=6mItwwFFGqKNKEAzv0mv6TaxhLN3zSE43bWmFN--J5w="

const NewNowScreen = () => {


    const nav = useNavigation()

    const [now, setNow] = useState("")
    const onPostPressed = () => {
        if (!now.trim().length) {
            Alert.alert(
                'Error',
                'Empty Now!',
                [
                    { text: 'Close', style: 'close' },
                ]
            )
        } else {
            var trimmedNow = now.trim()
            var instant = moment()
            console.log({ DummyUserData, image, trimmedNow, instant })
            nav.navigate('HomeScreen')
            this.textInput.clear()
            setImage(null)
        }
    }

    const [image, setImage] = useState(null)
    const pickImage = async () => {
        // No permissions request is necessary for launching the image library
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [16, 9],
            quality: 0.5,
        })
        setImage(result.assets[0].uri);
    }

    function onAddImagePressed() {
        setImage(true)
    }
    const onImagePressed = () => {
        setImage(false)
    }

    return (
        <ScreenContainer>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.root}>
                    <TextInput
                        ref={input => { this.textInput = input }}
                        placeholder='Whats on your mind right Now?'
                        placeholderTextColor={'gray'}
                        maxLength={150}
                        style={styles.searchText}
                        multiline
                        autoCorrect
                        autoCapitalize='sentences'
                        numberOfLines={5}
                        blurOnSubmit={true}
                        autoFocus={true}
                        onChangeText={newText => setNow(newText)}
                    />
                </View>


                <View style={{ alignItems: 'center', position: 'relative' }}>
                    {image ?
                        <View style={{
                            height: 200,
                            width: ScreenWidth - 50,
                            borderRadius: 10,
                            marginTop: 10,
                            marginLeft: 10,
                            marginRight: 10,
                            marginBottom: 15,
                            flex: 1,
                            alignItems: 'center',
                            justifyContent: 'center',

                        }}>
                            <Image
                                source={{
                                    uri: image
                                }}
                                style={[styles.imageButton, { position: 'absolute' }]}
                            />
                            <TouchableOpacity
                                onPress={onImagePressed}
                                style={{
                                    position: 'absolute',
                                    alignSelf: 'flex-end',
                                    paddingBottom: 150,
                                    paddingRight: 10,

                                }}>
                                <MaterialCommunityIcons name="close" size={30} color={'white'} style={{
                                    backgroundColor: 'rgba(100, 100, 100, .6)',
                                    borderRadius: 30,
                                }} />
                            </TouchableOpacity>
                        </View>
                        :
                        <TouchableOpacity style={styles.imageButton} onPress={pickImage}>
                            <MaterialCommunityIcons name="image-plus" size={50} color={'white'} />
                        </TouchableOpacity>}
                    <View style={styles.button}>
                        <CustomButton text="Post this Now!" type="PRIMARY" onPress={onPostPressed} />
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
        height: 120,
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
        alignItems: 'center',
        paddingBottom: 25
    },
    imageButton: {
        backgroundColor: '#d9d9d9',
        height: 200,
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