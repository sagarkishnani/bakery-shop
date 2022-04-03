/* eslint-disable prettier/prettier */

import {StyleSheet, Dimensions} from 'react-native';
import {colors} from '../../../../assets/contants/themes';

const {width, height} = Dimensions.get('window');

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  touchable: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 20,
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 12,
  },
  details: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    marginVertical: 4,
    fontFamily: 'Poppins-Bold',
    fontSize: 18,
    color: colors.textColor,
  },
  description: {
    fontFamily: 'Poppins-Regular',
    fontSize: 14,
    color: colors.primaryColor,
  },
  price: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 18,
    color: colors.accentColor,
  },
});
