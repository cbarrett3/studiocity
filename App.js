import React, {useState, useEffect} from 'react';
import { StyleSheet, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import LottieView from 'lottie-react-native';
import 'react-native-gesture-handler';
import * as eva from '@eva-design/eva';
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import { ApplicationProvider, IconRegistry, Icon } from '@ui-kitten/components';
import { default as customTheme } from './custom-theme.json';
import { FeatherIconsPack } from './assets/icons/feather-icons';
import { MaterialIconsPack } from './assets/icons/material-icons';
import { AppStackNavigator } from './navigation/AppStackNavigator';
import { ThemeContext } from './theme-context';

export default function App() {

  /* state */
  const [theme, setTheme] = React.useState('dark');
  const [splash, setSplash] = useState(true);

  /* toggle theme color during runtime */
  const toggleTheme = () => {
    const nextTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(nextTheme);
  };

  /* wait 2.5 seconds on splash screen */
  useEffect(()=> {
    setTimeout(function(){
      setSplash(false);
    }.bind(this),2500);
  })

  /* brief splash screen component */
  if(splash) {
    return (
      <View style={styles.animationContainer}>
        <LottieView
          autoPlay
          loop={false}
          style={styles.logo}
          source={require('./assets/lottie/t2.json')}
          // OR find more Lottie files @ https://lottiefiles.com/featured
          // Just click the one you like, place that file in the 'assets' folder to the left, and replace the above 'require' statement
        />
      </View> 
    );
  }

  /* app root component */
  return (
    <>
      <IconRegistry icons={[EvaIconsPack, FeatherIconsPack, MaterialIconsPack]} />
      <ThemeContext.Provider value={{ theme, toggleTheme }}>
        <ApplicationProvider {...eva} theme={{ ...eva[theme], ...customTheme }}>
          <AppStackNavigator/>
          {theme === 'light' ? <StatusBar style="dark" /> : <StatusBar style="light" />}
        </ApplicationProvider>
      </ThemeContext.Provider>
    </>
  );
}

/* styles */
const styles = StyleSheet.create({
   animationContainer: {
      backgroundColor: 'black', /* background of content black */
      alignItems: 'center', /* centers the content horizontally */
      justifyContent: 'center', /* centers the content vertically */
      flex: 1, /* takes up entire screen */
   },
   logo: {
      width: 300,
      height: 300,
   },
});
