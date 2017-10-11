import { StyleSheet } from 'react-native'
import { ApplicationStyles } from '../../Themes/'

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  splashContain: {
    marginTop: -10,
    paddingTop: 180,
    paddingBottom: 50,
    backgroundColor: '#587576',
  },
  ftlogo: {
    alignSelf: 'center',
    maxWidth: '100%',
    opacity: 0.8
  },
  foodtruck: {
    alignSelf: 'center',
    maxHeight: '40%',
    maxWidth: '100%',
    marginBottom: 30
  },
  butoon: {
    marginTop: 30,
    padding: 10,
    marginLeft: 20
  },
  buton: {
    marginRight: 20,
    marginTop: -45,
    padding: 10,
    alignSelf: 'flex-end'
  }
})
