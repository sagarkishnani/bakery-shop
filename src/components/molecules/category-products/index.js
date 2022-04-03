/* eslint-disable prettier/prettier */
import React from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import {styles} from './styles';

const CategoryProducts = ({item, onSelected}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.touchable}
        onPress={() => onSelected(item)}>
        <View style={styles.details}>
          <Image style={styles.image} source={{uri: `${item.image}`}}></Image>
          <Text style={styles.title}>{item.name}</Text>
          <Text style={styles.price}>${item.price}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default CategoryProducts;
