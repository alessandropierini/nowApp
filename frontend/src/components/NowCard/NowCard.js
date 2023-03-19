import { StyleSheet, Text, View, Image, TouchableOpacity, Touchable } from 'react-native'
import React, { useState } from 'react'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import { abbreviateNumber } from 'js-abbreviation-number'
import moment from 'moment'

const mainColor = "#2a3491"
const defaultImage = "https://t3.ftcdn.net/jpg/00/64/67/52/360_F_64675209_7ve2XQANuzuHjMZXP3aIYIpsDKEbF5dD.jpg"
const profSize = 40

const NowCard = ({ key, id, name, verified, tweet, image, prof, time, like, reply, nav, comment, bio, following, followers, isUser = false }) => {

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

    const onDeletePressed = () => {
        console.warn('deleted')
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
                    {isUser && <View style={{ paddingRight: 15 }}>
                        <TouchableOpacity>
                            <MaterialCommunityIcons name="trash-can" color="gray" size={20} onPress={onDeletePressed}/>
                        </TouchableOpacity>
                    </View>}
                </View>
                <View style={styles.nowCont}>
                    <Text style={styles.nowText}>{tweet}</Text>
                    {image && <Image style={{
                        height: 300,
                        width: "100%",
                        borderRadius: 10,
                        marginTop: 10,
                    }}
                        source={{ uri: image }} />}
                </View>
                <View style={styles.actionCont}>
                    <View style={styles.iconCont}>
                        {comment ?
                            <TouchableOpacity>
                                <MaterialCommunityIcons name="message-reply-outline" color="gray" size={20} />
                            </TouchableOpacity>
                            :
                            <TouchableOpacity>
                                <MaterialCommunityIcons name="message-reply-outline" color="gray" size={20} onPress={() => { nav.navigate("CommentScreen", { key, id, name, verified, tweet, image, prof, time, like, reply }) }} />
                            </TouchableOpacity>}
                        <Text style={styles.idText}>{abbreviateNumber(reply, 1)}</Text>
                    </View>
                    <View style={styles.iconCont}>
                        {toggle ?
                            <TouchableOpacity>
                                <MaterialCommunityIcons name="heart-outline" color="gray" size={20} onPress={handleLike} />
                            </TouchableOpacity>
                            :
                            <TouchableOpacity>
                                <MaterialCommunityIcons name="heart" color="#dd0000" size={20} onPress={handleLike} />
                            </TouchableOpacity>}
                        <Text style={styles.idText}>{abbreviateNumber(like, 1)}</Text>
                    </View>
                </View>
            </View>
        </View>
    )
}

export default NowCard

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
    },
    nameCont: {
        flexDirection: 'row',
    },
    nowText: {
        color: "black"
    },
    nowCont: {
        paddingRight: 15
    },
    actionCont: {
        marginTop: 10,
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-end',
        marginRight: 15,
    },
    iconCont: {
        flexDirection: 'row',
        paddingHorizontal: 5

    }

})