import { View, Text, StyleSheet, Button } from 'react-native'

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
    borderRadius: 5
  }
});

const ScreenContainer = ({ children }) => (
  <View style={styles.container}>{children}</View>
);

// Authentication Screens

export const Welcome = ({ navigation }) => {
  return (
    <ScreenContainer>
      <Text>Welcome!</Text>
      <Button title="Sign In Now" onPress={() => navigation.push("SignIn")} />
      <Button title="Register Now" onPress={() => navigation.push("CreateAccount")} />
    </ScreenContainer>
  )
}

export const SignIn = ({ navigation }) => {
  return (
    <ScreenContainer>
      <Text>Sign In Screen</Text>
      <Button
        title="Login"
        onPress={() => alert("Logged In")} />
    </ScreenContainer>
  );
};

export const CreateAccount = ({ navigation }) => {
  return (
    <ScreenContainer>
      <Text>Create Account Screen</Text>
      <Button title="Sign Up" onPress={() => alert("Signed up!")} />
    </ScreenContainer>
  );
};

//Screens

export const Home = ({ navigation }) => (
  <ScreenContainer>
    <Text>Home</Text>
    <Button title="Example" onPress={() => navigation.push("Details", { name: 'Example' })} />
    <Button title="Example" onPress={() => navigation.push("Details", { name: 'Example2' })} />
    <Button title="Drawer" onPress={() => alert("Drawer")} />
  </ScreenContainer>
)

export const Details = ({ route }) => (
  <ScreenContainer>
    <Text>Details Screen</Text>
    {route.params.name && <Text>{route.params.name}</Text>}
  </ScreenContainer>
);

export const Profile = ({ navigation }) => {
  return (
    <ScreenContainer>
      <Text>Profile</Text>
      <Button title='New Now' onPress={() => 
      navigation.navigate('Home', {
        screen: 'NewNow',
      }) 
    } />
      <Button title="Drawer" onPress={() => alert("Drawer")} />
      <Button title="Sign Out" onPress={() => alert("Signed out!")} />
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