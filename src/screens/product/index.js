/* eslint-disable prettier/prettier */

import React from 'react';
import {useSelector, useDispatch, connect} from 'react-redux';
import {View, Text, Button, Image, TouchableOpacity} from 'react-native';
import {colors} from '../../../assets/contants/themes';
import {styles} from './styles';
import {addItem} from '../../store/actions/cart.action';

const Products = ({navigation, route}) => {
  const dispatch = useDispatch();
  const product = useSelector(state => state.products.selectedProduct);
  const {name, description, price, image, weight} = product;

  const handleAddToCart = () => dispatch(addItem(product));
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{uri: `${image}`}}></Image>
      <Text style={styles.title}>{name}</Text>
      <View style={styles.charContainer}>
        <Text style={styles.price}>${price} </Text>
        <Text style={styles.weight}> {weight}</Text>
      </View>
      <Text style={styles.text}>{description}</Text>
      <TouchableOpacity
        style={styles.addButton}
        onPress={() => handleAddToCart()}>
        <Text style={styles.buttonText} title="Add to Bag">
          Add to Bag
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.cartButton}
        onPress={() => navigation.navigate('Cart')}>
        <Text style={styles.cartButtonText}>Ver carrito</Text>
      </TouchableOpacity>
    </View>
  );
};

export default connect()(Products);
