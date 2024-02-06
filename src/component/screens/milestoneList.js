import React, { useEffect, useState } from "react";
import { Text, View, StyleSheet,Image, TouchableOpacity, FlatList, Dimensions } from "react-native";
import { getMilestones } from "../utils/storageUtils";
import Icon from 'react-native-vector-icons/AntDesign';
import Colors from "../utils/colors";



const {width, height} = Dimensions.get('window');


const MilestoneList = ({ navigation }) => {
    const [milestone, setMilestone] = useState([]);

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
            <ScrollView style={styles.Mscontainer}>
                <TouchableOpacity >
                    {/* <Image />  */}
                    <Text> Milestone</Text>
                    <Text> Milestone date</Text>
                </TouchableOpacity>
            </ScrollView>
        )
    };

    const NoListRender = () => {
        return (
            <View style={styles.noList} >
                <Text style={{
                    fontSize: 25,
                    fontWeight: 'bold',
                    alignSelf: "center",
                    justifyContent: "center",
                    height: '100%',
                    // borderWidth: 1,
                }}> NO MILESTONE YET </Text>
            </View>
        )
    };

        return (
        <View  style={styles.container}>
        <View style={styles.Header}>
        {/* <TouchableOpacity style={styles.backBtn}  onPress={() => navigation.goBack()}>
                <Icon name='left' size={20} />
             </TouchableOpacity>   */}
        <Text style={styles.HeaderTxt}> Milestones </Text>
        </View>
            {milestone.length > 0 ? (
                <FlatList
            data={milestone}
            keyExtractor={( item) => item.id}
            renderItem={ListRender} />
            ):(
                NoListRender()
            )}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.white,
        flex: 1,
        height: '100%',
    },
    Header:{
        borderColor: '#ddd',
        borderBottomWidth: 2,
        backgroundColor: Colors.white,
        width: '100%',
        height: '4%',
        // marginVertical: '2%',
        // marginLeft: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    HeaderTxt:{
        fontSize: 20,
        fontWeight: 'bold',
        justifyContent: 'center',
    },
    
    Mscontainer:{},
    noList:{
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: '50%',
    },
})
export default MilestoneList;