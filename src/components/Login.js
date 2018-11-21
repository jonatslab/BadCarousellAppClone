import React from 'react';
import { StyleSheet, Text, View, Button, Dimensions, Image } from 'react-native';
import { FontAwesome, MaterialCommunityIcons as MaterialIcon } from '@expo/vector-icons';
import { LinearGradient } from 'expo';
import * as firebase from 'firebase';
import Swiper from 'react-native-swiper';

const { height, width } = Dimensions.get('window');

class Login extends React.Component {

  async loginWithFacebook() {
    const result = await Expo.Facebook.logInWithReadPermissionsAsync(
      '579407055846888',
      { 
        permissions: ['public_profile'], 
        behavior: 'native' 
      }
    );
    switch (result.type) {
      case 'success':
            // Build Firebase credential with the Facebook access token.
            const credential = firebase.auth.FacebookAuthProvider.credential(result.token);
            // Sign in with credential from the Facebook user.
            firebase.auth().signInAndRetrieveDataWithCredential(credential)
              .then(function(userCredential) {
              console.log(userCredential);
            });
      case 'cancel':
            console.log('cancelled')  
      default: 
            console.log('nothing happens')  
    }
  }
  async loginWithGoogle() {
      try {
          const result = await Expo.Google.logInAsync({
            androidClientId: '80761366371-kqoktu6ve5jva4ag4mpp5qplrq762fll.apps.googleusercontent.com',
            // iosClientId: YOUR_CLIENT_ID_HERE,
            scopes: ['profile', 'email'],
          });
          console.log(result.accessToken)
          switch (result.type) {
            case 'success':
                  // Build Firebase credential with the Facebook access token.
                  const credential = firebase.auth.GoogleAuthProvider.credential(result.idToken,result.accessToken);
                  // Sign in with credential from the Facebook user.
                  firebase.auth().signInAndRetrieveDataWithCredential(credential)
                    .then(function(userCredential) {
                    console.log(userCredential);
                  });
            case 'cancel':
                  console.log('cancelled')  
            default: 
                  console.log('nothing happens')  
          }
      } catch(e) {
        console.log(e)
      }
  }
  render() {
    return (
      <View style={styles.container}>
          <Swiper style={{flex: 1}}
                  loop={false}
                  index={0}
                  activeDotColor='#fff'
                  activeDotStyle={styles.dotStyle}
                  dotStyle={styles.dotStyle}
          >
               <View style={styles.slide}>
                  <Image
                    style={styles.swiperImageStyle}
                    source={{ uri: 'https://images.unsplash.com/photo-1508179317010-fc9ffe5e6e78?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=fc83b82408db77329d80f75770202a4c&auto=format&fit=crop&w=500&q=60'}}
                  />
                  <LinearGradient  colors={["transparent", "black"]} locations={[0.3,1]} style={styles.linearGradient}/>
              </View>
              <View style={styles.slide}>
                  <Image
                    style={styles.swiperImageStyle}
                    source={{ uri: 'https://images.unsplash.com/photo-1508767597875-c1c68f7b50a8?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=3b3b242194a555607d5a041c54622609&auto=format&fit=crop&w=500&q=60'}}
                  />
                  <LinearGradient  colors={["transparent", "black"]} locations={[0.3,1]} style={styles.linearGradient}/>
              </View>
              <View style={styles.slide}>
                  <Image
                    style={styles.swiperImageStyle}
                    source={{ uri: 'https://images.unsplash.com/photo-1508169041381-de3f6dfcb1a9?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=5a9083e3492e2975b83dda9dcdfaf479&auto=format&fit=crop&w=500&q=60'}}
                  />
                  <LinearGradient  colors={["transparent", "black"]} locations={[0.3,1]} style={styles.linearGradient}/>
              </View>
              <View style={styles.slide}>
                  <Image
                    style={styles.swiperImageStyle}
                    source={{ uri: 'https://images.unsplash.com/photo-1507960322295-13b19a9729d5?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=73221b5dffa22db0e342fdc76815c2fb&auto=format&fit=crop&w=500&q=60'}}
                  />
                  <LinearGradient  colors={["transparent", "black"]} locations={[0.3,1]} style={styles.linearGradient}/>
              </View>
              <View style={styles.slide}>
                  <Image
                    style={styles.swiperImageStyle}
                    source={{ uri: 'https://images.unsplash.com/photo-1532877590696-69a157b92b78?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=5190001ca11cad9bfa82330ed85eb0fd&auto=format&fit=crop&w=500&q=60'}}
                  />
                  <LinearGradient  colors={["transparent", "black"]} locations={[0.3,1]} style={styles.linearGradient}/>
              </View>
          </Swiper>
          
          <View style={{position: 'absolute', top: height - height/4}} >
              <View style={styles.iconContainerStyle}>
                <FontAwesome.Button name='facebook-square' backgroundColor='#3b5998' style={styles.iconStyle} onPress={this.loginWithFacebook.bind(this)}>
                  <Text style={ styles.iconTextStyle}> Continue with Facebook </Text>
                </FontAwesome.Button>
              </View>

              <View style={styles.iconContainerStyle}>
                <FontAwesome.Button name='google-plus' color='#fff' backgroundColor='#ff3333' style={styles.iconStyle} onPress={this.loginWithGoogle.bind(this)}>
                  <Text style={ styles.iconTextStyle}> Continue with Google </Text>
                </FontAwesome.Button> 
              </View>

              <View style={styles.iconContainerStyle}>
                <MaterialIcon.Button name='email-variant' color='gray' backgroundColor='#fff' style={styles.iconStyle} onPress={()=>{}}>
                  <Text style={[styles.iconTextStyle, {color: 'gray'}]}> Sign up with Email </Text>
                </MaterialIcon.Button>
              </View>
              <View style={styles.iconContainerStyle}>
                  <Text style={styles.disclaimerTextStyle}>
                    <Text> By signing up, you agree to our</Text>
                    <Text>
                    <Text style={styles.linkTextStyle} onPress={()=>this.props.navigation.navigate('Terms')}> Terms of Service </Text>
                    <Text> and </Text>
                    <Text style={styles.linkTextStyle} onPress={()=>this.props.navigation.navigate('Policy')}> Privacy Policy </Text>
                    </Text>
                  </Text>
              </View>
          </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#4d4d4d',
  },
  iconStyle: {
    width: width - 50,
    height: 43
  },
  iconTextStyle: {
    flex:1,
    fontWeight:'bold',
    textAlign:'center',
    color: '#fff'
  },
  iconContainerStyle: {
    paddingBottom: 5,
    paddingRight: 20,
    paddingLeft: 20
  },
  disclaimerTextStyle: {
    color: '#fff',
    fontSize: 11,
    textAlign: 'center',
    paddingTop: 10
  },
  linkTextStyle:{
    fontWeight: 'bold'
  },
  slide: {
    flex: 1
  },
  dotStyle:{
    marginBottom: height/4
  },
  swiperImageStyle: {
    flex: 1,
    maxHeight: height,
    maxWidth: width
  },
  linearGradient: {
        backgroundColor: "transparent",
        position: "absolute",
        top: 0,
        bottom: 0,
        left: 0,
        right: 0
}
});

export { Login };




