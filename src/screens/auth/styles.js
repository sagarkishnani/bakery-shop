/* eslint-disable prettier/prettier */

import {StyleSheet, Dimensions} from 'react-native';
import {colors} from '../../../assets/contants/themes';

const {width, height} = Dimensions.get('window');

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5fcff',
  },
  containerCard: {
    height: height / 2,
    width: width * 0.7,
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  formTitle: {
    fontSize: 20,
    marginBottom: 20,
    color: colors.primaryColor,
  },
  formContainer: {
    flex: 1,
  },
  label: {
    fontSize: 13,
    marginBottom: 5,
  },
  linkText: {
    color: colors.primaryColor,
    fontSize: 16,
    marginBottom: 20,
    textAlign: 'center',
  },
});
