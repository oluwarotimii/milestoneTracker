import React,{ useState }   from "react";
import milestones from "../utils/milestones";
import { pickImage,saveImage } from "../utils/imagePicker";
import * as ImagePicker from 'react-native-image-picker'
import { saveBabyProfile }  from "../utils/storageUtils";
import { StyleSheet, Button,Text, View,ScrollView, TouchableOpacity, TextInput, Alert, Image, Dimensions } from "react-native";
import Colors from "../utils/colors";
import Icon from 'react-native-vector-icons/AntDesign';
import { maleAvatars, femaleAvatars } from "../../avatar/avatar";


const {width, height} = Dimensions.get('window');
const CreateBaby = ({ navigation }) => {
    const [babyName, setBabyName] = useState();
    const [date, setDate] = useState();
    const [timeOfBirth, setTimeOfBirth] = useState();
    const [weight, setWeight] = useState();
    const [babyImage, setBabyImage] = useState(null);
    const [selectedGender, setSelectedGender] = useState(null);
    

   
    
    //   const handleAvatarPress = (avatar) => {
    //     setBabyImage(avatar);
    //   };

    // const handlePickImage = ({navigation}) => {
    //     const options = {
    //         title: 'Select Image',
    //         storageOptions: {
    //             skipBackup: true,
    //             path: 'image',
    //         },
    //     };

    //     pickImage(options, (source) => setBabyImage(source));
    // };
    
    const handleSavebabyProfile = async () =>  {
        if (!babyName || !date || !timeOfBirth || !weight || !babyImage) {
            Alert.alert('Please fill in all the required fields.');
            return;
        }
        const babyProfile = {
            id: Date.now(),
            name: babyName,
            date,
            weight,
            gender: selectedGender,
            image: babyImage ? await saveImage(babyName, 'babyImages', 'baby') : null,
          };
        try {
            const updatedBabyProfile = await saveBabyProfile(babyProfile);
            console.log('Saved Baby  profile : ', updatedBabyProfile );
            Alert.alert('Baby Profile created sucessfully.')
            navigation.navigate('Baby-Profile', { profileId: updatedBabyProfile.id }); 
        } catch (error) {
            console.error('Error saving baby profile', error);
            Alert.alert('Unable to save baby profile.')
        }
    };
    const  ImageSelection = ( { navigation }) => {
      const [babyImage, setBabyImage] = useState(null);
      const [selectedGender, setSelectedGender] = useState(null);
  
      const renderAvatars = () => {
          const avatars = selectedGender === 'male' ? maleAvatars : femaleAvatars;
      
          return avatars.map((avatar, index) => (
            <TouchableOpacity
              key={index}
              onPress={() => handleAvatarPress(avatar)}
              style={styles.avatarItem}
            >
              <Image source={avatar} style={styles.avatar} />
            </TouchableOpacity>
          ));
        };
                const handleAvatarPress = (avatar) => {
          setBabyImage(avatar);
        };
  
      return(
          <View style={{
              backgroundColor: Colors.white,
              height: '100%',
          }}>
                        {babyImage ? (
                      <Image source={babyImage} style={styles.image} />
                      ) : (
                      <View style={styles.avatarContainer}>{renderAvatars()}</View>
                      )}
          </View>
      )
  };
    

    return (
        <ScrollView style={styles.container}>
           <View style={{flexDirection: 'row'}}>
           <TouchableOpacity style={styles.backBtn} onPress={()=> navigation.navigate('Dashboard')}>
                <Icon name='left' size={30}/>
             </TouchableOpacity>
           <View style={styles.header}>   
             <View style={{width: '10%', 
            //  borderWidth: 1,
             }}/> 
             <Text style={styles.headerTxt}> Create  Profile</Text>
             <View style={{width: '10%',
            //   borderWidth: 1,
              }}/> 
           </View>
           </View>
            <View style={styles.createContainer}>
                <View style={styles.imageContainer}>
                    <TouchableOpacity style={{
                            justifyContent: 'space-evenly',
                            // alignSelf: 'center',
                            // fontSize: 20,
                            // fontWeight: '600',
                            // borderWidth: 1,
                            // width: 150,
                            height: 220,
                            flexDirection: 'Column',
                            alignItems: 'center',
                        }} 
                         onPress={() => navigation.navigate('ImageScreen')}
                        > 
                        <Icon  name='plus' size={60}/>
                        <Text style={{
                            justifyContent: 'center',
                            alignSelf: 'center',
                            fontSize: 20,
                            fontWeight: '600',
                            // borderWidth: 1,
                            width: 150,
                            height: 30,
                            flexDirection: 'Column',
                            // alignItems: 'center',
                        }}>  Add Picture</Text>
                    </TouchableOpacity>
                      
                </View>
                <View style={styles.infoContainer}>
                    <Text style={styles.inputTxt}>Name</Text>
                    <TextInput style={styles.babyName}
                    placeholder= 'Baby name'
                    value={babyName}
                    onChangeText={(text) => setBabyName(text) } />

                    <Text style={styles.inputTxt}>Date of Birth</Text>

                    <TextInput style={styles.dateOfBirth}
                    placeholder="DD/MM/YY"
                    value={date}
                    onChangeText={(text) => setDate (text)} /> 

                    <Text style={styles.inputTxt}>Time of Birth</Text>

                    <TextInput style={styles.dateOfBirth}
                    placeholder="Time of Birth"
                    value={timeOfBirth}
                    onChangeText={(text) => setTimeOfBirth (text)} /> 
                    <Text style={styles.inputTxt}>Weight</Text>
                    <TextInput styles={styles.notesTxt}
                    style={styles.weight}
                    placeholder="Weight"
                    value={weight}
                    onChangeText={(text) => setWeight(text) } />
                    <View style={styles.genderButtons}>
            <TouchableOpacity
              style={[styles.genderButton, selectedGender === 'male' && { backgroundColor: Colors.orange }]}
              onPress={() => setSelectedGender('male')}
            >
              <Text style={styles.genderButtonText}>Male</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.genderButton, selectedGender === 'female' && { backgroundColor: Colors.orange }]}
              onPress={() => setSelectedGender('female')}
            >
              <Text style={styles.genderButtonText}>Female</Text>
            </TouchableOpacity>
          </View>
                <TouchableOpacity style={styles.submitBtn} onPress={handleSavebabyProfile}>
                    <Text style={styles.submitTxt}> SAVE </Text>
                </TouchableOpacity>
                </View>
            </View>
        </ScrollView>

        
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // position: 'absolute',
        backgroundColor: Colors.white,
    },
    header:{
        // borderWidth: 2,
        flexDirection: 'row',
        // alignContent: 'center',
        paddingTop: 5,
        paddingBottom: 5,
        justifyContent: 'space-evenly',
        marginBottom: '10%',
    },
    backBtn: {
        marginLeft: '5%',
        marginRight: '5%',
        borderWidth: 1,
        height: '30%',
        width: '10%',
        marginVertical: '0.1%',
        alignItems: 'center',
        backgroundColor: Colors.gray,
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 2,
        borderRadius: 5,
    },
    headerTxt: {
        fontWeight: 'bold',
        fontSize: 20,
        alignSelf: 'center'

    },
    createContainer: {},
    imageContainer:{
        borderWidth: 2,
        height: 250,
        width: 250,
        alignSelf: 'center',
        borderRadius: 500,
        marginBottom: 50,
        backgroundColor: Colors.gray,
    },
    infoContainer: {
        // flex: 1,
        // margin: 20,
        borderWidth: 2,
        height,
    },
    babyName:{
        borderWidth: 1,
        borderColor: Colors.black,
        marginHorizontal: 20,
    },
    dateOfBirth:{
        borderWidth: 1,
        borderColor: 'black',
        marginHorizontal: 20,
    },
    weight: {
        borderWidth: 1,
        borderColor: 'black',
        margin: 20,
    },
    inputTxt:{
        marginLeft: 15,
        marginHorizontal: 40, 
        fontWeight: '500',
        fontSize: 18,
    },
    notesTxt:{
        borderWidth: 2,
        borderColor: 'black',
        margin: 20,
        width: 100,
        height: 70,
    },
    submitBtn:{
        alignSelf: 'center',
        flexDirection: 'row',
        justifyContent: 'center',
        borderWidth: 2,
        borderRadius: 10,
        width: 100,
        height: 50,
        backgroundColor: 'orange',
        borderRadius: 10,
        elevation: 5,
    },
    submitTxt:{
        fontSize: 16,
        alignSelf: 'center',
        padding: 5,
        color: 'white',
        fontWeight: 'bold',
    },
    image: {
        width: 100,
        height: 100,
        resizeMode: 'cover',
        borderRadius: 50,
    },
  avatarContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 20,
  },

  avatarItem: {
    borderRadius: 50,
    overflow: 'hidden',
  },

  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
})
export default CreateBaby;