import React, { Component } from 'react'
import { ScrollView, Text, KeyboardAvoidingView } from 'react-native'
import { connect } from 'react-redux'
import { Container, Content, Form, Item, Input, Label, Button } from 'native-base'
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'

// Styles
import styles from './Styles/PostLocScreenStyle'

class PostLocScreen extends Component {
  render () {
    let { navigate } = this.props.navigation
    return (
      <ScrollView style={styles.container}>
        <KeyboardAvoidingView behavior='position'>
        <Container>
            <Content>
              <Form>
                <Item floatingLabel>
                  <Label>Message to Your Customers</Label>
                  <Input
                    autoCapitalize="none"
                  />
                </Item>
                <Item floatingLabel last>
                  <Label>Time Start</Label>
                  <Input
                    autoCapitalize="none"
                  />
                </Item>
                <Item floatingLabel last>
                  <Label>Time End</Label>
                  <Input
                    autoCapitalize="none"
                  />
                </Item>
                <Item floatingLabel last>
                  <Label>Photo</Label>
                  <Input
                    placeholder="url"
                    autoCapitalize="none"
                  />
                </Item>
                <Button
                success
                style={{marginTop: 30, alignSelf: 'center', paddingLeft: 20, paddingRight: 20}}
                onPress={() => navigate("FtlScreen")}
                title="backtomaps">
                  <Text>
                    GO!
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

export default connect(mapStateToProps, mapDispatchToProps)(PostLocScreen)
