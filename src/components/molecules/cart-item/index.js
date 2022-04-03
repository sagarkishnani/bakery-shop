/* eslint-disable prettier/prettier */
import React from 'react';
import {View, Text, Button, Image} from 'react-native';
import {styles} from './styles';
import {colors} from '../../../../assets/contants/themes';

const CartItem = ({item, onDelete}) => {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <View style={styles.header}>
          <Image style={styles.image} source={{uri: item.image}}></Image>
          <Text style={styles.name}>{item.name}</Text>
        </View>
        <View style={styles.details}>
          <View>
            <Text style={styles.price}>${item.price}</Text>
          </View>
          <View>
            <Text style={styles.quantity}> {item.quantity}</Text>
          </View>
          <View>
            <Button
              title="Borrar"
              onPress={() => onDelete(item.id)}
              color={colors.primaryColor}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

export default CartItem;
