import React from 'react';
import { StyleSheet } from 'react-native';
import { Layout, Text, Button, Icon  } from '@ui-kitten/components';
import { ThemeContext } from '../../theme-context'
import { DrawerActions } from '@react-navigation/native';

/* styles */
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

/* icons */
const MenuIcon = (props) => (
  <Icon {...props} name='menu-2-outline' />
);
const FacebookIcon = (props) => (
  <Icon name='facebook' pack='eva' {...props} />
);

/* profile screen */
const Profile = ( {navigation }) => {
  const themeContext = React.useContext(ThemeContext);
  return (
      <Layout style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Button
              appearance='ghost'
              size='giant'
              accessoryLeft={MenuIcon}
              onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}
          />
          <Text category='h1'>Hello, it's me</Text>
          <Button style={{ marginVertical: 4 }} onPress={themeContext.toggleTheme}>TOGGLE THEME</Button>
          <Button accessoryLeft={FacebookIcon}>Login with Facebook</Button>
      </Layout>
  )
}
 
export default Profile;