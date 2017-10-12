import { StyleSheet } from 'react-native'
import { ApplicationStyles } from '../../Themes/'

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  info:{
    marginTop: 50
  },
  fontz:{
    alignSelf: 'center',
    fontSize: 24
  },
  labelfont: {
    alignItems: 'center',
    fontSize: 12
  },
  zutton: {
    padding: 15,
    paddingLeft: 25,
    paddingRight: 25,
    marginTop: 10,
    alignSelf: 'center'
  },
  maptext: {
    fontSize: 24,
    color: 'white',
    textShadowColor: 'black',
    textShadowOffset: {'width': 0.5, 'height': 0.5},
    textShadowRadius: 2
  },
  foodimg: {
    alignSelf: 'center',
    height: 200,
    width: 300,
    borderWidth: 3,
    borderColor: 'red'
  },
  imgview: {
    marginTop: 100
  }
})
