import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { connect } from 'react-redux'
import TruckLoc from '../Components/TruckLoc'
import { Button } from 'native-base'
import Styles from '../Components/Styles/TruckLocStyles'
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'

// Styles
import styles from './Styles/FtlScreenStyle'

class FtlScreen extends Component {
  render () {
    let {navigate} = this.props.navigation;
    return (
      <View style={Styles.map}>
          <TruckLoc
            navigate={navigate}
          />

      </View>
    )
  }
}

const mapStateToProps = (state) => {
  return {
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(FtlScreen)
