import React from 'react';
import { StyleSheet, View, Image } from 'react-native';
import { Layout, Button, Icon, Card, List, Text, Avatar } from '@ui-kitten/components';

/* SUDO LOGIC FOR DISPLAY: 
1. Display list of content
2. Create a Card and Dynamically adjust what's shown on it based on type of content
*/

/* DUMMY DATA */
const data = new Array(100).fill({
   title: 'Post',
   type: 'text'
});


export const StudioCityLogo = (props) => (
   <Icon {...props} name='studiocitylogo' pack='assets' />
);

const ProfileIcon = (props) => (<Icon {...props} name='person-outline' />);


/* Popular Screen */
const PopularFeedScreen = ({ navigation }) => {

   /* TODO include profile picture, name, username, & time since post, elipses option */
   const renderItemHeader = (headerProps, info) => (
      // flex direction : row
      <View {...headerProps} style={[headerProps.style, styles.headerContainer]}> 
         {/* this is header col 1 */}
         {/* flex direction : row */}
         <View style={styles.headerLeft}>
            <Avatar size='large' source={require('../../assets/images/gorilla.jpg')}/>
            <View style={styles.headerLeftText}>
               <Text category='h6'> Leon Barrett </Text>
               <Text style={styles.headerLeftHandle} category='s2'> @leonbarrett </Text>
            </View>
         </View>
         {/* this is header col 2 */}
         <View style={styles.headerRight}>
            <Text category='s2'> 24 hr ago </Text>
            <Text category='s2'> . . . </Text>
         </View>
      </View>
   );

   const renderItemFooter = (footerProps) => (
         <View {...footerProps} style={[footerProps.style, styles.footerContainer]}>
           <Button
             style={styles.footerControl}
             size='small'
             status='basic'>
             heart
           </Button>
           <Button
             style={styles.footerControl}
             size='small'>
             comment
           </Button>
           <Button
             style={styles.footerControl}
             size='small'
             status='basic'>
             donate
           </Button>
           <Button
             style={styles.footerControl}
             size='small'>
             share
           </Button>
         </View>
   );

   const renderItem = (info) => (
      <Card
         style={styles.item}
         // status='basic'
         header={headerProps => renderItemHeader(headerProps, info)}
         footer={renderItemFooter}>
         {info.item.type == 'text' && <Text> {info.item.title} {info.index + 1} </Text> }
         {info.item.type == 'image' && <Text> IMAGE </Text> }
         {info.item.type == 'video' && <Text> VIDEO </Text> }
         {info.item.type == 'song' && <Text> SONG </Text> }
      </Card>
   );
   return (
      <Layout style={styles.container}>
         {/* <Button size='giant' appearance='ghost' accessoryLeft={StudioCityLogo}>Check the logo</Button> */}
         {/* <Image source={require('../../assets/images/studiocitylogo.png')} style={{ width: 31, height: 41 }}></Image> */}
         <List
            style={styles.container}
            contentContainerStyle={styles.contentContainer}
            data={data}
            renderItem={renderItem} /* takes an item from data and renders it in the list as 'info' */
         />
      </Layout>
   )
}
export default PopularFeedScreen;


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
    },
    headerLeft: {
       flexDirection: 'row',
       justifyContent: 'flex-start'
    },
    headerLeftText: {
      //  alignItems: 'center',
      //  justifyContent: 'center'
    },
    headerLeftHandle: {
      fontStyle: 'italic'
    },
    headerRight: {
       flexDirection: 'row',
       justifyContent: 'flex-end'
    }

   /* container around entire page */
   //    container: {
   //       /* maxHeight: ... */
   //    },
   /* container around the scroll view */
   //    contentContainer: {
   //       // paddingVertical: 4,
   //       // paddingHorizontal: 0,
   //    },
   /* container on each item */
      // item: {
      //    // marginVertical: 1, // space between top and bottom of posts
      //    // marginHorizontal: 50
      // },
 });
