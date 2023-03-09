import React from 'react'

import { Image, View, Text, StyleSheet, Button, TextInput } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler';
import { AuthContext } from './context';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  button: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginVertical: 10,
    borderRadius: 5,
    alignItems: 'center',
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 50,
    width: 200,
    shadowColor: "black"
  },
  buttonText: {
    fontSize: 18,
    fontWeight: "bold",
  },
  titleText: {
    fontSize: 30,
    fontWeight: "bold",
    color: "white"
  },
  image: {
    height: 200,
    width: 200,
    paddingTop: 0,
  },
  input: {
    height: 40,
    width: 250,
    margin: 12,
    padding: 10,
    backgroundColor: "white",
    borderRadius: 50

  },
});

const ScreenContainer = ({ children }) => (
  <View style={styles.container}>{children}</View>
);

// Authentication Screens

export const Welcome = ({ navigation }) => {
  return (
    <ScreenContainer>
      <Image
        source={require('../assets/NowLogoIconBlancoV2-01.png')}
        style={styles.image}
      />
      <Text style={styles.titleText}>Welcome!</Text>
      <TouchableOpacity style={styles.button} onPress={() => navigation.push("SignIn")}>
        <Text style={styles.buttonText}>Sign In Now!</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => navigation.push("CreateAccount")}>
        <Text style={styles.buttonText}>Register Now!</Text>
      </TouchableOpacity>
    </ScreenContainer>
  )
}

export const SignIn = ({ navigation }) => {
  const { signIn } = React.useContext(AuthContext)
  return (
    <ScreenContainer>
      <Image
        source={require('../assets/NowLogoIconBlancoV2-01.png')}
        style={styles.image}
      />
      <Text style={styles.titleText}>Sign In Now!</Text>
      <TextInput
        style={styles.input}
        placeholder="username"
      />
      <TextInput
        style={styles.input}
        placeholder="password"
      />
      <TouchableOpacity style={styles.button} onPress={() => signIn()}>
        <Text style={styles.buttonText}>Sign In</Text>
      </TouchableOpacity>

    </ScreenContainer>
  );
};

export const CreateAccount = ({ navigation }) => {
  const { signUp } = React.useContext(AuthContext)
  return (
    <ScreenContainer>
      <Image
        source={require('../assets/NowLogoIconBlancoV2-01.png')}
        style={styles.image}
      />
      <Text style={styles.titleText}>Create Account Now!</Text>
      <TextInput
        style={styles.input}
        placeholder="username"
      />
      <TextInput
        style={styles.input}
        placeholder="password"
      />
      <TextInput
        style={styles.input}
        placeholder="confirm password"
      />
      <TouchableOpacity style={styles.button} onPress={() => signUp()}>
        <Text style={styles.buttonText}>Sign Up</Text>
      </TouchableOpacity>

    </ScreenContainer>
  );
};

//Screens

export const Home = ({ navigation }) => (
  <ScreenContainer>
    <Text>Home</Text>
    <Button title="Example" onPress={() => navigation.push("Details", { name: 'Example' })} />
    <Button title="Example" onPress={() => navigation.push("Details", { name: 'Example2' })} />
    <Button title="Drawer" onPress={() => navigation.toggleDrawer()} />
  </ScreenContainer>
)

export const Details = ({ route }) => (
  <ScreenContainer>
    <Text>Details Screen</Text>
    {route.params.name && <Text>{route.params.name}</Text>}
  </ScreenContainer>
);

export const Profile = ({ navigation }) => {
  const { signOut } = React.useContext(AuthContext)

  return (
    <ScreenContainer>
      <Text>Profile</Text>
      <Button title='New Now' onPress={() =>
        navigation.navigate('Home', {
          screen: 'NewNow',
        })
      } />
      <Button title="Drawer" onPress={() => navigation.toggleDrawer()} />
      <Button title="Sign Out" onPress={() => signOut()} />
    </ScreenContainer>
  )
}

export const Search = ({ navigation }) => {
  return (
    <ScreenContainer>
      <Text>Search</Text>
      <Button title='Search' onPress={() => navigation.push("Search2")} />
    </ScreenContainer>
  )
}

export const Search2 = ({ navigation }) => {
  return (
    <ScreenContainer>
      <Text>Search2</Text>
    </ScreenContainer>
  )
}

export const NewNow = ({ navigation }) => {
  return (
    <ScreenContainer>
      <Text>New Now</Text>
    </ScreenContainer>
  )
}

// Extras

export const Splash = () => (
  <ScreenContainer>
    <Image
      source={require('../assets/NowLogoIconV2-01.png')}
      style={{
        height: 200,
        width: 200,

      }} />
  </ScreenContainer>
);