import { StyleSheet, Text, View, ScrollView } from 'react-native'
import React from 'react'
import NowCard from '../../../components/NowCard'

const CommentScreen = ({ route }) => {

    const { key, id, name, verified, tweet, image, prof, time, like, reply } = route.params
    const comment = true

  return (
    <ScrollView>
        <View>
        <NowCard
                        key={id}
                        prof={prof}
                        id={id}
                        name={name}
                        verified={verified}
                        image={image}
                        tweet={tweet}
                        time={time}
                        like={like}
                        reply={reply}
                        comment={comment}
                    />
        </View>
    </ScrollView>
  )
}

export default CommentScreen

const styles = StyleSheet.create({})