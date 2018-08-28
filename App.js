import React from 'react';
import Expo from "expo";
import { StyleSheet, Text, View } from 'react-native';
import LoginPage from  './src/pages/LoginPage';
import ExpenseDashBoardPage from './src/pages/ExpenseDashBoardPage';
import { Provider } from 'react-redux';
import configureStore from './src/store/configureStore';
import AddExpensePage from './src/pages/AddExpensePage';
import ExpenseList from './src/components/ExpenseList';
import {TabNavigator,StackNavigator} from 'react-navigation';
import {createStackNavigator , createBottomTabNavigator} from 'react-navigation';



const store = configureStore();

export default class App extends React.Component {

  render() {
  const MainNavigator= createStackNavigator({
Login: { screen:LoginPage },
main: {
  screen: TabNavigator({
    dash:{screen:ExpenseDashBoardPage},
    review:{
      screen: StackNavigator({
        addexpnese:{screen:AddExpensePage},

      })
    }
  })
}


    });
    return (
      <Provider store={store}>
      <View style={{flex:1}}>
      <MainNavigator/>
      </View>
      </Provider>
    );
  }
}

