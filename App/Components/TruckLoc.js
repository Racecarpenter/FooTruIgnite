import React from 'react'
import { View } from 'react-native'
import MapView from 'react-native-maps'
import TruckLocCallout from './TruckLocCallout'
import Styles from './Styles/TruckLocStyles'
import { calculateRegion } from '../Lib/MapHelpers'

// Generate this MapHelpers file with `ignite generate map-utilities`
// You must have Ramda as a dev dependency to use this.
// import { calculateRegion } from '../Lib/MapHelpers'

/* ***********************************************************
* IMPORTANT!!! Before you get started, if you are going to support Android,
* PLEASE generate your own API key and add it to android/app/src/main/AndroidManifest.xml
* https://console.developers.google.com/apis/credentials
* Also, you'll need to enable Google Maps Android API for your project:
* https://console.developers.google.com/apis/api/maps_android_backend/
*************************************************************/

class TruckLoc extends React.Component {
  /* ***********************************************************
  * This generated code is only intended to get you started with the basics.
  * There are TONS of options available from traffic to buildings to indoors to compass and more!
  * For full documentation, see https://github.com/lelandrichardson/react-native-maps
  *************************************************************/

  constructor (props) {
    super(props)
    /* ***********************************************************
    * STEP 1
    * Set the array of locations to be displayed on your map. You'll need to define at least
    * a latitude and longitude as well as any additional information you wish to display.
    *************************************************************/
    const locations = [
      {
        title: "Tiki Tacos",
        img: 'https://images1.browardpalmbeach.com/imager/u/745xauto/7174233/img_3646.jpeg',
        latitude: 33.436020, longitude: -112.073507,
        description: "2 Hawaiian Tacos for $2",
        date:"10/11/2017", time:"11am to 6pm"
       },
      {
        title: "Lasagna St.",
        img: 'https://images1.houstonpress.com/imager/u/745xauto/7989576/hou_food_20151205berniesbackyard_chuckcook_004.jpg',
        latitude: 33.442449, longitude: -112.069141,
        description: "Buy a Lasagna Combo get a Canoli for free",
        date:"10/11/2017", time:"12pm to 4pm"
      },
      {
        title: "Sushi On Wheelz",
        img: 'https://static1.squarespace.com/static/56c4b6f14d088e922f185236/t/586e787c20099e929f5dc6fd/1483634922012/',
        latitude: 33.439870, longitude: -112.066772,
        description: "$5 poke bowls",
        date:"10/11/2017", time:"4pm to 8pm"
      }
    ]
    /* ***********************************************************
    * STEP 2
    * Set your initial region either by dynamically calculating from a list of locations (as below)
    * or as a fixed point, eg: { latitude: 123, longitude: 123, latitudeDelta: 0.1, longitudeDelta: 0.1}
    * You can generate a handy `calculateRegion` function with
    * `ignite generate map-utilities`
    *************************************************************/
    const region = calculateRegion(locations, { latPadding: 0.05, longPadding: 0.05 })
    // const region = { latitude: 123, longitude: 123, latitudeDelta: 0.1, longitudeDelta: 0.1};
    this.state = {
      region,
      locations,
      showUserLocation: true
    }
    this.renderMapMarkers = this.renderMapMarkers.bind(this)
    this.onRegionChange = this.onRegionChange.bind(this)
  }

  componentWillReceiveProps (newProps) {
    this.setState({
      region: calculateRegion(newProps.locations, { latPadding: 0.1, longPadding: 0.1 })
     })
  }

  onRegionChange (newRegion) {
  const searchRegion = {
    ne_lat: newRegion.latitude + newRegion.latitudeDelta / 2,
    ne_long: newRegion.longitude + newRegion.longitudeDelta / 2,
    sw_lat: newRegion.latitude - newRegion.latitudeDelta / 2,
    sw_long: newRegion.longitude - newRegion.longitudeDelta / 2
  }
}

  calloutPress (location) {
    console.tron.log(location)
  }

  renderMapMarkers (location) {
    let {navigate} = this.props;
    return (
      <MapView.Marker key={location.title} coordinate={{latitude: location.latitude, longitude: location.longitude}}>
        <TruckLocCallout navigate={navigate} location={location} onPress={this.calloutPress} />
      </MapView.Marker>
    )
  }

  render () {

    console.log("proppy", this.props)
    return (
      <MapView
        style={Styles.map}
        initialRegion={this.state.region}
        onRegionChangeComplete={this.onRegionChange}
        showsUserLocation={this.state.showUserLocation}

      >
        {this.state.locations.map((location) => this.renderMapMarkers(location))}
      </MapView>
    )
  }
}

export default TruckLoc;
