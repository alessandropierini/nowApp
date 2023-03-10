import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeScreen from '../screens/HomeScreen';
import ProfileScreen from '../screens/ProfileScreen';
import NewNowScreen from '../screens/NewNowScreen';
import NotificationScreen from '../screens/NotificationScreen';
import FollowingScreen from '../screens/FollowingScreen';

const Tabs = createBottomTabNavigator()

const HomeTabs = () => {
    return (
        <Tabs.Navigator initialRouteName='Home'>
            <Tabs.Screen name="Home" component={HomeScreen} />
            <Tabs.Screen name="Following" component={FollowingScreen} />
            <Tabs.Screen name="New Now" component={NewNowScreen} />
            <Tabs.Screen name="Notifications" component={NotificationScreen} />
            <Tabs.Screen name="Profile" component={ProfileScreen} />
        </Tabs.Navigator>)
}

export default HomeTabs