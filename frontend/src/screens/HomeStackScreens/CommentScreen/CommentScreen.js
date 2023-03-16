import { StyleSheet, Text, View, ScrollView, TextInput, Dimensions, TouchableOpacity, Alert } from 'react-native'
import React, { useState } from 'react'
import NowCard from '../../../components/NowCard'
import Feather from 'react-native-vector-icons/Feather'
import CustomButton from '../../../components/customButton/customButton'
import { DummyUserData } from '../../../mock/DummyUserData'
import moment from 'moment'

const ScreenWidth = Dimensions.get('window').width
const ScreenHeight = Dimensions.get('window').height
const mainColor = "#2a3491"

const CommentScreen = ({ route }) => {

  const { key, id, name, verified, tweet, image, prof, time, like, reply } = route.params
  const comment = true

  const [newComment, setNewComment] = useState("")
  function onCommentPressed() {
    if (!newComment.trim().length) {
      Alert.alert(
        'Error',
        'Empty Now!',
        [
          { text: 'Close', style: 'close' },
        ]
      )
    } else {
      var trimmedComment = newComment.trim()
      var instant = moment()
      console.log({ DummyUserData, trimmedComment, instant })


      // nav.navigate('HomeScreen')

    }
  }

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
        <View style={{ alignItems: 'center', position: 'relative' }}>
          <TextInput
            placeholder='Reply Now!'
            placeholderTextColor={'gray'}
            maxLength={100}
            style={styles.searchText}
            multiline
            autoCorrect
            autoCapitalize='sentences'
            numberOfLines={3}
            blurOnSubmit={true}
            autoFocus={true}
            onChangeText={newText => setNewComment(newText)}
          />
          <TouchableOpacity
          onPress={onCommentPressed}
            style={{
              position: 'absolute',
              alignSelf: 'flex-end',
              paddingTop: 37,
              paddingRight: 15,

            }}>
            <Feather name="send" size={30} color={mainColor} style={{

            }} />
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  )
}

export default CommentScreen

const styles = StyleSheet.create({
  searchText: {
    flex: 2,
    backgroundColor: 'white',
    paddingLeft: 25,
    textAlignVertical: 'top',
    height: '100%',
    width: ScreenWidth,
    marginBottom: 12,
    color: 'black',
    paddingTop: 15,
    paddingRight: 70,
    fontSize: 18,
    paddingBottom: 25

  },

})