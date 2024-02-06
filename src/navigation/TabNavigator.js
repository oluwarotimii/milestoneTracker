import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import Home from "../component/screens/home";
import MilestoneList from "../component/screens/milestoneList";
import Colors from "../component/utils/colors";
import Icon from 'react-native-vector-icons/Entypo';
import CreateMilestone from "../component/screens/createMilestone";
import { View, StyleSheet } from "react-native";
import BabyProfileSelection from "../component/screens/selectProfile";

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarHideOnKeyboard: true,
      }}
      tabBarOptions={{
        activeTintColor: Colors.teal,
        inactiveTintColor: Colors.gray,
        showLabel: false,
        labelStyle: {
          fontSize: 17,
          color: 'black',
        },
        style: {
          backgroundColor: Colors.white,
          width: '90%',
          height: '7%',
          borderTopRadius: 10,
          position: 'absolute',
          bottom: 20,
          left: 25,
          right: 25,
          elevation: 5,
          borderRadius: 30,
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: ({ focused }) => focused ? 'Home' : null,
          tabBarIcon: ({ focused }) => (
            <Icon name='home' size={30} color={focused ? 'black' : '#9594e5'} />
          ),
        }}
      />
      <Tab.Screen
        name="Create"
        component={BabyProfileSelection}
        options={{
          tabBarLabel: ({ focused }) => focused ? 'Create' : null,
          tabBarIcon: ({ focused }) => (
            <View style={focused ? styles.circleFocused : styles.circle}>
              <Icon name='plus' size={30} color={focused ? Colors.white : '#9594e5'} />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Milestones"
        component={MilestoneList}
        options={{
          tabBarLabel: ({ focused }) => focused ? 'Milestones' : null,
          tabBarIcon: ({ focused }) => (
            <Icon name='flag' size={30} color={focused ? 'black' : '#9594e5'} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  circle: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: Colors.gray,
    justifyContent: 'center',
    alignItems: 'center',
  },
  circleFocused: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: Colors.black,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default TabNavigator;
