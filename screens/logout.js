import {Button, Text, View} from 'react-native';
import { navigationRef } from '../nav/nav_helper';

const handleLogout = ()=> {
  navigationRef.navigate('Login')
}
const LogoutScreen = () => {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Button title="Logout" onPress={handleLogout} />
    </View>
  );
};

export default LogoutScreen;
