import React, { Component } from 'react';
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text,Card,CardItem,Input, Form  } from 'native-base';
import Expo from 'expo';
import { StatusBar } from "react-native";
import ExpenseifyHeader from '../components/ExpenseifyHeader';
import ExpensifyForm from '../components/ExpensifyForm';



export default class EditExpensePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
          loading: true,
          description: props.description,
          note: props.note,
          amount: props.amount ,
          createdAt: props.expense,
         calendarFocused: false,
         error: ''
        };

      }

      onDescriptionChange = (e) => {
        const description = e.target.value;
        this.setState(()=>({description}));
    };

    onNoteChange = (e) => {
      const note = e.target.value; //  e.persist(); אחד מהשניים הוא חובה
      this.setState(()=>({note}));
  };
  onAmountChange = (e) => {
      const amount = e.target.value;
  if(!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)){
      this.setState(() => ({amount}));
    }
  };
  onDateChange = (createdAt) => {
      if(createdAt){
      this.setState(() => ({createdAt}));
      }
  };
  onFocusChange = ({ focused }) => {
      this.setState(() => ({ calendarFocused: focused }));
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
        <Card style={{height: 150, width: 400, flex: 1,backgroundColor:"#f7f7f7"}}>
        <CardItem style={{backgroundColor:"#f7f7f7"}}>
          <Left>
            <Body>
          <Text style={{fontSize:30, fontWeight: 'bold',paddingTop:50}}>Edit Expense</Text>
            </Body>
          </Left>
        </CardItem>
        </Card>
       <ExpensifyForm/>
        <Button full style={{margin:10}}>
        <Text>Save Expense</Text>
      </Button>


      <Button full style={{margin:10}} >
        <Text>Scan Bill</Text>
      </Button>

      <Button full light style={{margin:10}}>
      <Text>Remove Expense</Text>
    </Button>

        </Content>
      </Container>

    );
  }
}