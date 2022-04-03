/* eslint-disable prettier/prettier */

import {StyleSheet} from 'react-native';
import {colors} from '../../../../assets/contants/themes';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.backgroundColor,
    marginBottom: 5,
  },
  card: {
    backgroundColor: colors.backgroundColor,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    borderRadius: 4,
  },
  header: {
    fontFamily: 'OpenSans-Bold',
    margin: 5,
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
  },
  imageContainer: {},
  image: {
    width: 60,
    height: 60,
    borderRadius: 12,
  },
  name: {
    fontSize: 20,
    color: colors.primaryColor,
    fontFamily: 'Poppins-Bold',
    margin: 10,
  },
  details: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'space-around',
    marginBottom: 10,
  },
  quantity: {
    fontSize: 16,
    fontFamily: 'Poppins-Regular',
    color: colors.primaryColor,
  },
  price: {
    fontSize: 18,
    fontFamily: 'Poppins-Regular',
    color: colors.accentColor,
    marginRight: 60,
  },
});
