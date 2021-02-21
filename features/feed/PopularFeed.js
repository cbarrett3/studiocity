/* 
Name: PopularFeed.js
Description: Component for the default main screen within BottomTabNavigation
Key Parent Components:
Key Child Components: Post.js
*/

// import ApolloClient, { gql } from 'apollo-boost';
import React, { useMemo, useState } from 'react';
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

   const initialData = [
      {
        id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
        title: "Susan Bert",
        image: "1"
      },
      {
        id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
        title: "Neil Arms",
        image: "2"
      },
      {
        id: "58694a0f-3da1-471f-bd96-145571e29d72",
        title: "Carla Neice",
        image: "3"
      },
      {
        id: "bd7acbea-c1b1-46c2-aed5-3ad53cbb28ba",
        title: "Janice Hanner",
        image: "4"
      },
      {
        id: "3ac68afc-c605-48d3-a4f8-fcd91aa97f63",
        title: "James Sullivan",
        image: "5"
      }
    ];
    
   const initialData2 = new Array(3).fill({
      title: 'Post',
      type: 'text'
   })


   /* used to toggle once new data is retrieved and list should re-render */
   const [refreshFeed, setRefreshFeed] = React.useState(false);
   const [isCurrentlyFetching, setIsCurrentlyFetching ] = React.useState(false);
   const [refreshing, setRefreshing ] = React.useState(false);

   /* dummy data */
   const [data, setData] = React.useState(initialData2);

   // const initialData = new Array(100).fill({
   //    title: 'Post',
   //    type: 'text'
   // })

   /* called on pull refresh */
   // const onRefresh = () => {
   //    // setIsCurrentlyFetching(true);
   //    setRefreshing(true);
   //    fetchData();
   // }



   const onRefresh = React.useCallback(async () => {
      setRefreshing(true);
      // if there are more posts ?
      if (data.length < 2000) {
        try {
             const moreData = new Array(1).fill({
               title: 'Post',
               type: 'text'
             });
            //  console.log(moreData)
             setData(moreData.concat(data));
            //  console.log('data', data.length);
            //  console.log('moredata', moreData.length);
            //  console.log('data concat moredata', data.concat(moreData).length);
            //  console.log('data', data.length);

             setRefreshing(false);
        } catch (error) {
          console.error(error);
        }
      }
      else{
        console.log('over 2000')
        setRefreshing(false)
      }

      // BELOW WORKS

      // setRefreshing(true);
      // if (data.length < 10) {
      //   try {
      //     let response = await fetch(
      //       'http://www.mocky.io/v2/5e3315753200008abe94d3d8?mocky-delay=2000ms',
      //     );
      //     let responseJson = await response.json();
      //     console.log(responseJson);
      //     setData(responseJson.result.concat(initialData));
      //     setRefreshing(false)
      //   } catch (error) {
      //     console.error(error);
      //   }
      // }
      // else{
      //   ToastAndroid.show('No more new data available', ToastAndroid.SHORT);
      //   setRefreshing(false)
      // }
    }, [refreshing]);

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
      // get next group of posts to render (simulating a fetch using an index & offset)
      const moreData = new Array(50).fill({
         title: 'Post',
         type: 'text'
      });
      setData(data.concat(moreData));
   }

   return (
      <Layout style={styles.container}>
         {/* {console.log(data)} */}
         <List
               // style={styles.container}
               // contentContainerStyle={styles.contentContainer}
               data={data}
               renderItem={({item, index}) => <Post item= {item} index={index}/>}
               // renderItem={({ item }) => <Item title={item.title} image={item.image} />}

               // extraData={refreshFeed} // tells post to re-render (pass something that changes to re-render)
               initialNumToRender={25} // enough to fill up the screen but not too much more
               ListEmptyComponent={<Layout><Text>you have no posts to look at...make this prettier...</Text></Layout>}
               // onEndReachedThreshold={.75} // distance from bottom that triggers onEndReached callback
               // onEndReached={onEndReached} // fetch next group of posts (TODO: can't use that async function as a callback)
               
               // onRefresh={onRefresh} // fetch new feed (TODO: can't use that async function as a callback)
               // refreshing={isCurrentlyFetching} // boolean

               refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}

               keyExtractor={(item, index) => String(index)} // helps w/ caching by setting index of array as the key
               // keyExtractor={item => item.id}
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
