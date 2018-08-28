import React from 'react'
import { View,Text,Button,ImageBackground,Alert  } from 'react-native'
import { Constants, Google } from 'expo';
import { connect } from 'react-redux';
import {startLogin} from '../actions/auth';





class LoginPage extends React.Component {
    constructor(props){
      super(props);
    }

    _handleGoogleLogin = async () => {
        try {
          const { type, user } = await Google.logInAsync({
            androidClientId: '540065559593-r2vvm4b8s1emjjqkghfiham51kasvilc.apps.googleusercontent.com',
            iosClientId: '540065559593-5sptkic98dbe2ok2bdp3pg1n91urac00.apps.googleusercontent.com',
            scopes: ['profile', 'email']
          });

          switch (type) {
            case 'success': {

              Alert.alert(
                'Logged in!',
                `Hi ${user.id}!`,
                 ).then(() => {
            
                  this.props.startLogin(user.id);
                 }).then(()=>{
                   this.props.navigation.navigate('dash');

                 })

              break;
            }
            case 'cancel': {
              Alert.alert(
                'Cancelled!',
                'Login was cancelled!',
              );
              break;
            }
            default: {
              Alert.alert(
                'Oops!',
                'Login failed!',
              );
              this.props.navigation.navigate('dash');
            }
          }
        } catch (e) {
          Alert.alert(
            'Oops!',
            'Login failed!',
          );
          this.props.navigation.navigate('dash');
        }
      };


    render() {
        return (
            <ImageBackground source={require('../../assets/bg.jpg')} style={{width: '100%', height: '100%'}}>
            <View style={styles.boxLayout} >
                <View style={styles.boxLayoutBox}>
                    <Text style={styles.boxLayoutTitle}>Expensify</Text>
                    <Text style={styles.boxLayoutSumarry}>Control your expenses.</Text>
                    <Button
                        onPress={this._handleGoogleLogin}
                        title="Login With Google"
                        color="#1c88bf" />
                </View>

            </View>
            </ImageBackground>
        );
    }
}

const styles = {
    boxLayout:{
       justifyContent: 'center',
       alignItems: 'center',
       height: 300,
       flex: 1,
       width: null,
    },
    boxLayoutBox:{
        borderRadius: 3,
        alignSelf: 'center',


    },
    boxLayoutTitle:{
        fontSize: 18,
        fontWeight: '400',
        marginTop: 0,
        marginLeft: 27,
        marginBottom: 16,
        marginRight: 0,
        color: '#f7f7f7',
    },
    boxLayoutSumarry:{
        marginBottom: 20,
        color: '#f7f7f7',
    }
}

const mapDispatchToProps = (dispatch) =>({
    startLogin:(uid) => dispatch(startLogin(uid))
});

export default connect(undefined, mapDispatchToProps)(LoginPage);

