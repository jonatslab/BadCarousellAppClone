import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { SearchBar } from './common';

class SearchHeader extends React.Component {
  render() {
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
            inputStyle={{ height: 34, width: 220 }}
            inputAutoFocus={true}
          />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: .97
  },
  searchBarContainer: {
    backgroundColor:'#fff',
    flexDirection:'row',
    paddingLeft: 5,
    borderRadius: 2,
  },
});

export { SearchHeader };