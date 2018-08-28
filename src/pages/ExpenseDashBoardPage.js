import React, { Component } from 'react';
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text } from 'native-base';
import Expo from "expo";
import { StatusBar,ScrollView } from "react-native";
import ExpenseifyHeader from '../components/ExpenseifyHeader';
import ExpensesSummary from '../components/ExpensesSumarry';
import ExpenseListFilters from '../components/ExpenseListFilters';
import ExpenseList from '../components/ExpenseList';

export default class ExpenseDashBoardPage extends Component {
    constructor(props) {
        super(props);
        this.state = { loading: true };
      }

      async componentWillMount() {
        await Expo.Font.loadAsync({
          Roboto: require("native-base/Fonts/Roboto.ttf"),
          Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
          Ionicons: require("@expo/vector-icons/fonts/Ionicons.ttf"),
        });
        this.setState({ loading: false });
      }
  render() {
    if (this.state.loading) {
        return <Expo.AppLoading />;
      }
    return (
    <Container>
     <ExpenseifyHeader />
     <ScrollView>
     <ExpensesSummary expenseCount={5} expensesTotal={500} addexpensepage={ () => this.props.navigation.navigate('review')} />
     <ExpenseListFilters />
     <ExpenseList/>
     </ScrollView>
     </Container>
    );
  }
}
