import React, { Component } from 'react';
import { ScrollView, Text, Image, View, KeyboardAvoidingView } from 'react-native';
import { connect } from 'react-redux';
import { Button } from 'native-base';
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'

// Styles
import styles from './Styles/SplashScreenStyle'

class SplashScreen extends Component {
  render () {
    let {navigate} = this.props.navigation;
    return (
      <ScrollView style={styles.container}>
        <KeyboardAvoidingView behavior='position'>
          <View style={styles.splashContain}>
            <Image style={styles.foodtruck} source={require('../../images/foodtruck.gif')} />
            <Image style={styles.ftlogo} source={require('../../images/Logomakr_068LjO.png')} />
              <Button
                style={styles.butoon}
                light
                onPress={() => navigate("LoginScreen")}
                title="Login">
                  <Text>
                  Food-Truck Login
                  </Text>
              </Button>
              <Button
                style={styles.buton}
                danger
                onPress={() => navigate("FtlScreen")}
                title="FTL">
                  <Text>
                  Find a Truck
                  </Text>
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

export default connect(mapStateToProps, mapDispatchToProps)(SplashScreen)
