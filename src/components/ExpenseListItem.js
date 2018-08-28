import React from 'react';
import moment from 'moment';
import numeral from 'numeral';
import {TouchableOpacity,Text} from 'react-native';
import { View } from 'native-base';

const ExpenseListItem = ({description, amount, createdAt, id}) => {

    return(
    <TouchableOpacity style={styles.listitem} onPress={this._onPressButton}>
        <View>
            <View h3 style={{ margin: 0}} ><Text style={styles.listItemTitle}>{description}</Text></View>
            <Text style={styles.list_item__subtitle}>{moment(createdAt).format('Do MMMM YYYY')}</Text>
        </View>
        <View h3 style={{ margin: 0}} ><Text style={styles.list_item__data}>&#8362;{numeral(amount / 100).format('0,0.00')}</Text></View>

    </TouchableOpacity>
    );

};

export default ExpenseListItem;


const styles={
    listitem:{

        
        height: 100,
        borderWidth: 1,
        borderColor:"#888",
        borderTopWidth: 0,
      

        flexDirection: "column",
        justifyContent: "space-around",
        padding: 12},

        listItemTitle: { //description
            fontWeight: '600',
           
            fontSize: 30,
            color:"#333",
        },


list_item__subtitle: { //createdAt
    color:"#666",
    fontSize:14,
},

list_item__data: {  //amount
    //for mobile
    fontWeight: '600',
           
            fontSize: 20,
            color:"#333",
},



}