/* eslint-disable no-unused-vars */
/**
 * @format
 */
import React from 'react';
import { AppRegistry } from 'react-native';
import App from './app/index';
import { name as appName } from './app.json';
import Storbook from './storybook/index';
import { isStoryBook } from '~/config/constants';

AppRegistry.registerComponent(appName, () => (isStoryBook ? Storbook : App));
