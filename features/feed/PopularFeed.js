import React, { useMemo } from 'react';
import { StyleSheet, FlatList, View, Image, RefreshControl } from 'react-native';
import { Layout, Button, Icon, Card, List, Text, Avatar } from '@ui-kitten/components';
import Post from '../../components/molecules/Post'
import { set } from 'react-native-reanimated';

/* SUDO LOGIC FOR DISPLAY: 
1. Display list of content
2. Create a Card and Dynamically adjust what's shown on it based on type of content
3. Implement Scroll to Refresh or "Pull to Refresh" (simulate api call using mocky might help)
*/

const ProfileIcon = (props) => (<Icon {...props} name='person-outline' />);

/* Popular Screen */
const PopularFeedScreen = ({ navigation }) => {

   /* used to toggle once new data is retrieved and list should re-render */
   const [refreshFeed, setRefreshFeed] = React.useState(false);
   const [isFetching, setIsFetching ] = React.useState(false);

   /* dummy data */
   const [data, setData] = React.useState(new Array(25).fill({
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
      setData(React.useState(new Array(25).fill({
         title: 'Post',
         type: 'text'
      })))
      // setRefreshFeed(!refreshFeed);
      setIsFetching(false);
    }

   /* fetch next group of posts in same feed */
   const onEndReached = (distanceFromEnd) => {
      // console.log(
      //    "on end reached ",
      //    distanceFromEnd
      // );

      // fetch next group of posts
      const moreData = new Array(25).fill({
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
         <List
               style={styles.container}
               contentContainerStyle={styles.contentContainer}
               data={data} // plain array
               renderItem={Post} // takes an item from data and renders it into the list
               initialNumToRender={10} // enough to fill up the screen but not too much more
               ListEmptyComponent={<View><Text>you have no posts to look at...this could be improved...</Text></View>}
               extraData={refreshFeed} // tells post to re-render (pass something that changes to re-render)
               onEndReachedThreshold={.75} // distance from bottom that triggers onEndReached callback
               onEndReached={onEndReached} // fetch next group of posts (TODO: can't use that async function as a callback)
               onRefresh={onRefresh} // fetch new feed (TODO: can't use that async function as a callback)
               refreshing={isFetching}
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
