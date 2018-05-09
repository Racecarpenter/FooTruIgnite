  import React, { Component } from 'react'
import { ScrollView, View, Text, KeyboardAvoidingView, Image } from 'react-native'
import { connect } from 'react-redux'
import { Button, Content, Card, CardItem, Body, Label } from 'native-base'
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'

// Styles
import styles from './Styles/DescriptScreenStyle'

class DescriptScreen extends Component {
  render () {
    console.log("props", this.props)
    let { location } = this.props.navigation.state.params
    let { navigate, goBack } = this.props.navigation
    return (
      <ScrollView style={styles.container}>
        <KeyboardAvoidingView behavior='position'>
          <View style={styles.imgview}>
            <Image
              style={styles.foodimg}
              source={{uri: location.img}}
            />
          </View>
            <View style={styles.info}>
            <Content>
              <Card>
                <Label>
                  <Text style={styles.labelfont}>
                    Message from the Owner:
                  </Text>
                </Label>
                <CardItem>
                  <Body>
                   <Text style={styles.fontz}>
                    {location.description}
                   </Text>
                  </Body>
                </CardItem>
                    <Label>
                      <Text style={styles.labelfont}>
                        Time Available Today:
                      </Text>
                    </Label>
                  <CardItem>
                    <Body>
                     <Text style={styles.fontz}>
                      {location.time}
                     </Text>
                    </Body>
                  </CardItem>
                </Card>
            </Content>
              <Button
              danger
              onPress={() => goBack()}
              title="Fatal"
              style={styles.zutton}
              >
              <Text style={styles.maptext}>Back to Maps</Text>
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
