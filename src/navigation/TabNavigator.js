import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import dashBoard from "../component/dashboard";
import Home from "../component/home";
import MilestoneList from "../component/milestoneList";


const Tab = createBottomTabNavigator();

const  TabNavigator = () => {
    return(
        <Tab.Navigator>
            <Tab.Screen name="Home" component={Home}/>
            <Tab.Screen name="MileStones" component={MilestoneList}/>
            {/* <Tab.Screen name="" component={}/> */}
        </Tab.Navigator>
    )
}
export default TabNavigator;