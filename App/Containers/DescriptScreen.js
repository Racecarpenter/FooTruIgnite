import React, { Component } from 'react'
import { ScrollView, View, Text, KeyboardAvoidingView } from 'react-native'
import { connect } from 'react-redux'
import { Button } from 'native-base'
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'

// Styles
import styles from './Styles/DescriptScreenStyle'

class DescriptScreen extends Component {
  render () {
    console.log("poops", this.props)
    let { location } = this.props.navigation.state.params
    let { navigate, goBack } = this.props.navigation
    return (
      <ScrollView style={styles.container}>
        <KeyboardAvoidingView behavior='position'>
          <View style={styles.info}>
            <Text style={styles.fontz}>{location.description}</Text>
            <Text style={styles.fontz}>{location.date}</Text>
            <Text style={styles.fontz}>{location.time}</Text>
            <Button
            danger
            onPress={() => goBack()}
            title="Fatal"
            style={{alignSelf: 'center'}}
            >
            <Text>Back to Maps</Text>
            </Button>
          </View>
        </KeyboardAvoidingView>
      </ScrollView>
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

export default connect(mapStateToProps, mapDispatchToProps)(DescriptScreen)
