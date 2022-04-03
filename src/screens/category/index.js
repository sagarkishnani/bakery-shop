/* eslint-disable prettier/prettier */

import React, {useEffect} from 'react';

import {View, FlatList} from 'react-native';
import {styles} from './styles';
import {PRODUCTS} from '../../../assets/contants/products';
import {useSelector, useDispatch, connect} from 'react-redux';
import {
  filteredProducts,
  selectProduct,
} from '../../store/actions/product.action';

import CategoryProducts from '../../components/molecules/category-products';

const Category = ({navigation, route}) => {
  const dispatch = useDispatch();
  const categoryProduct = useSelector(state => state.products.filteredProducts);
  const selectedCategory = useSelector(
    state => state.categories.selectedCategory,
  );
  const handleSelectCategory = product => {
    dispatch(selectProduct(product.id));
    navigation.navigate('Product', {name: product.name});
  };
  const renderItem = ({item}) => (
    <CategoryProducts item={item} onSelected={handleSelectCategory} />
  );

  useEffect(() => {
    dispatch(filteredProducts(selectedCategory.id));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        data={categoryProduct}
        keyExtractor={item => item.id}
        renderItem={renderItem}
      />
    </View>
  );
};

export default connect()(Category);
