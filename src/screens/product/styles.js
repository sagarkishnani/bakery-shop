/* eslint-disable prettier/prettier */

import {StyleSheet} from 'react-native';
import {colors} from '../../../assets/contants/themes';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 12,
  },
  title: {
    marginVertical: 20,
    fontFamily: 'Poppins-Bold',
    fontSize: 18,
    color: colors.textColor,
  },
  price: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 18,
    color: colors.accentColor,
  },
  charContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  weight: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 18,
    color: colors.primaryColor,
  },
  text: {
    fontSize: 14,
    textAlign: 'center',
    fontFamily: 'Poppins-Regular',
    marginVertical: 20,
    marginHorizontal: 25,
    color: colors.textColor,
  },
  addButton: {
    backgroundColor: colors.accentColor,
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderRadius: 12,
  },
  buttonText: {
    color: '#fff',
    fontFamily: 'Poppins-SemiBold',
  },
  cartButton: {
    borderColor: colors.accentColor,
    borderWidth: 1,
    marginVertical: 10,
    borderRadius: 12,
    paddingVertical: 10,
    paddingHorizontal: 30,
  },
  cartButtonText: {
    color: colors.accentColor,
    fontFamily: 'Poppins-SemiBold',
  },
});
