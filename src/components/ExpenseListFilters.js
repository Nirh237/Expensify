import React, { Component } from 'react';
import { Container, Header, Content, Input, Item,Picker,Form, Icon } from 'native-base';
import Dates from 'react-native-dates';
import moment from 'moment';
import { StyleSheet, Text, View } from 'react-native';


export default class ExpenseListFilters extends Component {
    constructor(props) {
        super(props);
        this.state = {
          selected2: undefined,
          date: null,
          focus: 'startDate',
          startDate: null,
          endDate: null
        };
      }
      onValueChange2(value: string) {
        this.setState({
          selected2: value
        });
      }
  render() {
    const isDateBlocked = (date) =>
    date.isBefore(moment(), 'day');

    const onDatesChange = ({ startDate, endDate, focusedInput }) =>
    this.setState({ ...this.state, focus: focusedInput }, () =>
    this.setState({ ...this.state, startDate, endDate })
    );

  const onDateChange = ({ date }) =>
    this.setState({ ...this.state, date });
    return (
      <Container>

        <Content >
        <Form>

          <Item regular>
            <Input placeholder='Search expenses' />
          </Item>

          <Item picker>
          <Picker
            mode="dropdown"
            iosIcon={<Icon name="ios-arrow-down-outline" />}
            style={{ width: undefined }}
            placeholder="Filter By"
            placeholderStyle={{ color: "#bfc6ea" }}
            placeholderIconColor="#007aff"
            selectedValue={this.state.selected2}
            onValueChange={this.onValueChange2.bind(this)}
          >
            <Picker.Item label="Date" value="key0" />
            <Picker.Item label="Amount" value="key1" />

          </Picker>
        </Item>

        <View style={styles.container}>
        <Dates
          onDatesChange={onDatesChange}
          isDateBlocked={isDateBlocked}
          startDate={this.state.startDate}
          endDate={this.state.endDate}
          focusedInput={this.state.focus}
          range
        />

        <Dates
          date={this.state.date}
          onDatesChange={onDateChange}
          isDateBlocked={isDateBlocked}
        />

      {this.state.date && <Text style={styles.date}>{this.state.date && this.state.date.format('LL')}</Text>}
      <Text style={[styles.date, this.state.focus === 'startDate' && styles.focused]}>{this.state.startDate && this.state.startDate.format('LL')}</Text>
      <Text style={[styles.date, this.state.focus === 'endDate' && styles.focused]}>{this.state.endDate && this.state.endDate.format('LL')}</Text>
      </View>

          </Form>
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexGrow: 1,
      marginTop: 20
    },
    date: {
      marginTop: 50
    },
    focused: {
      color: 'blue'
    }
  });