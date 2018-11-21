import React from 'react';
import { StyleSheet, View, StatusBar } from 'react-native';
import { MainNavigator } from './src/Navigator';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <MainNavigator/> 
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
