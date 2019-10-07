// @flow

import React from 'react';
import { createAppContainer } from 'react-navigation';

import RootStack from 'src/navigation/stack';

const Container = createAppContainer(RootStack);

export default Container;
