import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'

const mainColor = "#2a3491"

const SearchProfCard = ({id, name, verified, prof, nav, bio, followers, following}) => {
  return (
    <View style={styles.container}>
      <View style={styles.leftCont}>
        <Image
          style={{ height: 30, width: 30, borderRadius: 30, margin: 3 }}
          source={{ uri: prof }}
        />
      </View>
      <View style={styles.rightCont}>
        <View style={styles.topCont}>
          <View style={styles.nameCont}>
            <Text style={styles.nameText} onPress={() => { nav.navigate("UserProfileScreen", { id, name, verified, prof, bio, followers, following }) }}>{name}</Text>
            {verified&&<MaterialIcons name="verified" color={mainColor} size={20} />}
            <Text style={styles.idText}>@{id}</Text>
          </View>
        </View>
      </View>
    </View>
  )
}

export default SearchProfCard

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingBottom: 5,
    borderBottomColor: 'gray',
    borderBottomWidth: 1
  },
  rightCont: {
    flex: 1,
    paddingBottom: 6,
    paddingBottom: 5,
    marginLeft: 5,
    flexDirection: 'column',
    justifyContent: 'center',
    marginTop: 5
  },
  nameCont: {
    flexDirection: 'row',

  },
  topCont: {
    flex: 1,


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

})