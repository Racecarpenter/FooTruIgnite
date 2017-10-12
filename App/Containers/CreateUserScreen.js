import React, { Component } from 'react'
import { ScrollView, Text, KeyboardAvoidingView } from 'react-native'
import { connect } from 'react-redux'
import { Container, Content, Form, Item, Input, Label, Button } from 'native-base'
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'

// Styles
import styles from './Styles/CreateUserScreenStyle'

class CreateUserScreen extends Component {
  render () {
    let { navigate } = this.props.navigation
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
                <Item floatingLabel last>
                  <Label>Confirm Password</Label>
                  <Input
                    secureTextEntry={true}
                    autoCapitalize="none"
                  />
                </Item>
                <Item floatingLabel last>
                  <Label>Food Truck Name</Label>
                  <Input
                    autoCapitalize="none"
                  />
                </Item>
                <Button
                success
                style={{marginTop: 30, alignSelf: 'center', paddingLeft: 20, paddingRight: 20}}
                onPress={() => navigate("PostLocScreen")}
                title="PostLoc">
                  <Text>
                    Create User
                  </Text>
              </Button>
             </Form>
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

export default connect(mapStateToProps, mapDispatchToProps)(CreateUserScreen)
