import React, { Component } from 'react'
import { ScrollView, Text, KeyboardAvoidingView, Image } from 'react-native'
import { connect } from 'react-redux'
import { Container, Content, Form, Item, Input, Label, Button } from 'native-base'
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'

// Styles
import styles from './Styles/LoginScreenStyle'

class LoginScreen extends Component {
  render () {
    let {navigate} = this.props.navigation;
    return (
      <ScrollView style={styles.container}>
        <KeyboardAvoidingView behavior='position'>
        <Container>
            <Content>
              <Form>
                <Item floatingLabel>
                  <Label>Email</Label>
                  <Input
                    autoCapitalize="none"
                  />
                </Item>
                <Item floatingLabel last>
                  <Label>Password</Label>
                  <Input
                    secureTextEntry={true}
                    autoCapitalize="none"
                  />
                </Item>
                    <Button
                    style={{marginTop: 20, alignSelf: 'center', paddingLeft: 40, paddingRight: 40}}
                    success
                    onPress={() => navigate("PostLocScreen")}
                    title="PostLoc">
                      <Text style={{color: 'white'}}>
                        Log In
                      </Text>
                    </Button>
              </Form>
                <Button
                danger
                style={{marginTop: 10, alignSelf: 'center', paddingLeft: 20, paddingRight: 20}}
                onPress={() => navigate("CreateUserScreen")}
                title="CreateUser">
                  <Text style={{color: 'white'}}>
                    Create User
                  </Text>
              </Button>
              <Text style={{alignSelf: 'center', fontWeight: 'bold', fontSize: 24, marginTop: 100}}>Not a Truck?</Text>
              <Image
                style={{height: 100, width: 100, alignSelf: 'center'}}
                source={require('../../images/grimacing-face_1f62c.png')}
              />
              <Button
              style={{marginTop: 5, alignSelf: 'center', paddingLeft: 15, paddingRight: 15}}
              onPress={() => navigate("FtlScreen")}
              title="backdatup">
                <Text style={{color: 'white'}}>
                  Find A Truck!
                </Text>
            </Button>
            </Content>
          </Container>
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

export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen)
