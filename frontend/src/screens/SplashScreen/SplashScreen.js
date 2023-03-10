import React from 'react'
import { Image, View, StyleSheet } from 'react-native'

const ScreenContainer = ({ children }) => (
  <View style={styles.container}>{children}</View>
);

export const SplashScreen = () => (
  <ScreenContainer>
    <Image
      source={require('../../../assets/NowLogoIconV2-01.png')}
      style={{
        height: 200,
        width: 200,

      }} />
  </ScreenContainer>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
})

export default SplashScreen