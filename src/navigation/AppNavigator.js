import React  from "react";
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
import OnboardingScreen from "../component/onboard/onboarding";
import { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import BabyProfileSelection from "../component/screens/selectProfile";
import ImageSelection from "../component/screens/image";
import Settings from "../component/screens/settings";




const Stack = createNativeStackNavigator();

const AppNavigator = () => {

    const [isAppFirstLaunched, setIsAppFirstLaunched] = useState(null);
  
    useEffect(async () => {
      const appData = await AsyncStorage.getItem('isAppFirstLaunched');
      if (appData == null) {
        setIsAppFirstLaunched(true);
        AsyncStorage.setItem('isAppFirstLaunched', 'false');
      } else {
        setIsAppFirstLaunched(true);
      }
  
      // AsyncStorage.removeItem('isAppFirstLaunched');
    }, []);
  


    return(
        isAppFirstLaunched != null && (
        <NavigationContainer >
            <Stack.Navigator 
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
          {isAppFirstLaunched && (
            <Stack.Screen
              name="Onboard"
              component={OnboardingScreen}
            />
          )}
            <Stack.Screen  name="Dashboard" component={TabNavigator}/>
            <Stack.Screen  name="Home" component={Home}/>
            <Stack.Screen  name="Select" component={BabyProfileSelection}/>
            <Stack.Screen  name="Baby-Profile" component={CreateBabyProfile}/>
            <Stack.Screen  name="Create-Milestones" component={CreateMilestone}/>
            <Stack.Screen  name="Babies" component={BabyProfile}/>
            <Stack.Screen  name="Milestone-View" component={MilestoneView}/>
            <Stack.Screen  name="Create-baby" component={CreateBabyProfile}/>
            <Stack.Screen  name="Edit" component={EditMilestone}/>
            {/* <Stack.Screen  name="" component={}/> */}
          <Stack.Screen  name="ImageScreen" component={ImageSelection}/> 
          <Stack.Screen  name="Settings" component={Settings}/>
        </Stack.Navigator>
        </NavigationContainer>
    )
    );
}
export default AppNavigator;
