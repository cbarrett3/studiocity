import React from 'react';
import { StyleSheet } from 'react-native';
import { Layout, Button, Icon, TopNavigationAction } from '@ui-kitten/components';
import { ThemedAwesomeTopNavigation } from '../../components/styledComponents/AwesomeTopNavigation';
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
});

const BackIcon = (props) => (
   <Icon {...props} name='arrow-back' />
);

const SettingsScreen = ({ navigation }) => {
   const navigateBack = () => {
      navigation.goBack();
    };
    const BackAction = () => (
      <TopNavigationAction icon={BackIcon} onPress={navigateBack}/>
    );  
  
    return (
       <>
        <ThemedAwesomeTopNavigation title='MyApp' alignment='center' accessoryLeft={BackAction}/>
        <Layout style={styles.container}>
            <Button >
               Sign Out
            </Button>
        </Layout>
        </>
    );
};

export default SettingsScreen;
