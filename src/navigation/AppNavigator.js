import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
// import dashBoard from "../component/screens/dashboard";
import Home from "../component/screens/home";
import BabyProfile from "../component/screens/babyProfile";
import CreateMilestone from "../component/screens/createMilestone";
import MilestoneView from "../component/screens/milestoneView";
import EditMilestone from "../component/screens/editMilestone";
import CreateBabyProfile from "../component/screens/createBaby";
import TabNavigator from "./TabNavigator";



const Stack = createNativeStackNavigator();

const AppNavigator = () => {
    return(
        <NavigationContainer >
            <Stack.Navigator  initialRouteName="Dashboard"
            screenOptions= {{
                headerShown: false,
                headerStyle : {
                    // height: '10%',
                },
                headrerTitleStyle: {
                    fontFamily: 'Helvetica',
                    fontSize: 16,
                },
            }}>
            {/* <Stack.Screen  name="Dashboard" component={TabNavigator}/> */}
            {/* <Stack.Screen  name="Home" component={Home}/> */}
            <Stack.Screen  name="Baby-Profile" component={CreateBabyProfile}/>
            <Stack.Screen  name="Create-Milestones" component={CreateMilestone}/>
            <Stack.Screen  name="Babies" component={BabyProfile}/>
            <Stack.Screen  name="Milestone-View" component={MilestoneView}/>
            {/* <Stack.Screen  name="" component={CreateBabyProfile}/> */}
            <Stack.Screen  name="Edit" component={EditMilestone}/>
                {/* <Stack.Screen  name="" component={}/> */}
        </Stack.Navigator>
        </NavigationContainer>
    )
}
export default AppNavigator;