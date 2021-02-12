/* 
Name: Post.js
Description: Component for Render Items within Flatlist 'feeds' like PopularFeed.js
Key Parent Components: PopularFeed.js
Key Child Components: N/A
*/

import React, { memo, useMemo } from 'react';
import { StyleSheet, View, Image, ImageBackground } from 'react-native';
import { Layout, Button, Icon, Card, List, Text, Avatar } from '@ui-kitten/components';

const Post = React.memo((info) => {
   const renderItemHeader = (headerProps, info) => (
      // flex direction : row
      <Layout {...headerProps} style={[headerProps.style, styles.headerContainer]}>
         {/* this is header col 1 */}
         {/* flex direction is row */}
         <Layout style={styles.headerLeft}>
            <Avatar size='large' shape='round' source={require('../../assets/images/gorilla.jpg')} style={styles.avatarStyle}/> 
            <Layout style={styles.headerLeftText}>
               <Text category='s1'> Leon Barrett </Text>
               <Text category='s1' style={styles.headerLeftHandle}> @leonbarrett </Text>
            </Layout>
         </Layout>
         {/* this is header col 2 */}
         <Layout style={styles.headerRight}>
            <Text category='s2'> 24 hrs ago </Text>
            <Icon style={styles.moreIcon} name='more-horizontal-outline'  fill='#6C6C6C'/> 
         </Layout>
      </Layout>
   );

   const renderItemFooter = (footerProps) => (
      <Layout {...footerProps} style={[footerProps.style, styles.footerContainer]}>
         <Icon style={styles.interactIcons} name='gift-outline' fill='#6C6C6C'/> 
         <Icon style={styles.interactIcons} name='message-circle-outline' fill='#6C6C6C'/> 
         <Icon style={styles.interactIcons} name='heart-outline' fill='#FF5D4F'/> 
         <Icon style={styles.interactIcons} name='share-outline' fill='#6C6C6C'/> 
      </Layout>
   );
      return (
         <Card
            style={styles.item} 
            header={headerProps => renderItemHeader(headerProps, info)}
            footer={renderItemFooter}>
            {info.item.type == 'text' && <Text style={styles.body}> {info.item.title} {info.index + 1} </Text>}
            {info.item.type == 'image' && <Text> IMAGE </Text>}
            {info.item.type == 'video' && <Text> VIDEO </Text>}
            {info.item.type == 'song' && <Text> SONG </Text>}
         </Card>
      )
},
   (prevProps, nextProps) => {
      return prevProps.item === nextProps.item
   }
);

export default Post;

const styles = StyleSheet.create({
   item : {

   },
   body: {
      marginLeft: 43,
   },
   /* align footer icons in an evenly spaced row */
   footerContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
   },
   // individual margin on footer icons
   footerControl: {
      marginHorizontal: 0,
   },
   headerContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingHorizontal: 7
   },
   headerLeft: {
      flexDirection: 'row',
      marginLeft: 5
   },
   headerLeftText: {
      marginLeft: 5
   },
   headerLeftHandle: {
      fontStyle: 'italic',
      color: '#6C6C6C',
      // textSize='4px'
   },
   headerRight: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginRight: 3
   },
    moreIcon: {
      justifyContent: 'center',
      width: 19,
      height: 19,
      marginLeft: 3
    },
    interactIcons: {
      width: 20,
      height: 20
    },
    avatarStyle: {
       borderColor: '#6C6C6C',
       borderWidth: 1.5
    }
});