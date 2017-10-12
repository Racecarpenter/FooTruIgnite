import { StyleSheet } from 'react-native'
import { ApplicationStyles } from '../../Themes/'

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  splashContain: {
    marginTop: -10,
    paddingTop: 150,
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
    marginLeft: 20,
    paddingLeft: 20,
    paddingRight: 20
  },
  buton: {
    marginRight: 30,
    marginTop: -45,
    padding: 10,
    paddingLeft: 30,
    paddingRight: 30,
    alignSelf: 'flex-end'
  },
  githubpage: {
    alignItems: 'center',
    marginTop: 50
  },
  findatruck: {
    color: 'white',
    textShadowColor: 'black',
    textShadowOffset: {'width': 0.5, 'height': 0.5},
    textShadowRadius: 2
  }
})
