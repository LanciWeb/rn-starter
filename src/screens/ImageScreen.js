import React from 'react';
import ImageDetail from '../components/ImageDetail';
import { StyleSheet, Text, View } from 'react-native';
const ImageScreen = () => {
  return (
    <View>
      <ImageDetail
        title="Beach"
        score="9"
        source={require('../../assets/beach.jpg')}
      />
      <ImageDetail
        title="Forest"
        score="6"
        source={require('../../assets/forest.jpg')}
      />
      <ImageDetail
        score="7"
        title="Mountain"
        source={require('../../assets/mountain.jpg')}
      />
    </View>
  );
};

export default ImageScreen;

const styles = StyleSheet.create({});
