/**
 * @format
 */

import {AppRegistry} from 'react-native';
// import App from './App';
import {name as appName} from './app.json';
import CryptoTracker from './src/CryptoTracker';

// AppRegistry.registerComponent(appName, () => App);
AppRegistry.registerComponent(appName, () => CryptoTracker);
