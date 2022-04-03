/* eslint-disable prettier/prettier */

import {StyleSheet} from 'react-native';
import {colors} from '../../../assets/contants/themes';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.backgroundColor,
  },
  title: {
    fontFamily: 'Poppins-Bold',
    fontSize: 24,
    marginVertical: 14,
    marginHorizontal: 14,
    color: colors.primaryColor,
  },
  hr: {
    borderBottomColor: colors.primaryColor,
    borderBottomWidth: 2,
  },
  subtitle: {
    fontFamily: 'Poppins-Regular',
    fontSize: 16,
    marginBottom: 20,
    marginHorizontal: 14,
    color: colors.primaryColor,
  },
});
