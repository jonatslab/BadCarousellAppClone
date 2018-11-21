import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

class Groups extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Welcome to Groups!</Text>
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

export { Groups };