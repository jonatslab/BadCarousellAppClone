import React from 'react';
import { StyleSheet, Text, View, ActivityIndicator } from 'react-native';
import * as firebase from 'firebase';

class AuthCheck extends React.Component {
  constructor(props) {
    super(props)
  }
  componentDidMount() {
    const firebaseConfig = {
        apiKey: 'AIzaSyBXoGXuVFaH9deC_DXn27TVBovhqEOmNAU',
        authDomain: 'badcarousellappclone.firebaseapp.com',
        databaseURL: 'https://badcarousellappclone.firebaseio.com',
        projectId: 'badcarousellappclone',
        storageBucket: 'badcarousellappclone.appspot.com',
        messagingSenderId: '80761366371'
    }
    if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
    }
    firebase.auth().onAuthStateChanged((user) => {
        user? this.props.navigation.navigate('AppNavigator') : this.props.navigation.navigate('AuthNavigator')
    });
  }
  
  render() {
    return (
      <View style={styles.container}>
        <ActivityIndicator 
            color='red'
            size='large'
        />
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

export { AuthCheck };