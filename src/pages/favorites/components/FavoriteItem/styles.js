import { StyleSheet } from 'react-native';

import { colors, metrics } from 'styles';

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    padding: metrics.basePadding,
    borderRadius: metrics.baseRadius,
    marginTop: metrics.basePadding,
    marginHorizontal: metrics.basePadding,
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatar: {
    width: 40,
    height: 40,
  },

  info: {
    marginLeft: metrics.baseMargin,
    flex: 1,
  },
  title: {
    color: colors.darker,
    fontWeight: 'bold',
  },
  description: {
    color: colors.dark,
    marginTop: 3,
    fontSize: 12,
  },
});

export default styles;
