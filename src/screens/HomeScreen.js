import React from 'react';
import { View, Text, Button, StyleSheet, FlatList } from 'react-native';

const HomeScreen = (props) => {
  const { navigate } = props.navigation;
  const routes = [
    'Components',
    'List',
    'Image',
    'Counter',
    'Color',
    'RGB',
    'Text',
    'BoxModel'
  ];

  return (
    <View>
      <Text style={styles.text}>Home</Text>
      <FlatList
        data={routes}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <Button title={`Go to ${item} Demo`} onPress={() => navigate(item)} />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
});

export default HomeScreen;
