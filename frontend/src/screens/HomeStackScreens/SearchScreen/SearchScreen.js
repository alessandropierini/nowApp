import { StyleSheet, Text, View, TextInput, Image, Dimensions, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import SearchProfCard from '../../../components/SearchProfCard'
import { DummyData } from '../../../mock/DummyData'
import { DummyUsersData } from '../../../mock/DummyUsersData'
import { useNavigation } from '@react-navigation/native'

const ScreenWidth = Dimensions.get('window').width

//Displays the users in database that matches search

const SearchScreen = ({ navigation }) => {

    const nav = useNavigation()
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
                setUser(data.filter(dat=>dat.id.toLowerCase().includes(e.toLowerCase())))
            } else {
                setUser([])
            }
        }

    return (
        <View style={styles.container}>
            <ScrollView>
                {
                    user?.map(dat=><SearchProfCard key={dat.id} prof={dat.prof} id={dat.id} name={dat.name} verified = {dat.verified} nav={nav} bio={dat.bio} followers={dat.followers} following={dat.following} />)
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
        width: ScreenWidth - 130,
        marginTop: 8,
        marginBottom: 8,
        borderRadius: 50,
        color: 'black',
        borderWidth: 0,
    },
    settingIcon: {
        paddingRight: 16
    }
})