/* 
Name: PurePost.js
Description: Class Component Version of Post.js, and not currently being used in the application.
Other Notes: Optimized with PureComponent so it doesn't unnecessarily re-render while scrolling
Author: Connor Barrett
*/

import { PureComponent } from "react";
import React, { memo, useMemo } from 'react';
import { StyleSheet, FlatList, View, Image, RefreshControl } from 'react-native';
import { Layout, Button, Icon, Card, List, Text, Avatar } from '@ui-kitten/components';


class PurePost extends PureComponent {
   
   render() {
   //   console.log('post', this.props.index)
     const {item, index} = this.props;
     const renderItemHeader = (headerProps, info) => (
      // flex direction : row
      <View {...headerProps} style={[headerProps.style, styles.headerContainer]}>
         {/* this is header col 1 */}
         {/* flex direction : row */}
         <View style={styles.headerLeft}>
            <Avatar size='large' source={require('../assets/images/gorilla.jpg')} />
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
      //  <View style={{height: 100}}>
      //    {console.log('rerendering child', index)}
      //    {/* {console.log('rendering', index)} */}
      //    {/* <Text>{item}</Text> */}
      //    <Text>hi</Text>
      //  </View>
      <Card
         style={styles.item}
         header={headerProps => renderItemHeader(headerProps)}
         footer={renderItemFooter}>
         <Text> {this.props.item.title} {this.props.index + 1} </Text>
         {/* {info.item.type == 'text' && <Text> {info.item.title} {info.index + 1} </Text>}
         {info.item.type == 'image' && <Text> IMAGE </Text>}
         {info.item.type == 'video' && <Text> VIDEO </Text>}
         {info.item.type == 'song' && <Text> SONG </Text>} */}
      </Card>
     );
   }
 }
 
 export default PurePost;


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