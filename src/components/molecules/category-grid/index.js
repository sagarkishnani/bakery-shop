/* eslint-disable prettier/prettier */
import React from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import {styles} from './styles';

const CategoryGrid = ({item, onSelected}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.touchable}
        onPress={() => onSelected(item)}>
        <Text style={styles.title}>{item.name}</Text>
        <Image style={styles.image} source={{uri: `${item.image}`}}></Image>
      </TouchableOpacity>
    </View>
  );
};

export default CategoryGrid;
