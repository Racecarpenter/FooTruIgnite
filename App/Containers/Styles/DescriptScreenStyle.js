import { StyleSheet } from 'react-native'
import { ApplicationStyles } from '../../Themes/'

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  info:{
    marginTop: 300
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
  }
})
