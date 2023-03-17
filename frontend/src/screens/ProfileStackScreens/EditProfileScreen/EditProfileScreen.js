import React, { useState } from 'react'
import { View, Text, Image, StyleSheet, useWindowDimensions, ScrollView, TouchableOpacity } from 'react-native'
import Logo from '../../../../assets/NowLogoIconV2-01.png'
import CustomInput from '../../../components/customInput'
import CustomButton from '../../../components/customButton'
import { useNavigation } from '@react-navigation/native'
import { ScreenContainer } from 'react-native-screens'
import { useForm } from 'react-hook-form'
import { DummyUserData } from '../../../mock/DummyUserData'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import * as ImagePicker from 'expo-image-picker';

const EMAIL_REGEX = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/
const data = DummyUserData
const mainColor = "#2a3491"


const EditProfileScreen = ({ route }) => {

    // const { key, id, name, verified, tweet, image, prof time, like, reply } = route.params
    const prof = "https://instagram.fmar6-1.fna.fbcdn.net/v/t51.2885-19/280145521_101605822544873_3451231290370660898_n.jpg?stp=dst-jpg_s150x150&_nc_ht=instagram.fmar6-1.fna.fbcdn.net&_nc_cat=105&_nc_ohc=ElKBrp7_GUQAX94-Haw&edm=AOQ1c0wBAAAA&ccb=7-5&oh=00_AfCp5jdnzELazxo7nRcznCTGMVZisfHX77Ed-JFxCTNMag&oe=641315F2&_nc_sid=8fd12b"
    const imageSize = 120

    const nav = useNavigation()

    const { control, handleSubmit, formState: { errors }, watch } = useForm({
        defaultValues: {
            username: 'sofe06',
            name: 'Sofia Ferrer',
            email: 'user@gmail.com',
            password: 'pass',
            confirmpassowrd: 'pass'
        }
    })
    const pwd = watch('password')

    const onUpdatePressed = (data) => {
        console.log(data)
        if (errors) { } else {
            console.warn('edited')
        }
    }
    const [image, setImage] = useState(prof)
    const onImagePressed = async () => {
        // No permissions request is necessary for launching the image library
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [1, 1],
            quality: 0.5,
        })
        setImage(result.assets[0].uri);

    }

    return (
        <ScreenContainer>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.root}>
                    <View>
                        <TouchableOpacity style={{ position: 'relative' }} onPress={onImagePressed} >
                            <Image
                                style={{ height: imageSize, width: imageSize, borderRadius: imageSize, borderColor: mainColor, borderWidth: 5, opacity: 1, marginBottom: 18, }}
                                source={{ uri: image }}
                            />
                            <MaterialCommunityIcons name="image" size={40} color={mainColor} style={{ position: 'absolute', paddingLeft: 80, paddingTop: 84 }} />
                        </TouchableOpacity>
                    </View>
                    <CustomInput
                        name="username"
                        placeholder="Username"
                        control={control}
                        rules={{
                            required: 'Username is required',
                            minLength: { value: 7, message: 'Username must be at least 7 characters long' },
                            maxLength: { value: 13, message: 'Username must be less than 13 characters long' }
                        }}
                    />
                    <CustomInput
                        name="name"
                        placeholder="Name"
                        control={control}
                        rules={{
                            required: 'Name is required',
                            minLength: { value: 3, message: 'Name must be at least 3 characters long' },
                            maxLength: { value: 25, message: 'Name must be less than 25 characters long' }
                        }}
                    />
                    <CustomInput
                        name="email"
                        placeholder="email"
                        control={control}
                        rules={{
                            required: 'Email is required',
                            pattern: { value: EMAIL_REGEX, message: 'Invalid email' }
                        }}
                    />
                    <CustomInput
                        name="password"
                        placeholder="Password"
                        control={control}
                        secureTextEntry
                        rules={{
                            required: 'Password is required',
                            minLength: { value: 7, message: 'Password must be at least 7 characters long' },
                            maxLength: { value: 13, message: 'Password must be less than 13 characters long' }
                        }}
                    />
                    <CustomInput
                        name="passwordRepeat"
                        placeholder="Confirm password"
                        control={control}
                        secureTextEntry
                        rules={{
                            required: 'Please confirm your password',
                            minLength: { value: 7, message: 'Password must be at least 7 characters long' },
                            maxLength: { value: 13, message: 'Password must be less than 13 characters long' },
                            validate: value =>
                                value === pwd || 'Passwords do not match'
                        }}
                    />
                    <View style={{ marginTop: 10, width: 250, alignItems: 'center' }}>
                        <CustomButton text="Update Now!" onPress={handleSubmit(onUpdatePressed)} />
                    </View>
                </View>
            </ScrollView>
        </ScreenContainer>
    )
}

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

export default EditProfileScreen