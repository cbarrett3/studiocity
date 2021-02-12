/* 
Name: PopularFeed.js
Description: Component for the default main screen within BottomTabNavigation
Key Parent Components:
Key Child Components: Post.js
*/

import React, { useMemo } from 'react';
import { StyleSheet, FlatList, View, Image, RefreshControl } from 'react-native';
import { Layout, Button, Icon, Card, List, Text, Avatar, Divider } from '@ui-kitten/components';
import Post from '../../components/molecules/Post'
import PurePost from '../../components/molecules/PurePost'

/* SUDO LOGIC FOR DISPLAY: 
1. Display list of content
2. Create a Card and Dynamically adjust what's shown on it based on type of content
3. Implement Scroll to Refresh or "Pull to Refresh" (simulate api call using mocky might help)
*/

/* Popular Screen */
const PopularFeedScreen = ({ navigation }) => {

   /* used to toggle once new data is retrieved and list should re-render */
   const [refreshFeed, setRefreshFeed] = React.useState(false);
   const [isCurrentlyFetching, setIsCurrentlyFetching ] = React.useState(false);

   /* dummy data */
   const [data, setData] = React.useState(new Array(100).fill({
      title: 'Post',
      type: 'text'
   }));

   /* called on pull refresh */
   const onRefresh = () => {
      setIsFetching(true);
      fetchData();
   }

   /* fetch fresh data feed */
   const fetchData = () => {
      setData(React.useState(new Array(100).fill({
         title: 'Post',
         type: 'text'
      })))
      // setRefreshFeed(!refreshFeed);
      setIsFetching(false);
    }

   /* fetch next group of posts in same feed */
   const onEndReached = (distanceFromEnd) => {
      // console.log("on end reached ", distanceFromEnd)
      // get next group of posts to render
      const moreData = new Array(50).fill({
         title: 'Post',
         type: 'text'
      });
      setData(data.concat(moreData));
   }

   const ItemSeparator = () => {
      return (
        <Layout
          style={{
            height: .35,
            width: "100%",
            backgroundColor: "#6C6C6C",
          }}
        />
      );
    }

   return (
      <Layout style={styles.container}>
         <List
               // style={styles.container}
               // contentContainerStyle={styles.contentContainer}
               data={data}
               renderItem={({item, index}) => <Post item= {item} index={index}/>}
               // extraData={refreshFeed} // tells post to re-render (pass something that changes to re-render)
               initialNumToRender={25} // enough to fill up the screen but not too much more
               ListEmptyComponent={<Layout><Text>you have no posts to look at...make this prettier...</Text></Layout>}
               onEndReachedThreshold={.75} // distance from bottom that triggers onEndReached callback
               onEndReached={onEndReached} // fetch next group of posts (TODO: can't use that async function as a callback)
               // onRefresh={onRefresh} // fetch new feed (TODO: can't use that async function as a callback)
               refreshing={isCurrentlyFetching} // boolean
               keyExtractor={(item, index) => String(index)} // helps w/ caching by setting index of array as the key
               // ItemSeparatorComponent={ItemSeparator}
               ItemSeparatorComponent={Divider}
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
