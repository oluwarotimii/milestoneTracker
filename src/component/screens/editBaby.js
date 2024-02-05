import React,{ useState }   from "react";
import milestones from "../utils/milestones";
import { Icon } from "../utils/icon";
import { pickImage,saveImage } from "../utils/imagePicker";
import { getBabyProfiles, updateBabyProfile } from "../utils/storageUtils";
import { Button } from "react-native";

const editBaby = () => {
    const [babyName, setBabyName] = useState();
    const [date, setDate] = useState();
    const [weight, setWeight] = useState();
    const [babyImage, setBabyImage] = useState(null);
    

    const handlePickImage = () => {
        const options = {
            title: 'Select Image',
            storageOptions: {
                skipBackup: true,
                path: 'image',
            },
        };

        pickImage(options, (source) => setBabyImage(source));
    };
    
    const handleSavebabyProfile = async () =>  {
        const babyProfile = {
            id: Date.now(),
            name:babyImage,
            date,
            image:babyProfile ? await saveImage(babyName, 'babyImages', 'baby') : null,
        };
        try {
            const updatedBabyProfile = await saveBabyProfile(babyProfile);
            console.log('Saved Baby  profile : ', updatedBabyProfile );
        } catch (error) {
            console.error('Error saving baby profile', error);
        }
    };


    return (
        <View style={styles.container}>
           <View style={styles.header}>
           <TouchableOpacity style={styles.backBtn}>
                {Icon.left}
             </TouchableOpacity>    
             <Text style={styles.headerTxt}> Create Baby Profile</Text>
           </View>
            <View style={styles.createContainer}>
                {/* <View style={styles.imageContainer}>
                    <Button title="Pick Image" />
                    {babyImage && <Image  source={babyImage} style={styles.image}/>}
                </View> */}
                <View style={styles.infoContainer}>
                    <TextInput 
                    placeholder= 'Baby name'
                    value={babyName}
                    onChangeText={(text) => setBabyName(text) } />
                    <TextInput style={styles.dateOfBirth}
                    placeholder="Date of Birth"
                    value={date}
                    onChangeText={(text) => setDate (text)} /> 
                </View>
                <View style={styles.notesContainer}>
                    <TextInput styles={styles.notesTxt}
                    placeholder="weight"
                    value={weight}
                    onChangeText={(text) => setWeight(text) } />
                </View>
                <TouchableOpacity style={styles.submitBtn}>
                    <Text style={styles.submitTxt}> Save </Text>
                </TouchableOpacity>
            </View>
        </View>

        
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // position: 'absolute',
    },
    header:{
        borderWidth: 2,
        flexDirection: 'row',
        // alignContent: 'center',
        paddingTop: 5,
        paddingBottom: 5,
        // justifyContent: 'space-evenly',
        marginBottom: '10%',
    },
    backBtn: {
        marginLeft: '5%',
        marginRight: '5%',
        borderWidth: 1,
        width: '10%',
        alignItems: 'center',
    },
    headerTxt: {},
    createContainer: {},
    imageContainer:{
        borderWidth: 2,
        height: '40%',
        width: '80%',
        alignSelf: 'center',
    },
    infoContainer: {
        // flex: 1,
        // margin: 20,
    },
    milestoneTxt:{
        borderWidth: 2,
        borderColor: 'black',
        margin: 20,
    },
    dateOfBirth:{
        borderWidth: 2,
        borderColor: 'black',
        margin: 20,
    },
    notesContainer: {
        borderWidth: 2,
        borderColor: 'black',
        margin: 20,
    },
    notesTxt:{
        borderWidth: 2,
        borderColor: 'black',
        margin: 20,
        width: '100%',
        height: '70%',
    },
    submitBtn:{
        alignSelf: 'center',
        flexDirection: 'row',
        justifyContent: 'center',
        borderWidth: 2,
        width: '25%',
        height: '7%',
    },
    submitTxt:{
        fontSize: 16,
        alignSelf: 'center',
        padding: 5,
        color: 'black',
    },
    image: {
        width: 100,
        height: 100,
        resizeMode: 'cover',
        borderRadius: 50,
    },
})
export default editBaby;