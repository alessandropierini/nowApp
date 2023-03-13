import React, { useState } from 'react'
import { View, Text, Image, StyleSheet, useWindowDimensions, ScrollView, TextInput, Dimensions, TouchableOpacity } from 'react-native'
import CustomInput from '../../components/customInput'
import CustomButton from '../../components/customButton'
import { useNavigation } from '@react-navigation/native'
import { ScreenContainer } from 'react-native-screens'
import { useForm, Controller } from 'react-hook-form'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

const mainColor = "#2a3491"
const ScreenWidth = Dimensions.get('window').width
const ScreenHeight = Dimensions.get('window').height


const NewNowScreen = () => {

    const { control, handleSubmit, formState: { errors } } = useForm()

    const nav = useNavigation()

    const onPostPressed = (data) => {
        console.log(data)
    }

    const [image, setImage] = useState(false)
    const onAddImagePressed = () => {
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
                        control={control}
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
                    <Text>Tap to add an image, tap again to clear.</Text>
                </View>


                <View style={{ alignItems: 'center' }}>
                    {image ?
                        <TouchableOpacity onPress={onImagePressed} style={{
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
                        }}>
                            <Image
                                source={{
                                    uri: "https://media.istockphoto.com/id/1322277517/photo/wild-grass-in-the-mountains-at-sunset.jpg?s=612x612&w=0&k=20&c=6mItwwFFGqKNKEAzv0mv6TaxhLN3zSE43bWmFN--J5w="
                                }}
                                style={styles.imageButton}
                            />
                        </TouchableOpacity>
                        :
                        <TouchableOpacity style={styles.imageButton} onPress={onAddImagePressed}>
                            <MaterialCommunityIcons name="image-plus" size={50} color={'white'} />
                        </TouchableOpacity>}
                    <View style={styles.button}>
                        <CustomButton text="Post this Now!" type="PRIMARY" onPress={handleSubmit(onPostPressed)} />
                    </View>
                </View>
            </ScrollView>
        </ScreenContainer>
    )
}
//
//

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
        alignItems: 'center',
        paddingBottom: 25
    },
    imageButton: {
        backgroundColor: '#cdcdcd',
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