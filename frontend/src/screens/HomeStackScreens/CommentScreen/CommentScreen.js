import { StyleSheet, Text, View, ScrollView, TextInput, Dimensions, TouchableOpacity, Alert } from 'react-native'
import React, { useState } from 'react'
import NowCard from '../../../components/NowCard'
import Feather from 'react-native-vector-icons/Feather'
import CustomButton from '../../../components/customButton/customButton'
import CommentCard from '../../../components/CommentCard'
import { DummyUserData } from '../../../mock/DummyUserData'
import { DummyCommentData } from '../../../mock/DummyCommentData'
import moment from 'moment'
import { useNavigation } from '@react-navigation/native'

const ScreenWidth = Dimensions.get('window').width
const ScreenHeight = Dimensions.get('window').height
const mainColor = "#2a3491"
const CommentData = DummyCommentData

//Using data from Now, shows the Now, comments and allows for comment creation

const CommentScreen = ({ route }) => {

  const nav = useNavigation()
  const { key, id, name, verified, tweet, image, prof, time, like, reply } = route.params
  const filteredComments = CommentData.filter(dat=>dat.tweet.includes(tweet))

  const comment = true

  const [newComment, setNewComment] = useState("")
  function onCommentPressed() {
    if (!newComment.trim().length) {
      Alert.alert(
        'Error',
        'Empty Reply!',
        [
          { text: 'Close', style: 'close' },
        ]
      )
    } else {
      var trimmedComment = newComment.trim()
      var instant = moment()
      console.log({ DummyUserData, trimmedComment, instant })
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
              paddingTop: 45,
              paddingRight: 20,

            }}>
            <Feather name="send" size={30} color={mainColor} style={{

            }} />
          </TouchableOpacity>
        </View>
        <View>
          {filteredComments.map(dat=>
            <CommentCard 
              tweet = {dat.tweet}
              id = {dat.id}
              name = {dat.name}
              verified = {dat.verified}
              prof = {dat.prof}
              comment = {dat.comment}
              time = {dat.time}
              like = {dat.like}
            />)}
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
    height: 120,
    width: ScreenWidth,
    marginBottom: 12,
    color: 'black',
    paddingTop: 15,
    paddingRight: 70,
    fontSize: 18,
    paddingBottom: 25

  },

})