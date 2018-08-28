import React from 'react';
//import {connect} from 'react-redux';
import SelectExpenses from '../selectors/expenses';
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text } from 'native-base';
import { View,ScrollView  } from 'react-native'
import ExpenseListItem from './ExpenseListItem';
import moment from 'moment';



const expenses = [{
    id: '1',
    description: 'Gum',
    note: '',
    amount: 195,
    createdAt: 0
  }, {
    id: '2',
    description: 'Rent',
    note: '',
    amount: 109500,
    createdAt: moment(0).subtract(4, 'days').valueOf()
  }, {
    id: '3',
    description: 'Credit Card',
    note: '',
    amount: 4500,
    createdAt: moment(0).add(4, 'days').valueOf()
  }];




export const ExpenseList = (props) => (
  <View style={styles.content_container}>
    <View style={styles.list_header}>
      <Text style={styles.show_for_mobile}>Expenses</Text>
    </View>
    <View style={styles.list_body}>
      {
        expenses === 0
        ? (
          <Text style={styles.list_item_message}>
           No expenses
          </Text>
        )
        : (expenses.map((expense) => {
          return <ExpenseListItem key={expense.id} {...expense}/>;
        }))
      }
    </View>

  </View>
);


const styles = {
    content_container:{
        marginTop: 0,
        flex: 2,
        paddingTop: 0,
        paddingRight: 16,
        paddingBottom: 16,
        paddingLeft: 16,
        flexDirection: 'column',

    },
    list_header:{
        backgroundColor: '#f7f7f7',
        borderColor: '#888',
        backgroundColor: '#666',
        flex: 1,
        justifyContent: 'space-between',
        paddingTop:12,
        paddingRight: 16,
        paddingBottom:16,
        paddingRight: 16,
    },
    show_for_mobile:{
        alignItems: 'center',
        justifyContent:'center',
        color:'#666',
        padding: 16,

    },
    list_item_message:{
        alignItems: 'center',
        justifyContent:'center',
        color:'#666',
        padding: 16,

    },
    list_body:{
        marginBottom: 16,
    }
}

// const mapStateToProps = (state) => {
//   return {
//     expenses: SelectExpenses(state.expenses, state.filters)
//   };
// };

// export default connect(mapStateToProps)(ExpenseList);

export default ExpenseList;