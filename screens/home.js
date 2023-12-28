import {useEffect} from 'react';
import {BackHandler, Button, Text, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';

const HomeScreen = ({navigation}) => {
  useEffect(() => {
    const backAction = () => {
      BackHandler.exitApp();
      return true;
    };

    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      backAction,
    );

    return () => backHandler.remove();
  }, []);

  const count = useSelector(state => state.counter.count);
  const dispatch = useDispatch();

  console.log('dd', count);

  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Home Screen</Text>

      <Button
        title="Increasement"
        onPress={() => dispatch({type: 'INCREMENT'})}
      />
      <Text>{count}</Text>
      <Button
        title="Decreasement"
        onPress={() => dispatch({type: 'DECREMENT'})}
      />
    </View>
  );
};

export default HomeScreen;
