import React, { Component } from 'react';
import {Input, Form, Item,Button,Text } from 'native-base';
import Expo from 'expo';
import { StatusBar } from "react-native";
import moment from 'moment';

const now = moment();

export default class ExpensifyForm extends Component {
    constructor(props) {
        super(props);
        this.state = { loading: true,
            description: props.expense ? props.expense.description : '',
            note: props.expense ? props.expense.note : '',
            amount: props.expense ? (props.expense.amount / 100).toString() : '',
            createdAt: props.expense ? moment(props.expense.createdAt) : moment(),
            calendarFocused: false,
            error: ''
         };
      }


//   onDateChange = (createdAt) => {
//       if(createdAt){
//       this.setState(() => ({createdAt}));
//       }
//   };
//   onFocusChange = ({ focused }) => {
//       this.setState(() => ({ calendarFocused: focused }));
//   };


      async componentWillMount() {
        await Expo.Font.loadAsync({
          Roboto: require("native-base/Fonts/Roboto.ttf"),
          Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
          Ionicons: require("@expo/vector-icons/fonts/Ionicons.ttf"),
        });
        this.setState({ loading: false });
      }

      onSubmit = () => {
        if(!this.state.description || !this.state.amount){
            this.setState(() => ({error:"Please Provide description and amount."}));
        }else{
         
            this.setState(() => ({error:""}));
            this.props.onSubmit({
                description:this.state.description,
                amount: parseFloat(this.state.amount,10),
                createdAt: this.state.createdAt.valueOf(),
                note: this.state.note
            });
            
        }
    };

  render() {
    if (this.state.loading) {
        return <Expo.AppLoading />;
      } return (
        <Form style={styles.form}>
        <Input
        type="text"
        placeholder="Description"
        autoFocus
        style={styles.input}
        onChangeText={(description) => this.setState({description})}
        value={this.state.description}/>
        <Input
        type="text"
        placeholder="Amount"
        autoFocus
        style={styles.input}
        onChangeText={(amount) => this.setState({amount})  }
        value={this.state.amount}/>
        <Input
        type="text"
        placeholder="Date"
        autoFocus
        style={styles.input}
        onChangeText={(expense) =>  this.setState({expense})}
        value={this.state.expense}/>
        <Input
        type="text"
        placeholder="Note"
        autoFocus
        style={styles.input}
        onChangeText={(note) => this.setState({note})}
        value={this.state.note}/>
     
        <Button full style={{margin:10}} onPress={this.onSubmit}>
        <Text>Save Expense</Text>
      </Button>
    


      <Button full style={{margin:10}} onPress={this.props.dashboard} >
        <Text>Back</Text>
      </Button>
        </Form>);
      }
    }

    const styles={
        form:{
            flexDirection:"column",
           marginBottom:1},

           input:{
            height: 50,
             borderColor: 'gray',
              borderWidth: 1,
              margin:10}

           }
