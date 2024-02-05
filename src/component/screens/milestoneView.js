import React from "react";
import { Text, View, StyleSheet,Image } from "react-native";

const MilestoneView = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.headerTxt}>Edit Milestone</Text>     
            <View style={styles.editContainer}>
               <View style={styles.welcomeContainer}>
                <Text> Welcome + Time</Text>
               <View style={styles.imageContainer}>
                    <Image />
                </View>
               </View>
                <View style={styles.infoContainer}>
                    <Text style={styles.milestoneTxt}> Baby's Name + Milestone </Text>
                    <Text style={styles.milestoneDate}> Date of the milestone</Text>
                </View>
                <View style={styles.notesContainer}>
                    <Text styles={styles.notesTxt}> The Special Notes inputed peviousl</Text>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {},
    headerTxt: {
        borderColor: "black",
        borderWidth: 1,
        width: '100%',
    },
    editContainer: {},
    imageContainer:{},
    infoContainer: {},
    milestoneTxt:{},
    milestoneDate:{},
    notesContainer: {},
    notesTxt:{},
})
export default MilestoneView;