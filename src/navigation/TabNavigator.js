import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import Home from "../component/screens/home";
import MilestoneList from "../component/screens/milestoneList";
import Colors from "../component/utils/colors";


const Tab = createBottomTabNavigator();

const  TabNavigator = () => {
    return(
        <Tab.Navigator
        tabBarOptions={{
            activeTintColor: Colors.teal,
            inactiveTintColor: Colors.gray,
            showLabel: true,
            labelStyle:{
                fontSize: 14,
            },
            style: {
                backgroundColor: Colors.white,
            }
        }}>
            <Tab.Screen name="Home" component={Home}
            options={{
                // tabBarIcon: {{Icon.Home}},
                tabBarStyle:{
                    width: '100%',
                    height: '20%',
                }
            }}
            />
            <Tab.Screen name="MileStones" component={MilestoneList}/>
            {/* <Tab.Screen name="" component={}/> */}
        </Tab.Navigator>
    )
}
export default TabNavigator;