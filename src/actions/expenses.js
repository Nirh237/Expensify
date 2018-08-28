import Api from '../../server/api';

// ADD_EXPENSE
  export const addExpense = (expense) => ({
    type: 'ADD_EXPENSE',
    expense
  });

export const startAddExpense = (expenseData = {}) => {
  return (dispatch, getState) => {
    const userid = 2;
    const {
      description = '', note = '', amount = 0, createdAt = 0, pic = ''
    } = expenseData
    const expense = { description, note, amount, createdAt }
    let api = Api + "AddExpense"
    return fetch(api, {
      method: 'POST',
      body: JSON.stringify({
        id: userid,
        am: amount,
        cAt:createdAt,
        des:description,
        nt:note,
        pic:pic,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    })
      .then((data) => data.json())
      .then((data) => {

        const exepnseID = JSON.parse(data.d);
        if(exepnseID) {
          dispatch(addExpense({
            id: exepnseID,
            ...expense
          }));
        }

  });





}
}

  // export const testReducer = (email, Password) => ({
  //   type: 'TEST_T',
  //   email,
  //   Password
  // });

  // export const tryingToConnectDatabase = () => {
  //   return (dispatch) => {
  //       return Api.post("/Login",{email: 'rankoli3@gmail.com',pass: '123456'}).then((Response) => {

  //         console.log(Response.data.d);
  //         const user = JSON.parse(Response.data.d);
  //         dispatch(testReducer(user.email, user.Password));
  //         console.log(user.Email, user.Password);
  //       }).catch((error) => {
  //         console.log(error);
  //       })
  //   };
  // };

  // REMOVE_EXPENSE
  export const removeExpense = (id) => ({
    type: 'REMOVE_EXPENSE',
    id
  });

  export const startRemoveExpense = ({id}) => {
    return (dispatch) => {

    //fetching WeeklyOrder from database and parse them to array
    return Api.post("/RemoveExpense", {id}).then((Response) => {



        if(expenses != null) {
        //   localStorage.setItem("user",user.ID);
            dispatch(setExpense(expensesArray));
        }
        else {
          dispatch(error('Cant resolve Expenses'));
        }
      }).catch((error) => {
        console.log(error);
      });



    };
  };

  // EDIT_EXPENSE
 export  const editExpense = (id,updates) => ({
   type: 'EDIT_EXPENSE',
   id,
   updates
  });

  export const startEditExpense = (id,updates) => {
    return (dispatch, getState) => {
      const uid = getState().auth.uid;
      return database.ref(`users/${uid}/expenses/${id}`).update(updates).then(() =>{
        dispatch(editExpense(id,updates));
      });
    };
  };

  //SET_EXPENSES
  export const setExpense = (expenses) => ({
    type: 'EDIT_EXPENSE',
    exepenses
  });

  export const startSetExpense = ({ID}) => {
    return (dispatch) => {

    //fetching WeeklyOrder from database and parse them to array
    return Api.post("/SetExpense", {ID}).then((Response) => {
debugger;

        const expenses = [];
        const expense = JSON.parse(Response.data.d);
        expense.forEach(child => {
            expenses.push({
            ...child
          });
        });


        if(expenses) {
        //   localStorage.setItem("user",user.ID);
            dispatch(setExpense(expenses));
        }
       
      }).catch((error) => {
        console.log(error);
      });



    };
  };


