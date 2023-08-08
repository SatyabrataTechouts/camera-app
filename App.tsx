import React, { useState } from 'react';
import { Alert, Image, Text, TouchableOpacity, View } from 'react-native';
import * as ImagePicker from 'react-native-image-picker';

interface optionsProps {
  mediaType: String;
  quality: Number;
}
const App = () => {
  const [image, setImage] = useState(null);

  const pickImage = async () => {
    const options: optionsProps = {
      mediaType: 'photo' || 'video',
      quality: 1, // 0.0 - 1.0
    };

    ImagePicker.launchImageLibrary(options, response => {
      console.log(response);

      if (!response.didCancel && !response.errorMessage) {
        console.log('open gallery');

        setImage(response.assets[0].uri);
      }
    });
  };
  const shotPhoto = async () => {
    console.log('open cemera');

    const option = {
      mediaType: 'photo' || 'video',
      quality: 1, // 0.0 -
    };
    ImagePicker.launchCamera(option, res => {
      console.log('open cemera1', res);
      if (!res.didCancel && !res.errorMessage) {
        console.log('open cemera2');
        setImage(res.assets[0].uri);
      }
    });
  };

  console.log('image', image);
  return (
    <View style={{justifyContent: 'center', flex: 1, alignItems: 'center'}}>
      <TouchableOpacity
        onPress={() => {
          Alert.alert('Enter Options', '', [
            {
              text: 'open cemera',
              onPress: shotPhoto,
            },
            {
              text: 'open gallery',
              onPress: pickImage,
            },
          ]);
        }}>
        <View
          style={{
            height: 130,
            width: 130,
            borderRadius: 23,
            borderColor: '#000',
            borderWidth: 1,
            justifyContent: 'center',
            backgroundColor:'blue'
          }}>
          <Text
            style={{
              fontSize: 16,
              marginBottom: 20,
              alignSelf: 'center',
              color:'#fff'
            }}>
            Pick an Image
          </Text>
        </View>
      </TouchableOpacity>
      {image && (
        <Image
          source={{uri: image}}
          style={{width: 200, height: 200, alignSelf: 'center'}}
        />
      )}
    </View>
  );
};

export default App;
