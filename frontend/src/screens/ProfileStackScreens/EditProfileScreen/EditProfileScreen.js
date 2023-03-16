import React, { useState } from 'react'
import { View, Text, Image, StyleSheet, useWindowDimensions, ScrollView } from 'react-native'
import Logo from '../../../../assets/NowLogoIconV2-01.png'
import CustomInput from '../../../components/customInput'
import CustomButton from '../../../components/customButton'
import { useNavigation } from '@react-navigation/native'
import { ScreenContainer } from 'react-native-screens'
import { useForm } from 'react-hook-form'
import { DummyUserData } from '../../../mock/DummyUserData'

const mainColor = "#2a3491"
const EMAIL_REGEX = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/
const data = DummyUserData

const EditProfileScreen = () => {

    const nav = useNavigation()

    const { control, handleSubmit, formState: { errors }, watch } = useForm({

        defaultValues: {
            username: ''
        }
    })
    const pwd = watch('password')

    const onUpdatePressed = (data) => {
        console.log(data)
        if (errors) { } else {
            console.warn('edited')
        }
    }

    return (
        <ScreenContainer>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.root}>
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

                    <CustomButton text="Update Now!" onPress={handleSubmit(onUpdatePressed)} />
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