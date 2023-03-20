import React from 'react'
import { StyleSheet, SafeAreaView } from 'react-native'

import Navigation from './src/navigation'

const mainColor = "#2a3491"

const App = () => {

    return (
        //App navigation from navigation/index.js
        <SafeAreaView style={styles.root}>
            <Navigation />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    root: {
        flex: 1,
        backgroundColor: mainColor
    }
})

export default App