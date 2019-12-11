import React from 'react';
import { createStackNavigator } from 'react-navigation-stack'
import { createAppContainer } from 'react-navigation';
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

const RootNavigator = createAppContainer(StackNav)

export default RootNavigator