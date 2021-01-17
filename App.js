/* react & react native */
import React, {useState, useEffect} from 'react';
import { StyleSheet, View } from 'react-native';
/* expo */
import { StatusBar } from 'expo-status-bar';
/* lottie */
import LottieView from 'lottie-react-native';
import 'react-native-gesture-handler';
/* eva & ui kitten */
import * as eva from '@eva-design/eva';
import { ApplicationProvider, IconRegistry } from '@ui-kitten/components';
/* custom theme */
import { default as customTheme } from './custom-theme.json';
import { ThemeContext } from './theme-context';
/* icon packs */
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import { FeatherIconsPack } from './assets/icons/FeatherIconsPack';
import { MaterialIconsPack } from './assets/icons/MaterialIconsPack';
import { AssetIconsPack } from './assets/icons/AssetIconsPack';
/* other components */
import { AppStackNavigator } from './navigation/AppStackNavigator';

// testing with git...
// again
// testing in development branch
// adding a comment to dev

// random addition to development branch while testing is going on

export default function App() {

  /* state */
  const [theme, setTheme] = React.useState('light');
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
      <IconRegistry icons={[EvaIconsPack, FeatherIconsPack, MaterialIconsPack, AssetIconsPack]} />
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
