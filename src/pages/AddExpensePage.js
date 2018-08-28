import React, { Component } from 'react';
import { StyleSheet,Container, Header, Title, Content, Footer, FooterTab, Left, Right, Body, Icon, Text,Card,CardItem,Input, Form  } from 'native-base';
import Expo from 'expo';
import { StatusBar,Button } from "react-native";
import ExpenseifyHeader from '../components/ExpenseifyHeader';
import ExpensifyForm from '../components/ExpensifyForm';
import { startAddExpense } from '../actions/expenses';
import { connect } from 'react-redux';



export class AddExpensePage extends Component {
  
    constructor(props) {
        super(props);
        this.state = {
          loading: true,

        };

      }
      onSubmit = (expense) => {

        this.props.startAddExpense(expense);
//צריך לנווט לדשבורד בחזרה
      };


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
       <ExpenseifyHeader/>
        <Content  >
        <Card style={styles.card}>
        <CardItem style={{backgroundColor:"#f7f7f7"}}>
          <Left>
            <Body>
          <Text style={{fontSize:30, fontWeight: 'bold',paddingTop:50}}>Add Expense</Text>
            </Body>
          </Left>
        </CardItem>
        </Card>
       <ExpensifyForm onSubmit={this.onSubmit} dasdboard={()=> this.props.navigation.navigate('main')}/>
        </Content>
      </Container>

    );
  }
}


  const styles = {
    card:{
    height: 150,
    width: 400,
    flex: 1,
     backgroundColor:"#f7f7f7"
    },

     form:{
     flexDirection:"column",
     marginBottom:1,
    },
  }


  const mapDispatchToProps = (dispatch) => ({
    startAddExpense: (expense) => dispatch(startAddExpense(expense))

  });

  export default connect(undefined, mapDispatchToProps)(AddExpensePage);




