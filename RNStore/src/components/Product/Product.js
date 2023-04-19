import React from 'react';
import {View,Text,Image} from 'react-native';
import styles from './Product.style';


const Product = ({items}) => {
    return (
        <View style={styles.container}>
        <Image style={styles.image} source={{uri:items.imgURL}}/>
        <Text style={styles.title}>{items.title}</Text>
        <Text style={styles.price}>{items.price}</Text>
        {!items.inStock  && <Text style={styles.instock}>STOKTA YOK</Text>}

    </View>

    );
}
export default Product;