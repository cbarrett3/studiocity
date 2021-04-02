import React, { useRef } from "react";
import { Layout, Button, Text } from '@ui-kitten/components'
import { Marker } from 'react-native-maps';
import MapView from "react-native-map-clustering";
import { StyleSheet, Dimensions } from 'react-native';
import Filter from './MusicFilter';

const INITIAL_REGION = {
   latitude: 52.5,
   longitude: 19.2,
   latitudeDelta: 8.5,
   longitudeDelta: 8.5,
};

const Map = (props) => {
   const mapRef = useRef();
   const animateToRegion = () => {
      let region = {
        latitude: 42.5,
        longitude: 15.2,
        latitudeDelta: 7.5,
        longitudeDelta: 7.5,
      };
      mapRef.current.animateToRegion(region, 2000);
    };

   return (
      <Layout style={styles.container}>

         {/* <MapView style={styles.map} /> */}
         {/* <MapView style={styles.map}>
            <Marker
               coordinate={{ latitude: 44.9537, longitude: -93.0900 }}
            />
         </MapView> */}
         <MapView ref={mapRef} initialRegion={INITIAL_REGION} style={styles.map} clusterColor='#7360bf'>
            <Marker coordinate={{ latitude: 52.4, longitude: 18.7 }} />
            <Marker coordinate={{ latitude: 52.1, longitude: 18.4 }} />
            <Marker coordinate={{ latitude: 52.6, longitude: 18.3 }} />
            <Marker coordinate={{ latitude: 51.6, longitude: 18.0 }} />
            <Marker coordinate={{ latitude: 53.1, longitude: 18.8 }} />
            <Marker coordinate={{ latitude: 52.9, longitude: 19.4 }} />
            <Marker coordinate={{ latitude: 52.2, longitude: 21 }} />
            <Marker coordinate={{ latitude: 52.4, longitude: 21 }} />
            <Marker coordinate={{ latitude: 51.8, longitude: 20 }} />
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