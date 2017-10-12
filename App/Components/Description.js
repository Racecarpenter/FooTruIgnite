import React, { Component } from 'react'
// import PropTypes from 'prop-types';
import { View, Text } from 'react-native'
import styles from './Styles/DescriptionStyle'

export default class Description extends Component {
  constructor (props) {
    super(props)
    this = this.props.bind(this, this.props.location)
  }
  render () {
    const { location } = this.props
    return (
      <View style={styles.container}>
        <Text>{location.description}</Text>
      </View>
    )
  }
}
