import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createDrawerNavigator } from "@react-navigation/drawer";

import { SignIn, CreateAccount, Welcome, Home, Profile, Search, Details, Search2, NewNow } from './src/Screens'

const AuthStack = createStackNavigator()
const Tabs = createBottomTabNavigator()
const HomeStack = createStackNavigator()
const ProfileStack = createStackNavigator()
const Drawer = createDrawerNavigator()

const TabsScreen = () => (
    <Tabs.Navigator
        initialRouteName="Home"
    >
        <Tabs.Screen name="Search" component={SearchStackScreen} />
        <Tabs.Screen name="Home" component={HomeStackScreen} />
        <Tabs.Screen name="Profile" component={ProfileStackScreen} />
    </Tabs.Navigator>
)


const HomeStackScreen = () => (
    <HomeStack.Navigator>
        <HomeStack.Screen name="Home" component={Home} />
        <HomeStack.Screen name="Details" component={Details}
            options={({ route }) => ({
            })} />
        <HomeStack.Screen name="NewNow" component={NewNow} />
    </HomeStack.Navigator>
)

const ProfileStackScreen = () => (
    <ProfileStack.Navigator>
        <HomeStack.Screen name="Profile" component={Profile} />
    </ProfileStack.Navigator>
)

const SearchStackScreen = () => (
    <ProfileStack.Navigator>
        <HomeStack.Screen name="Search" component={Search} />
        <HomeStack.Screen name="Search2" component={Search2} />
    </ProfileStack.Navigator>
)

export default () => (
    <NavigationContainer>
        <Drawer.Navigator>
            <Drawer.Screen name="Home" component={TabsScreen} />
            <Drawer.Screen name="Profile" component ={ProfileStackScreen} />
        </Drawer.Navigator>
    </NavigationContainer>
)


/*
        <AuthStack.Navigator
            initialRouteName="Welcome"
            screenOptions={{
                headerShown: true,
                headerBackTitle: "Back",
              }}
            >
            <AuthStack.Screen name="Welcome" component={Welcome} options={{
                headerShown: false
            }}/>
            <AuthStack.Screen name="SignIn" component={SignIn} options = {{
                title: "Sign in Now!"
            }}/>
            <AuthStack.Screen name="CreateAccount" component={CreateAccount} options = {{
                title: "Sign Up Now!"
            }}/>

        </AuthStack.Navigator>
*/