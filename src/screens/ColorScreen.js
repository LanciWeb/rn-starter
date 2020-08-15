import React from 'react';
import { FlatList, StyleSheet, Button, View } from 'react-native';

const ColorScreen = () => {
  const [colors, setColors] = React.useState([]);

  const generateColor = () => {
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);

    const newColor = `rgb(${red},${green},${blue})`;
    setColors([...colors, newColor]);
  };
  return (
    <View>
      <Button title="Add Color" onPress={generateColor} />
      <FlatList
        data={colors}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={{ height: 100, width: 100, backgroundColor: item }} />
        )}
      />
    </View>
  );
};

export default ColorScreen;

const styles = StyleSheet.create({});
