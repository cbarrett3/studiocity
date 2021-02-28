/* 
Name: ProfileCard.js
Description: Component for Render Items within Flatlist 'feeds' like PopularFeed.js
Key Parent Components: PopularFeed.js
Key Child Components: N/A
*/

import React, { memo, useMemo } from 'react';
import { StyleSheet, View, Image, ImageBackground } from 'react-native';
import { Layout, Button, Icon, Card, List, Text, Avatar } from '@ui-kitten/components';

const ProfileCard = React.memo((info) => {
   const renderItemHeader = (headerProps, info) => (
      // flex direction : row
      <Layout {...headerProps} style={[headerProps.style, styles.headerContainer]}>
         {/* this is header col 1 */}
         {/* flex direction is row */}
         <Layout style={styles.headerLeft}>
            <Avatar size='giant' shape='round' source={require('../assets/images/gorilla.jpg')} style={styles.avatarStyle} />
            <Layout style={styles.headerLeftText}>
               <Text category='s1'> Mac Miller </Text>
               <Text category='s1' style={styles.headerLeftHandle}> @macmiller </Text>
            </Layout>
         </Layout>
         {/* this is header col 2 */}
         <Layout style={styles.headerRight}>
            <Text category='s1'> Producer </Text>
            {/* {user.primarySkill} */}
            {/* <Icon style={styles.moreIcon} name='more-horizontal-outline'  fill='#6C6C6C'/>  */}
         </Layout>
      </Layout>
   );

   const renderItemFooter = (footerProps) => (
      <Layout {...footerProps} style={[footerProps.style, styles.footerContainer]}>
         <Icon style={styles.interactIcons} name='gift-outline' fill='#6C6C6C' />
         <Icon style={styles.interactIcons} name='message-circle-outline' fill='#6C6C6C' />
         <Icon style={styles.interactIcons} name='heart-outline' fill='#FF5D4F' />
         <Icon style={styles.interactIcons} name='share-outline' fill='#6C6C6C' />
         <Icon style={styles.pinIconSize} name='pin-outline' fill='#6C6C6C' />
      </Layout>
   );
   return (
      <Card>
         <Layout style={styles.cardContentLayout}>
            <Layout style={styles.leftSideAvatarAndDescriptionLayout}>
               <Avatar style={styles.avatar} shape='round' source={require('../assets/images/gorilla.jpg')} />
               <Layout style={styles.descriptionLayout}>
                  <Text category='h6'> Mac Miller </Text> 
                  <Text style={styles.handleText} category='s1'> @macmiller </Text>
                  <Layout style={styles.locationInfoLayout}>
                     <Icon style={styles.pinIcon} name='pin-outline' fill='#FA8072' />
                     <Text style={styles.locationText} category='s1'> 
                        Pittsburg PA
                     </Text>
                  </Layout>
               </Layout>
            </Layout>
            <Layout style={styles.rightSidePrimarySkillAndDMIconLayout}>
               <Text category='s1'> {info.item.primarySkill} </Text>
               <Layout style={styles.dmIconLayout}>
                  <Icon style={styles.dmIconSize} name='paper-plane-outline' fill='#6C6C6C' />
               </Layout>
            </Layout>
         </Layout>
      </Card>
   )
},
   (prevProps, nextProps) => {
      return prevProps.item === nextProps.item
   }
);

export default ProfileCard;

const styles = StyleSheet.create({
   avatar: {
      borderColor: 3 > 2 ? 'pink' : 'green',
      borderWidth: 2.5,
      height: 75,
      width: 75,
   },
   descriptionLayout: {
      marginLeft: 5,
   },
   cardContentLayout: {
      flexDirection: 'row',
      justifyContent: 'space-between',
   },
   leftSideAvatarAndDescriptionLayout: {
      flexDirection: 'row',
   },
   handleText: {
      color: '#6C6C6C',
      fontSize: 13,
   },
   locationInfoLayout: {
      flex: 1,
      flexDirection: 'row',
      alignItems: 'flex-end',
   },
   locationText: {
      lineHeight: 25,
      marginLeft: 1
   },
   pinIcon: {
      marginLeft: 2,
      paddingTop: 27,
      width: 18,
      height: 18,
   },
   rightSidePrimarySkillAndDMIconLayout: {
     flexDirection: 'column',
     justifyContent: 'space-between' // appear at bottom of card
   },
   dmIconLayout: {
      flexDirection: 'row',
      justifyContent: 'flex-end', // appear on far right
   },
   dmIconSize: {
      width: 20,
      height: 20,
   },
});