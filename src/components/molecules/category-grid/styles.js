/* eslint-disable prettier/prettier */

import {StyleSheet, Dimensions} from 'react-native';
import {colors} from '../../../../assets/contants/themes';

const {width, height} = Dimensions.get('window');

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fffdf9',
  },
  touchable: {
    marginVertical: 30,
    marginHorizontal: 20,
    height: 200,
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: 12,
  },
  title: {
    fontFamily: 'Poppins-Bold',
    color: '#461B0E',
    fontSize: 20,
  },
});
