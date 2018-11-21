import React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import { Constants } from 'expo';
import { MaterialIcons, Feather as FeatherIcon } from '@expo/vector-icons';
import { SearchBar } from './common';

class TopNavigation extends React.Component {
  render() {
    const { navigation } = this.props;
    return (
      <View style={styles.container}>
          <SearchBar
            searchBarContainer={styles.searchBarContainer}
            iconName='search'
            iconColor='#737373'
            iconSelectionColor='#d22d2d'
            iconSize={20}
            iconStyle={{ paddingTop: 7}}
            inputPlaceholder='Search Carousell'
            inputPlaceholderTextColor='#a6a6a6'
            inputOnChangeText={()=>{}}
            inputStyle={{ height: 35, width: 220 }}
            inputOnFocus={()=>navigation.navigate('Search', {
              title: 'Search',
            })}
          />
        <View style={styles.iconsContainer}>
          <FeatherIcon
            name='heart'
            size={24}
            color='#fff'
            onPress={()=>navigation.navigate('Likes')}
          />
          <FeatherIcon
            name='message-circle'
            size={24}
            color='#fff'
            onPress={()=>navigation.navigate('Messages')}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight + 11,
    paddingBottom: 5,
    backgroundColor: '#d22d2d',
    flexDirection: 'row' 
  },
  searchBarContainer: {
    backgroundColor:'#fff',
    flexDirection:'row',
    marginLeft: 10,
    paddingLeft: 5,
    borderRadius: 2,
    flex:2.5
  },
  iconsContainer: {
    justifyContent:'space-around',
    flexDirection:'row',
    paddingTop: 3,
    flex:1
  }
});

export { TopNavigation };