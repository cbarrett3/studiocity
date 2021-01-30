import React from 'react';
import { StyleSheet, View, Image } from 'react-native';
import { Layout, Button, Icon, Card, List, Text, Avatar } from '@ui-kitten/components';

/* SUDO LOGIC FOR DISPLAY: 
1. Display list of content
2. Create a Card and Dynamically adjust what's shown on it based on type of content
*/

/* DUMMY DATA */
const data = new Array(100).fill({
   title: 'Item',
});


export const StudioCityLogo = (props) => (
   <Icon {...props} name='studiocitylogo' pack='assets' />
);

const ProfileIcon = (props) => (<Icon {...props} name='person-outline' />);


/* Popular Screen */
const PopularFeedScreen = ({ navigation }) => {

   /* TODO include profile picture, name, username, & time since post, elipses option */
   const renderItemHeader = (headerProps, info) => (
      <View {...headerProps} style={[headerProps.style, styles.headerContainer]}>
         {/* todo: display avatar */}
         <Avatar size='tiny' source={require('../../assets/images/gorilla.jpg')}/>
         <View>
            <Text category='s2'> Leon {info.item.title} {info.index + 1} </Text>
            <Text category='s2'> @leonbarrett </Text>
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
         status='basic'
         header={headerProps => renderItemHeader(headerProps, info)}
         footer={renderItemFooter}>
         <Text>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
            standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make
            a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged.
         </Text>
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
      justifyContent: 'flex-start',
    },
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
