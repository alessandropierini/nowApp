import React from 'react'
import { View, Text, TextInput, StyleSheet } from 'react-native'
import { Controller } from 'react-hook-form'

const CustomInput = ({ control, name, rules = {}, placeholder, secureTextEntry }) => {
    return (
        <Controller
            control={control}
            name={name}
            rules={rules}
            render={({ field: { value, onChange, onBlur }, fieldState: { error } }) => (
                <View style={[styles.container, {
                    borderColor: error ? 'red' : '#e8e8e8',
                    borderWidth: error ? 2 : 1,
                    backgroundColor: error ? '#ffdcd1' : 'white'
                    }]}>
                    <TextInput
                        value={value}
                        onChangeText={onChange}
                        onBlur={onBlur}
                        placeholder={placeholder}
                        style={styles.input}
                        secureTextEntry={secureTextEntry}
                    />
                </View>
            )}
        />


    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        width: '80%',
        borderColor: '#e8e8e8',
        borderWidth: 1,
        borderRadius: 50,
        paddingHorizontal: 10,
        marginVertical: 5,
        paddingVertical: 10,
    },
    input: {}
})

export default CustomInput