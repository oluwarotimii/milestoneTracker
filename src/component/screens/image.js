import React, { useState } from "react";
import { Image,StyleSheet, TouchableOpacity, View } from 'react-native';
import { maleAvatars, femaleAvatars } from "../../avatar/avatar";
import Colors from "../utils/colors";

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

const styles = StyleSheet.create({ 
    image: {
        width: 100,
        height: 100,
        resizeMode: 'cover',
        borderRadius: 50,
    },
  avatarContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
    borderWidth: 2,
    height: 400,
    flexWrap: 'wrap',
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
});
export default ImageSelection;