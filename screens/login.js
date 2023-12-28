import React, {useState} from 'react';
import {Button, TextInput, View} from 'react-native';
import { SCREENS } from '../ScreenRouters';
import { getNavigation, navigate } from '../nav/nav_helper';

const LoginScreen = ({navigation}) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin= ()=>{
    navigate("BottomNav",null);
  }

  const handleSignup= ()=>{
    navigate(SCREENS.SIGNUP.name,null);
  }

  
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <TextInput
        placeholder="Username"
        value={username}
        onChangeText={text => setUsername(text)}
        style={{
          height: 40,
          width: 200,
          borderColor: 'gray',
          borderWidth: 1,
          marginBottom: 20,
        }}
      />
      <TextInput
        placeholder="Password"
        value={password}
        onChangeText={text => setPassword(text)}
        secureTextEntry={true}
        style={{
          height: 40,
          width: 200,
          borderColor: 'gray',
          borderWidth: 1,
          marginBottom: 20,
        }}
      />
      <View style={{flexDirection : 'row', justifyContent : 'space-between', width: 200}}>
      <Button title="Signup" onPress={handleSignup}/>
      <Button title="Login" onPress={handleLogin} />
      </View>
      
    </View>
  );
};

export default LoginScreen;
