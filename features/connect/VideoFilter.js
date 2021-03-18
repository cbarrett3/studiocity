import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import { Text, Card, Toggle, Tab, TabBar, Button, ButtonGroup, Radio, RadioGroup, Icon, IndexPath, Layout, Select, SelectGroup, SelectItem } from '@ui-kitten/components'

const VideoFilter = (props) => {

   const [selectedIndex, setSelectedIndex] = useState([
      new IndexPath(0),
      new IndexPath(1),
   ]);

   const [selectedIndexTabBar, setSelectedIndexTabBar] = React.useState(0);

   const [selectedIndexRadio, setSelectedIndexRadio] = React.useState(0);

   const [checked, setChecked] = React.useState(false);
   const onCheckedChange = (isChecked) => {
      setChecked(isChecked);
   };

   return (
      <Layout style={styles.container} level='1'>
         {/* <TabBar
            selectedIndex={selectedIndexTabBar}
            onSelect={index => setSelectedIndexTabBar(index)}>
            <Tab title='Music' />
            <Tab title='Video' />
            <Tab title='Photo' />
            <Tab title='Design' />
            <Tab title='Other' />
         </TabBar> */}

         <Select
            style={styles.selectGroup}
            multiSelect={true}
            activeOpacity={1}
            placeholder="Genres"
            size='large'
            selectedIndex={selectedIndex}
            onSelect={index => setSelectedIndex(index)}>
            <SelectItem title='Select All' />
            <SelectItem title='EDM' />
            <SelectItem title='Trap' />
            <SelectItem title='House' />
            <SelectItem title='Alternative Rock' />
            <SelectItem title='Indie' />
            <SelectItem title='R&B Soul' />
            <SelectItem title='Country' />
            <SelectItem title='Rock' />
            <SelectItem title='Punk' />
            <SelectItem title='Experimental' />
         </Select>

         <Layout style={styles.togglesContainer}>
            <Layout style={styles.togglesLayout}>
               <Layout style={styles.togglesColumn}>
                  <Toggle
                     style={styles.toggle}
                     checked={checked}
                     onChange={onCheckedChange}>
                     Vocalist
                  </Toggle>
                  <Toggle
                     style={styles.toggle}
                     checked={checked}
                     onChange={onCheckedChange}>
                     Producer
                  </Toggle>
                  <Toggle
                     style={styles.toggle}
                     checked={checked}
                     onChange={onCheckedChange}>
                     Composer
                  </Toggle>
                  <Toggle
                     style={styles.toggle}
                     checked={checked}
                     onChange={onCheckedChange}>
                     Songwriter
                  </Toggle>
                  <Toggle
                     style={styles.toggle}
                     checked={checked}
                     onChange={onCheckedChange}>
                     Strings
                  </Toggle>
                  <Toggle
                     style={styles.toggle}
                     checked={checked}
                     onChange={onCheckedChange}>
                     Brass
                  </Toggle>
                  <Toggle
                     style={styles.toggle}
                     checked={checked}
                     onChange={onCheckedChange}>
                     Percussion
                  </Toggle>
                  <Toggle
                     style={styles.toggle}
                     checked={checked}
                     onChange={onCheckedChange}>
                     Woodwind
                  </Toggle>
               </Layout>
               <Layout style={styles.togglesColumn}>
                  {/* <Toggle
                     style={styles.toggle}
                     checked={checked}
                     onChange={onCheckedChange}>
                     Band
                  </Toggle>
                  <Toggle
                     style={styles.toggle}
                     checked={checked}
                     onChange={onCheckedChange}>
                     DJ
                  </Toggle>
                  <Toggle
                     style={styles.toggle}
                     checked={checked}
                     onChange={onCheckedChange}>
                     Recording Engineer
                  </Toggle>
                  <Toggle
                     style={styles.toggle}
                     checked={checked}
                     onChange={onCheckedChange}>
                     Mixing Engineer
                  </Toggle>
                  <Toggle
                     style={styles.toggle}
                     checked={checked}
                     onChange={onCheckedChange}>
                     Mastering Engineer
                  </Toggle>
                  <Toggle
                     style={styles.toggle}
                     checked={checked}
                     onChange={onCheckedChange}>
                     Systems Engineer
                  </Toggle>
                  <Toggle
                     style={styles.toggle}
                     checked={checked}
                     onChange={onCheckedChange}>
                     Session Musician
                  </Toggle>
                  <Toggle
                     style={styles.toggle}
                     checked={checked}
                     onChange={onCheckedChange}>
                     Other Musical Talent
                  </Toggle> */}
               </Layout>
            </Layout>
         </Layout>
         <Button style={{marginHorizontal: 25, marginVertical: 15, paddingVertical: 13}}> Apply All (250 Results) </Button>
      </Layout>
   )
}

/* icons */
const MusicIcon = (props) => (
   <Icon {...props} style={[props.style, { width: 28, height: 28 }]} name='music' />
);

export default VideoFilter;

const styles = StyleSheet.create({
   container: {
      flex: 1,
      // alignItems: 'center',
      // justifyContent: 'center',
    },
   togglesContainer: {
      flexDirection: 'row',
   },
   togglesLayout: {
      justifyContent: 'space-between', 
      flexDirection: 'row', 
      flex: 1, 
      paddingHorizontal: 15,
      paddingVertical: 5
   },
   togglesColumn: {
      alignItems: 'flex-start'
   },
   toggle: {
      paddingVertical: 10,
   },
   selectGroup: {
     padding: 15,
   }
});