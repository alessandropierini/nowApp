import { StyleSheet, Text, View, Image } from 'react-native'
import React, { useState } from 'react'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'

const mainColor = "#2a3491"
const defaultImage = "https://t3.ftcdn.net/jpg/00/64/67/52/360_F_64675209_7ve2XQANuzuHjMZXP3aIYIpsDKEbF5dD.jpg"

const NowCard = ({ key, id, name, verified, tweet, image, prof, time, like, reply, nav, comment }) => {

    const [toggle, setToggle] = useState(true)
    const handleLike = () => {
        setToggle(!toggle)
        if(toggle == true){
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
                        style={{ height: 30, width: 30, borderRadius: 30, margin: 8 }}
                        source={{ uri: prof }}
                    /> :
                    <Image
                        style={{ height: 30, width: 30, borderRadius: 30, margin: 8 }}
                        source={{ uri: defaultImage }}
                    />}
            </View>
            <View style={styles.rightCont}>
                <View style={styles.topCont}>
                    <View style={styles.nameCont}>
                        <Text style={styles.nameText} onPress={() => { nav.navigate("UserProfileScreen", { id, name, verified, prof }) }}>{name}</Text>
                        {verified && <MaterialIcons name="verified" color={mainColor} size={20} />}

                        <Text style={styles.idText}>@{id}</Text>
                        <Text style={styles.idText}>{time} ago</Text>
                    </View>
                    <View>
                        <MaterialCommunityIcons name="dots-vertical" color="gray" size={20} />
                    </View>
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
                        <MaterialCommunityIcons name="message-reply-outline" color="gray" size={20} />
                        : <MaterialCommunityIcons name="message-reply-outline" color="gray" size={20} onPress={() => { nav.navigate("CommentScreen", { key, id, name, verified, tweet, image, prof, time, like, reply }) }} />}
                        <Text style={styles.idText}>{reply}</Text>
                    </View>
                    <View style={styles.iconCont}>
                        {toggle ?
                            <MaterialCommunityIcons name="heart-outline" color="gray" size={20} onPress={handleLike} />
                            : <MaterialCommunityIcons name="heart" color="red" size={20} onPress={handleLike} />}
                        <Text style={styles.idText}>{like}</Text>
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