/* eslint-disable prettier/prettier */
import {StyleSheet} from 'react-native';
import {colors} from '../../../../assets/contants/themes';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  containerDisabled: {
    flex: 1,
    opacity: 0.5,
  },
  input: {
    borderBottomWidth: 1,
    borderBottomColor: colors.primaryColor,
    color: colors.primaryColor,
    paddingVertical: 10,
  },
  messageText: {
    color: '#ff0000',
    fontSize: 12,
    marginVertical: 5,
  },
});
