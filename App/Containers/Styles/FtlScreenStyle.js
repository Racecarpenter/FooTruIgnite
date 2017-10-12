import { StyleSheet } from 'react-native'
import { ApplicationStyles } from '../../Themes/'

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  butt: {
    bottom: 0,
    position: 'absolute',
    height: 40,
    marginBottom: -20,
    width: '100%',
    alignItems: 'center'
  }
})
