/* 
Name: PopularFeed.js
Description: Component for the default main screen within BottomTabNavigation
Key Parent Components:
Key Child Components: Post.js
*/

import React, { useMemo } from 'react';
import { StyleSheet, FlatList, View, Image, RefreshControl } from 'react-native';
import { Layout, Button, Icon, Card, List, Text, Avatar } from '@ui-kitten/components';
import Post from '../../components/molecules/Post'
import PurePost from '../../components/molecules/PurePost'
import { set } from 'react-native-reanimated';

/* SUDO LOGIC FOR DISPLAY: 
1. Display list of content
2. Create a Card and Dynamically adjust what's shown on it based on type of content
3. Implement Scroll to Refresh or "Pull to Refresh" (simulate api call using mocky might help)
*/

const ProfileIcon = (props) => (<Icon {...props} name='person-outline' />);

// const data3 = new Array(100).fill({title: 'Post', type: 'text'})

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

   const data3 = useMemo(() => {
      return new Array(10).fill({title: 'Post', type: 'text'})
   })

   const data5 = new Array(10).fill(null).map(()=> ({title: 'Post', type: 'text'}))

   const data4 = new Array(10).fill({title: 'Post', type: 'text'})

   /* memoized post data */
   const memoizedPostData = useMemo(() => Post, [data]);

   const postComponent = () => {
      return <Post/>
   }

   const purepost = () => {<PurePost/>}

   // const post = ({item}) => (Post)

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

   // const listComponent = useMemo(() => {
   //    return (
   //       // <Layout style={styles.container}>
   //          // {/* <Button size='giant' appearance='ghost' accessoryLeft={StudioCityLogo}>Check the logo</Button> */}
   //          // {/* <Image source={require('../../assets/images/studiocitylogo.png')} style={{ width: 31, height: 41 }}></Image> */}
   //          <List
   //             style={styles.container}
   //             contentContainerStyle={styles.contentContainer}
   //             // refreshControl={<RefreshControl refreshing={refreshing} onRefresh={setRefreshing(true)} />}
   //             data={data}
   //             renderItem={Post} /* takes an item from data and renders it in the list as 'info' */
   //             initialNumToRender={50}
   //            // maxToRenderPerBatch={100}
   //          />
   //       // </Layout>
   //    )
   // }, [data])


   return (
      <Layout style={styles.container}>
         {/* {listComponent}  */}
         {/* {console.log(data)} */}
         <List
               style={styles.container}
               contentContainerStyle={styles.contentContainer}
               data={data} // plain array
               // renderItem={Post} // takes an item from data and renders it into the list
               renderItem={({item, index}) => <Post item= {item} index={index}/>}

               // below is working well and uses purecomponent for post aka purepost
               // renderItem={({item, index}) => <PurePost item= {item} index={index} />}
               // extraData={refreshFeed} // tells post to re-render (pass something that changes to re-render)
               initialNumToRender={10} // enough to fill up the screen but not too much more
               ListEmptyComponent={<View><Text>you have no posts to look at...make this prettier...</Text></View>}
               onEndReachedThreshold={.75} // distance from bottom that triggers onEndReached callback
               onEndReached={onEndReached} // fetch next group of posts (TODO: can't use that async function as a callback)
               // onRefresh={onRefresh} // fetch new feed (TODO: can't use that async function as a callback)
               refreshing={isCurrentlyFetching} // boolean
               keyExtractor={(item, index) => String(index)} // helps w/ caching by setting index of array as the key
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
