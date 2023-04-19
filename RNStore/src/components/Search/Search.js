import React from 'react';
import { View, TextInput } from 'react-native';
import styles from './Search.style';

const Search =()=>{
    return (
       <View style={styles.searchContainer}>
           <TextInput style={styles.searchText} placeholder="Ara..." placeholderTextColor={'gray'}></TextInput>
       </View>
    )
}

export default Search;