import { StyleSheet, Text, View, Image } from 'react-native'
import React, { useState } from 'react'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import { abbreviateNumber } from 'js-abbreviation-number'
import moment from 'moment'

const mainColor = "#2a3491"
const defaultImage = "https://t3.ftcdn.net/jpg/00/64/67/52/360_F_64675209_7ve2XQANuzuHjMZXP3aIYIpsDKEbF5dD.jpg"
const profSize = 40

const CommentCard = ({ id, name, like, time, verified, tweet, prof, comment }) => {

    const [toggle, setToggle] = useState(true)
    const handleLike = () => {
        setToggle(!toggle)
        if (toggle == true) {
            like = like + 1
            console.log("trueeee")
        } else {
            like = like - 1
            console.log('falseeee')
        }
    }

    return (
        <View style={styles.container}>
            <View style={styles.leftCont}>
                {prof ?
                    <Image
                        style={{ height: profSize, width: profSize, borderRadius: profSize, margin: 8 }}
                        source={{ uri: prof }}
                    /> :
                    <Image
                        style={{ height: profSize, width: profSize, borderRadius: profSize, margin: 8 }}
                        source={{ uri: defaultImage }}
                    />}
            </View>
            <View style={styles.rightCont}>
                <View style={styles.topCont}>
                    <View style={styles.nameCont}>
                        <Text style={styles.nameText} onPress={() => { nav.navigate("UserProfileScreen", { id, name, verified, prof, bio, following, followers }) }}>{name}</Text>
                        {verified && <MaterialIcons name="verified" color={mainColor} size={20} />}
                        <Text style={styles.idText}>{moment(time).fromNow()}</Text>
                    </View>

                </View>
                <View style={styles.nowCont}>
                    <Text style={styles.nowText}>{comment}</Text>
                    <View style={styles.actionCont}>
                        <Text style={styles.idText}>{abbreviateNumber(like, 1)}</Text>
                        {toggle ?
                            <MaterialCommunityIcons name="heart-outline" color="gray" size={20} onPress={handleLike} />
                            : <MaterialCommunityIcons name="heart" color="#dd0000" size={20} onPress={handleLike} />}
                    </View>
                </View>
                <View style={styles.actionCont}>

                </View>
            </View>
        </View>
    )
}

export default CommentCard

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        paddingBottom: 5,
        borderBottomColor: 'gray',
        borderBottomWidth: 1
    },
    rightCont: {
        flex: 1,
        paddingTop: 6,
        paddingBottom: 5,
        marginLeft: 5,
        flexDirection: 'column'
    },
    topCont: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',

    },
    nameText: {
        color: "black",
        fontWeight: 'bold',
        marginRight: 5
    },
    idText: {
        marginLeft: 5,
        color: 'gray',
        paddingRight: 5
    },
    nameCont: {
        flexDirection: 'row',
    },
    nowText: {
        color: "black"
    },
    nowCont: {
        paddingRight: 15,
        flexDirection: 'row'
    },
    actionCont: {
        marginTop: 0,
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-end',
    },
})