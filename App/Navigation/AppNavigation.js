import { StackNavigator } from 'react-navigation'
import DescriptScreen from '../Containers/DescriptScreen'
import PostLocScreen from '../Containers/PostLocScreen'
import CreateUserScreen from '../Containers/CreateUserScreen'
import FtlScreen from '../Containers/FtlScreen'
import LoginScreen from '../Containers/LoginScreen'
import SplashScreen from '../Containers/SplashScreen'
import LaunchScreen from '../Containers/LaunchScreen'

import styles from './Styles/NavigationStyles'

// Manifest of possible screens
const PrimaryNav = StackNavigator({
  DescriptScreen: { screen: DescriptScreen },
  PostLocScreen: { screen: PostLocScreen },
  CreateUserScreen: { screen: CreateUserScreen },
  FtlScreen: { screen: FtlScreen },
  LoginScreen: { screen: LoginScreen },
  SplashScreen: { screen: SplashScreen },
  LaunchScreen: { screen: LaunchScreen }
}, {
  // Default config for all screens
  headerMode: 'none',
  initialRouteName: 'SplashScreen'
})

export default PrimaryNav
