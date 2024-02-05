import React, { useEffect, useState } from "react";
import { Text, View, StyleSheet,Image, TouchableOpacity, FlatList } from "react-native";
import { getMilestones } from "../utils/storageUtils";


const MilestoneList = ([navigation]) => {
    const [milestones, setMilestone] = useState();

    useEffect(() => {
        const fetchMilestones = async () => {
            try {
                const storedMilestones = await getMilestones();
                setMilestone(storedMilestones);
            } catch (error) {
                console.error( 'Error loading milestones', error);
            }
        };

        fetchMilestones();
    }, []);

    const ListRender = ({item }) => {
        return(
            <View style={styles.Mscontainer}>
                <TouchableOpacity>
                    {/* <Image />  */}
                    <Text> Milestone Text</Text>
                    <Text> Milestone date</Text>
                </TouchableOpacity>
            </View>
        )
    };

    const NoListRender = () => {
        return (
            <View style={styles.noList} >
                <Text> No milestone yet </Text>
            </View>
        )
    };

        return (
        <View  style={styles.container}>
        <View>
        <Text style={styles.Header}> Milestones </Text>
        </View>
            {milestones.length > 0 ? (
                <FlatList
            data={milestones}
            keyExtractor={( item) => item.id}
            renderItem={ListRender} />
            ):(
                NoListRender()
            )}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {},
    Header:{},
    Mscontainer:{},
})
export default MilestoneList;