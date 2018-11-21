import React from 'react';
import { View, ActivityIndicator, WebView } from 'react-native';

class Policy extends React.Component {

  render() {
    return (
      <WebView
        startInLoadingState
        renderLoading={()=>
            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                <ActivityIndicator color='red' size='large' />
            </View>
        }
        source={{uri: 'https://support.carousell.com/hc/en-us/articles/115006700307-Privacy-Policy'}}
      />
    );
  }
}

export { Policy };