import React from 'react';
import { Layout, Text } from '@ui-kitten/components'
import MapView, { Marker } from 'react-native-maps';
import { StyleSheet, Dimensions } from 'react-native';
import Filter from './MusicFilter';

const Map = (props) => {

   return (
      <Layout style={styles.container}>
         {/* <MapView style={styles.map} /> */}
         <MapView style={styles.map}>
            <Marker
               coordinate={{ latitude: 44.9537, longitude: -93.0900 }}
            />
         </MapView>
      </Layout>
   )
}

export default Map;

const styles = StyleSheet.create({
   container: {
     flex: 1,
     backgroundColor: '#fff',
     alignItems: 'center',
     justifyContent: 'center',
   },
   map: {
     width: Dimensions.get('window').width,
     height: Dimensions.get('window').height,
   },
 });