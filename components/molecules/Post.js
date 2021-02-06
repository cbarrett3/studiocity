import React, { useMemo } from 'react';
import { StyleSheet, View, Image } from 'react-native';
import { Layout, Button, Icon, Card, List, Text, Avatar } from '@ui-kitten/components';

const Post = (info) => {
   /* TODO include profile picture, name, username, & time since post, elipses option */
   const renderItemHeader = (headerProps, info) => (
      // flex direction : row
      <View {...headerProps} style={[headerProps.style, styles.headerContainer]}>
         {/* this is header col 1 */}
         {/* flex direction : row */}
         <View style={styles.headerLeft}>
            <Avatar size='large' source={require('../../assets/images/gorilla.jpg')} />
            <View style={styles.headerLeftText}>
               <Text category='h6'> Leon Barrett </Text>
               <Text style={styles.headerLeftHandle} category='s2'> @leonbarrett </Text>
            </View>
         </View>
         {/* this is header col 2 */}
         <View style={styles.headerRight}>
            <Text category='s2'> 24 hrs ago </Text>
            <Icon style={styles.icon} name='more-horizontal-outline'  fill='#6C6C6C'/> 
            {/* <DotIcon/> */}
            {/* <Text category='s2'> . . . </Text> */}
            {/* <ForwardIcon/> */}
         </View>
      </View>
   );

   const renderItemFooter = (footerProps) => (
      <View {...footerProps} style={[footerProps.style, styles.footerContainer]}>
         <Icon style={styles.interactIcons} name='gift-outline' fill='#6C6C6C'/> 
         <Icon style={styles.interactIcons} name='message-circle-outline' fill='#6C6C6C'/> 
         <Icon style={styles.interactIcons} name='heart-outline' fill='#FF5D4F'/> 
         <Icon style={styles.interactIcons} name='share-outline' fill='#6C6C6C'/> 
         {/* <Button
            style={styles.footerControl}
            size='small'
            status='basic'>
            donate
              </Button> */}
      </View>
   );

   return (
      <Card
         style={styles.item}
         header={headerProps => renderItemHeader(headerProps, info)}
         footer={renderItemFooter}>
         {info.item.type == 'text' && <Text> {info.item.title} {info.index + 1} </Text>}
         {info.item.type == 'image' && <Text> IMAGE </Text>}
         {info.item.type == 'video' && <Text> VIDEO </Text>}
         {info.item.type == 'song' && <Text> SONG </Text>}
      </Card>
   )
}

export default Post;

const styles = StyleSheet.create({
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
      // justifyContent: 'flex-start'
   },
   headerLeftText: {
      marginLeft: 5
      //  alignItems: 'center',
      //  justifyContent: 'center'
   },
   headerLeftHandle: {
      fontStyle: 'italic'
   },
   headerRight: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      // justifyContent: 'flex-end'
   },
   icon: {
      justifyContent: 'center',
      // alignItems: 'center',
      width: 19,
      height: 19
      ,
    },
    interactIcons: {
      width: 20,
      height: 20
      ,
    },
});