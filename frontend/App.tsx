import React from 'react'
import { View, Text, StyleSheet, Button, Image, SafeAreaView } from 'react-native'
import { Ionicons } from '@expo/vector-icons'

import Navigation from './src/navigation'

const mainColor = "#2a3491"

const App = () => {
    return (
            <SafeAreaView style={styles.root}>
                <Navigation />
            </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    root: {
        flex: 1,
        backgroundColor: '#F9FBFC'
    }
})

export default App
/*



       
*/