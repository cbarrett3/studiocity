import ProfileCard from '../../components/ProfileCard'
import React, { useMemo, useState } from 'react';
import { StyleSheet, FlatList, View, Image, RefreshControl } from 'react-native';
import { Layout, Button, Icon, Card, List, Text, Avatar, Divider } from '@ui-kitten/components';

/* Connect screen */
const Connect = ( {navigation }) => {
   const initialData2 = new Array(3).fill({
      primarySkill: 'Vocalist',
      type: 'text'
   })
   /* dummy data */
   const [data, setData] = React.useState(initialData2);
  return (
      // <Layout style={styles.container}>
      //    {/* TODO: search bar, filters, etc. */}
      //     <Text category='h1'>Connect with other creatives...</Text>
      // </Layout>
      <Layout style={styles.container}>
      {/* {console.log(data)} */}
         <List
               // style={styles.container}
               // contentContainerStyle={styles.contentContainer}
               data={data}
               renderItem={({item, index}) => <ProfileCard item= {item} index={index}/>}
               // renderItem={({ item }) => <Item title={item.title} image={item.image} />}

               // extraData={refreshFeed} // tells post to re-render (pass something that changes to re-render)
               initialNumToRender={25} // enough to fill up the screen but not too much more
               ListEmptyComponent={<Layout><Text>you have no posts to look at...make this prettier...</Text></Layout>}
               // onEndReachedThreshold={.75} // distance from bottom that triggers onEndReached callback
               // onEndReached={onEndReached} // fetch next group of posts (TODO: can't use that async function as a callback)

               // refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}

               keyExtractor={(item, index) => String(index)} // helps w/ caching by setting index of array as the key
               // keyExtractor={item => item.id}
               ItemSeparatorComponent={Divider}
         />
      </Layout>
  )
}
export default Connect;

/* styles */
const styles = StyleSheet.create({
   container: {
     flex: 1,
   //   alignItems: 'center',
   //   justifyContent: 'center',
   },
 });