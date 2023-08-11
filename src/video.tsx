import React, { useState } from 'react';
import { Alert, Image, Pressable, Text, View } from 'react-native';
import * as ImagePicker from 'react-native-image-picker';
import Video from 'react-native-video';

const MediaComponent = () => {
  const [mediaURI, setMediaURI] = useState(null);

  const addMedia = async mediaType => {
    const options = {
      mediaType: mediaType,
      quality: 1,
    };

    ImagePicker.launchCamera(options, response => {
        
      if (response.didCancel) {
        // User canceled the capture
        Alert.alert('Capture Canceled', 'You canceled the capture.');
      } else if (response.error) {
        // Error during capture
        Alert.alert('Error', 'An error occurred during capture.');
      } else {
        // Capture successful
        setMediaURI(response.assets[0].uri);
      }
    });
  };

  return (
    <View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-evenly',
          marginBottom: 20,
          marginVertical:23
        }}>
        <Pressable
          onPress={() => addMedia('photo')}
          style={{height: 45, width: 120, borderWidth: 1}}>
          <Text style={{alignSelf:'center'}}>Capture Image</Text>
        </Pressable>
        <Pressable
          onPress={() => addMedia('video')}
          style={{height: 45, width: 120, borderWidth: 1}}>
          <Text style={{alignSelf:'center'}}>Capture Video</Text>
        </Pressable>
      </View>
      {mediaURI && (
        <View style={{flex: 1, alignItems: 'center'}}>
          {mediaURI.endsWith('.mp4') ? (
            <VideoComponent videoURI={mediaURI} />
          ) : (
            <Image source={{uri: mediaURI}} style={{width: 300, height: 300}} />
          )}
        </View>
      )}
    </View>
  );
};

const VideoComponent = ({videoURI}) => {
  return (
    <Video
      source={{uri: videoURI}}
      controls={true}
      fullscreen={false}
      style={{width: 300, height: 300}}
    />
  );
};

export default MediaComponent;
