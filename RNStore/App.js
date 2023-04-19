import React from 'react';
import {
  SafeAreaView,
  View,
  Text,
  FlatList,
  StyleSheet,
  ScrollView,
  Image,
  Dimensions,
} from 'react-native';
import product_data from './products.json';
import Search from './src/components/Search';
import Product from './src/components/Product';

function App() {
  const renderProducts = ({item}) => <Product items={item} />;
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.headerText}>Products</Text>
      <Search />
      <FlatList
        keyExtractor={item => item.id.toString()}
        data={product_data}
        renderItem={renderProducts}
        numColumns={2}
      />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    marginTop: 50,
  },
  headerText: {
    fontWeight: 'bold',
    fontSize: 30,
    color: '#cd5c5c',
    padding: 5,
  },
  input: {
    height: 40,
    margin: 10,
    backgroundColor: '#f8f8ff',
    color: '#dcdcdc',
    padding: 10,
    borderRadius: 5,
  }
})
export default App;
