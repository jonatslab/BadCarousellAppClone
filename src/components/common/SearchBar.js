import React from 'react';
import { View, TextInput, Stylesheet } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

const SearchBar = ({ 
searchBarContainer,
iconName,
iconColor,
iconSelectionColor,
iconSize,
iconStyle,
inputPlaceholder,
inputPlaceholderTextColor,
inputOnChangeText,
inputStyle,
inputAutoFocus,
inputOnFocus,
}) => {
    return(
        <View style={searchBarContainer}>
            <MaterialIcons
                name={iconName}
                color={iconColor}
                selectionColor={iconSelectionColor}
                size={iconSize}
                style={iconStyle}
            />
            <TextInput
                placeholder={inputPlaceholder}
                placeholderTextColor={inputPlaceholderTextColor}
                onChangeText={inputOnChangeText}
                style={inputStyle}
                autoFocus={inputAutoFocus}
                onFocus={inputOnFocus}

            />
        </View>
    )
}

export { SearchBar };