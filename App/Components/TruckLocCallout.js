import React from 'react'
import { Text, TouchableOpacity } from 'react-native'
import { Callout } from 'react-native-maps'
import Styles from './Styles/TruckLocCalloutStyles'

export default class TruckLocCallout extends React.Component {
  constructor (props) {
    super(props)
  }

  render () {
    /* ***********************************************************
    * Customize the appearance of the callout that opens when the user interacts with a marker.
    * Note: if you don't want your callout surrounded by the default tooltip, pass `tooltip={true}` to `Callout`
    *************************************************************/
    let { location } = this.props
    console.log("props", this.props)
    return (
      <Callout style={Styles.callout}>
        <TouchableOpacity onPress={this.props.onPress.bind(this, this.props.location)}>
        <Text
          onPress={() => this.props.navigate("DescriptScreen", {location})}
          title="gimme"
          >
          {location.title}
        </Text>
        </TouchableOpacity>
      </Callout>
    )
  }
}
