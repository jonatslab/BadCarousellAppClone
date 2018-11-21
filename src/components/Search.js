import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

class Search extends React.Component {

  render() {
    return (
      <View style={styles.container}>
        <Text>Welcome to Search!</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export { Search };