/* react */
import React from 'react';
/* navigation */
import { createStackNavigator } from '@react-navigation/stack';
/* ui-kitten */
import { Icon } from '@ui-kitten/components';
/* screens */
import LandingScreen from '../features/auth/Landing';
import SignInScreen from '../features/auth/SignIn';
import SignUpScreen from '../features/auth/SignUp';
import PasswordForgetScreen from '../features/auth/PasswordForget';
/* other components */
/* icons */

const Stack = createStackNavigator();

export const AuthStackNavigator = () => {
   const [isAuthenticated, setIsAuthenticated] = React.useState(false);
   // TODO: implement
   const handleSignIn = () => {
      setIsAuthenticated(true);
   };
   const handleSignOut = () => {
      setIsAuthenticated(false);
   };
   const handleSignUp = () => {
      setIsAuthenticated(true);
   }
   return (
      <Stack.Navigator headerMode='none'>
         <Stack.Screen name="Landing" component={LandingScreen} options={{ animationTypeForReplace: 'pop' }} />
         <Stack.Screen name="Sign In" component={SignInScreen}/>
         <Stack.Screen name="Sign Up" component={SignUpScreen}/>
         <Stack.Screen name="Password Forget" component={PasswordForgetScreen}/>
      </Stack.Navigator>
   )
};