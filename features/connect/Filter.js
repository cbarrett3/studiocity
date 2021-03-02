import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import { Text, Card, Tab, TabBar, Button, ButtonGroup, Radio, RadioGroup, Icon, IndexPath, Layout, Select, SelectGroup, SelectItem } from '@ui-kitten/components'

const Filter = (props) => {

   const [selectedIndex, setSelectedIndex] = useState([
      new IndexPath(0),
      new IndexPath(1),
   ]);

   const [selectedIndexTabBar, setSelectedIndexTabBar] = React.useState(0);

   const [selectedIndexRadio, setSelectedIndexRadio] = React.useState(0);


   return (
      <Layout style={styles.container} level='1'>
         <TabBar
            selectedIndex={selectedIndexTabBar}
            onSelect={index => setSelectedIndexTabBar(index)}>
            <Tab title='Music' />
            <Tab title='Video' />
            <Tab title='Photo' />
            <Tab title='Design' />
            <Tab title='Other' />
         </TabBar>
         <Select
            style={styles.selectGroup}
            multiSelect={true}
            activeOpacity={1}
            placeholder="Music"
            size='medium'
            selectedIndex={selectedIndex}
            onSelect={index => setSelectedIndex(index)}>
            <SelectItem accessoryRight={MusicIcon} title='Producer' />
            <SelectItem accessoryRight={MusicIcon} title='Vocalist' />
            <SelectItem accessoryRight={MusicIcon} title='Audio Engineer' />
            <SelectItem accessoryRight={MusicIcon} title='DJ' />
            <SelectItem accessoryRight={MusicIcon} title='Mixing' />
            <SelectItem accessoryRight={MusicIcon} title='Mastering' />
            <SelectItem accessoryRight={MusicIcon} title='Guitarist' />
            <SelectItem accessoryRight={MusicIcon} title='Drummer' />
            <SelectItem accessoryRight={MusicIcon} title='Lyricist' />
         </Select>
         {/* <Text category='h6'>
            {`Selected Option: ${selectedIndex + 1}`}
         </Text> */}
         <RadioGroup
            style={styles.radioGroup}
            selectedIndex={selectedIndexRadio}
            multiSelect={true}
            onChange={index => setSelectedIndexRadio(index)}>
            <Radio style={styles.radio}>Vocalist</Radio>
            <Radio style={styles.radio}>Producer</Radio>
            <Radio style={styles.radio}>Guitarist</Radio>
         </RadioGroup>
         <ButtonGroup style={styles.buttonGroup} appearance='filled'>
            <Button onPress={() => console.log('L')}>L</Button>
            <Button onPress={() => console.log('M')}>M</Button>
            <Button onPress={() => console.log('R')}>R</Button>
         </ButtonGroup>
         <ButtonGroup style={styles.buttonGroup} appearance='outline'>
            <Button>L</Button>
            <Button>M</Button>
            <Button>R</Button>
         </ButtonGroup >
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
      </Layout>
   )
}

/* icons */
const MusicIcon = (props) => (
   <Icon {...props} style={[props.style, { width: 28, height: 28 }]} name='music' />
);

export default Filter;

const styles = StyleSheet.create({
   container: {
      // flex: 1,
   },
   buttonGroup: {
      margin: 18,
   },
   radioGroup: {
      margin: 18,
   },
   radio: {
      marginBottom: 20
   },
   selectGroup: {
      margin: 18
   }
});