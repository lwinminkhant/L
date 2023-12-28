// const SignupScreen = () => {
//   return (
//     <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
//       <Button title="Signup" onPress={handleLogout} />
//     </View>
//   );
// };

import React from 'react';
import {View, TextInput, Button, Text} from 'react-native';
import {Formik} from 'formik';
import * as Yup from 'yup';

const SignupForm = () => {
  return (
    <View style={{paddingHorizontal: 30}}>
      <Formik
        initialValues={{email: '', password: ''}}
        validationSchema={Yup.object({
          email: Yup.string()
            .email('Invalid email address')
            .required('Required'),
          password: Yup.string()
            .min(6, 'Must be at least 6 characters')
            .required('Required'),
        })}
        onSubmit={values => {
          // Handle form submission here
          console.log(values);
        }}>
        {({handleChange, handleBlur, handleSubmit, values, errors}) => (
          <View>
            <TextInput
              onChangeText={handleChange('email')}
              onBlur={handleBlur('email')}
              value={values.email}
              placeholder="Email"
            />
            {errors.email && <Text>{errors.email}</Text>}
            <TextInput
              onChangeText={handleChange('password')}
              onBlur={handleBlur('password')}
              value={values.password}
              placeholder="Password"
              secureTextEntry
            />
            {errors.password && (
              <Text style={{color: 'red'}}>{errors.password}</Text>
            )}
            <Button onPress={handleSubmit} title="Submit" />
          </View>
        )}
      </Formik>
    </View>
  );
};

export default SignupForm;
