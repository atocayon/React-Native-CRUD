import React, {Component} from 'react';
import { createStackNavigator, createAppContainer } from "react-navigation";


import Home from './app/view/Home';
import Create from './app/view/Create';
import Read from './app/view/Read';
import Update from './app/view/Update';
import Delete from './app/view/Delete';
const MyRoutes = createStackNavigator({
        HomeRT: {
            screen: Home
        },
        CreateRT: {
            screen: Create
        },
        ReadRT:{
            screen: Read
        },
        UpdateRT:{
            screen: Update
        },
        DeleteRT:{
            screen: Delete
        },

    },
    {
        initialRouteName: 'HomeRT'
    }
);


export default createAppContainer(MyRoutes);
