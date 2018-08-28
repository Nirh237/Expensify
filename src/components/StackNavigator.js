import LoginPage from  './src/pages/LoginPage';
import ExpenseDashBoardPage from './src/pages/ExpenseDashBoardPage';
import AddExpensePage from './src/pages/AddExpensePage';
import TabNavigator from './TabNavigator';

const StackNavigator= createStackNavigator (
    {
      Login:{screen:LoginPage},
      Dash:{screen:ExpenseDashBoardPage},
      addexpense:{screen:AddExpensePage},

    }
  ,{
    headerMode:"none"
    
  }
  )

  export default StackNavigator;