/* eslint-disable prettier/prettier */
import React from 'react';
import {FlatList, View, Text, ScrollView} from 'react-native';
import {styles} from './styles';
import {useSelector, useDispatch, connect} from 'react-redux';
import CategoryGrid from '../../components/molecules/category-grid/index';
import {selectedCategory} from '../../store/actions/category.action';

const Home = ({navigation}) => {
  const dispatch = useDispatch();
  const categories = useSelector(state => state.categories.categories);
  const handleSelectCategory = category => {
    dispatch(selectedCategory(category.id));
    navigation.navigate('Category', {name: category.name});
  };
  const renderItem = ({item}) => (
    <CategoryGrid item={item} onSelected={handleSelectCategory} />
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Welcome, Sagar</Text>
        <Text style={styles.subtitle}>It's good to have you!</Text>
      </View>
      <View style={styles.hr}></View>
      <View>
        <FlatList
          data={categories}
          keyExtractor={item => item.id}
          renderItem={renderItem}
        />
      </View>
    </View>
  );
};

export default connect()(Home);
