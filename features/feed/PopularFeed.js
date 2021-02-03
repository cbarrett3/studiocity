import React from 'react';
import { StyleSheet, View, Image, RefreshControl } from 'react-native';
import { Layout, Button, Icon, Card, List, Text, Avatar } from '@ui-kitten/components';
import Post from '../../components/molecules/Post'

/* SUDO LOGIC FOR DISPLAY: 
1. Display list of content
2. Create a Card and Dynamically adjust what's shown on it based on type of content
3. Implement Scroll to Refresh or "Pull to Refresh" (simulate api call using mocky might help)
*/

/* DUMMY DATA */
const data = new Array(100).fill({
   title: 'Post',
   type: 'text'
});

const ProfileIcon = (props) => (<Icon {...props} name='person-outline' />);


/* Popular Screen */
const PopularFeedScreen = ({ navigation }) => {

   return (
      <Layout style={styles.container}>
         {/* <Button size='giant' appearance='ghost' accessoryLeft={StudioCityLogo}>Check the logo</Button> */}
         {/* <Image source={require('../../assets/images/studiocitylogo.png')} style={{ width: 31, height: 41 }}></Image> */}
         <List
            style={styles.container}
            contentContainerStyle={styles.contentContainer}
            // refreshControl={<RefreshControl refreshing={refreshing} onRefresh={setRefreshing(true)} />}
            data={data}
            renderItem={Post} /* takes an item from data and renders it in the list as 'info' */
            initialNumToRender={30}
           // maxToRenderPerBatch={100}
         />
      </Layout>
   )
}
export default PopularFeedScreen;


const styles = StyleSheet.create({
   /* align footer icons in an evenly spaced row */
   /* container around entire page */
      // container: {
      //    /* maxHeight: ... */
      // },
   /* container around the scroll view */
   //    contentContainer: {
   //       // paddingVertical: 4,
   //       // paddingHorizontal: 0,
   //    },
 });
