import { StyleSheet, Text, View, TextInput, Image, Dimensions, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import SearchProfCard from '../../../components/SearchProfCard'
import { DummyData } from '../../../mock/DummyData'

const ScreenWidth = Dimensions.get('window').width

const SearchScreen = ({ navigation }) => {

    const [user, setUser] = useState([])
    const data = DummyData

    useEffect(() => (
        navigation.setOptions({
            headerTitle: () => (
                <TextInput
                    placeholder='Search right Now'
                    placeholderTextColor={'gray'}
                    style={styles.searchText}
                    onChangeText={searchUser}
                />
            ),
            headerRight: () => (
                <MaterialIcons name="search" color={'white'} size={25} style={styles.settingIcon} />
            )
        })
    ), [])

        const searchUser = (e) => {
            if(e){
                setUser(data.filter(dat=>dat.id.includes(e)))
            } else {
                setUser([])
            }
        }

    return (
        <View style={styles.container}>
            <ScrollView>
                {
                    user?.map(dat=><SearchProfCard key={dat.id} prof={dat.prof} id={dat.id} name={dat.name} verified = {dat.verified} />)
                }
            </ScrollView>
        </View>
    )
}

export default SearchScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // backgroundColor: 'white'
    },
    searchText: {
        flex: 2,
        backgroundColor: 'white',
        paddingLeft: 15,
        marginLeft: 0,
        textAlignVertical: 'center',
        height: "100%",
        width: ScreenWidth - 115,
        marginTop: 12,
        marginBottom: 12,
        borderRadius: 50,
        color: 'black',
        borderWidth: 0,
    },
    settingIcon: {
        paddingRight: 16
    }
})