import React, { useState } from 'react';
import { Alert, Image, Text, TouchableOpacity, View } from 'react-native';
import * as ImagePicker from 'react-native-image-picker';
import Video from 'react-native-video';
interface optionsProps {
  mediaType: ImagePicker.MediaType;
  quality: ImagePicker.PhotoQuality;
}
const App = () => {
  const [image, setImage] = useState<String>('');

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

    const option: optionsProps = {
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
      <Video
        source={{
          uri: 'https://www.udemy.com/course/react-the-complete-guide-incl-redux/learn/lecture/38345144?start=0#overview',
        }}
        style={{position: 'absolute', top: 0, left: 0, bottom: 0, right: 0}}
      />
      <TouchableOpacity
        onPress={() => {
          Alert.alert('Enter Options', 'For upload image', [
            {
              text: 'open cemera',
              onPress: shotPhoto,
            },
            {
              text: 'open gallery',
              onPress: pickImage,
            },
            {
              text: 'Cencel',
               style:'cancel'
              // onPress: pickImage,
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
            backgroundColor: 'blue',
          }}>
          <Text
            style={{
              fontSize: 16,
              marginBottom: 20,
              alignSelf: 'center',
              color: '#fff',
              fontFamily:'nato1'
            }}>
            Pick an Image
          </Text>
        </View>
      </TouchableOpacity>
      {image && (
        <Image
          source={{uri: image}}
          style={{
            width: 200,
            height: 200,
            alignSelf: 'center',
            marginVertical: 12,
            borderRadius: 20,
          }}
        />
      )}
    </View>
  );
};

export default App;
