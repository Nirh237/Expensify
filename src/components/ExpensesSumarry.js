import React from 'react';
//import { connect } from 'react-redux';
//import numeral from 'numeral';
//import selectExpenses from '../selectors/expenses';
//import selectExpensesTotal from '../selectors/expenses-total';
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text } from 'native-base';
import { View  } from 'react-native'


 
export default class ExpensesSummary extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      expenseWord:this.props.expenseCount === 1 ? 'expense' : 'expenses',
      formattedExpensesTotal:1
    }
    // //const expenseWord = this.props.expenseCount === 1 ? 'expense' : 'expenses' ;
    // const formattedExpensesTotal = 1// numeral(expensesTotal / 100).format('0,0.00');
  }

  render() {
    return (
        <View style={styles.page_header}>
    <View style={styles.content_container}>
      <Text style={styles.page_header__title}>Viewing <Text style={styles.span}>{this.props.expenseCount}</Text> {"expenses"} totalling <Text>&#8362;{this.state.formattedExpensesTotal}</Text></Text>
      <View style={styles.page_header__actions}>
        <Button Info onPress={ this.props.addexpensepage}><Text>Add Expense</Text></Button>
      </View>
    </View>
  </View>
    );
  }
  

}



const styles = {
    page_header:{
        backgroundColor: '#f7f7f7',
        position: 'relative',
        height: 200,

    },
    page_header__actions:{
        marginTop: 16,
    },
    page_header__title:{
        fontWeight: '300',
        margin: 0,

    },
    span:{
        fontWeight: '700',
    },
    content_container:{
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      marginRight: 10,
      marginLeft: 10,


    },

}

// const mapStateToProps = (state) => {
//   const visibleExpenses = selectExpenses(state.expenses, state.filters);
//   return {
//     expenseCount: visibleExpenses.length,
//     expensesTotal: selectExpensesTotal(visibleExpenses)
//   };
// };

// export default connect(mapStateToProps)(ExpensesSummary);



