import React from 'react';
import { StyleSheet, Text, FlatList } from 'react-native';

const ListScreen = () => {
  const people = [
    { name: 'Marco', age: 34 },
    { name: 'Mamma', age: 60 },
    { name: 'Monica', age: 31 },
    { name: 'Lorenzo', age: 29 },
    { name: 'Giulia', age: 29 },
    { name: 'Rossella', age: 34 },
    { name: 'Walter', age: 21 },
    { name: 'Azzurra', age: 18 },
  ];

  return (
    <FlatList
      data={people}
      horizontal={false} //allows the list to scroll horizontally
      showsHorizontalScrollIndicator={false} //hides the horizontal scrollbar
      keyExtractor={(item) => item.name} //creates the key starting from each item
      renderItem={({ item }) => (
        <Text style={styles.textStyle}>
          {item.name} - age:{item.age}
        </Text>
      )}
    />
  );
};

export default ListScreen;

const styles = StyleSheet.create({
  textStyle: { marginVertical: 50, marginHorizontal: 30 },
});
