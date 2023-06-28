/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import Zipy from "package_zipy"

Zipy.init('abcd3421');
AppRegistry.registerComponent(appName, () => App);
