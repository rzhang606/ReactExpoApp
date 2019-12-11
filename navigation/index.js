import React from 'react';
import { createStackNavigator, createAppNavigator } from 'react-navigation';
import Main from '../app/Main'
import AddTask from '../app/AddTask.js'

const StackNav = createStackNavigator(
    {
        Home: {
            screen: Main
        },
        AddTask: {
            screen: AddTask
        }
    },
    {
        mode: 'modal'
    }
)

const RootNavigator = createAppContainer(Stacknav)

export default RootNavigator