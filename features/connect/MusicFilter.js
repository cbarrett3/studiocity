import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import { Text, Card, Toggle, Tab, TabBar, Button, ButtonGroup, Radio, RadioGroup, Icon, IndexPath, Layout, Select, SelectGroup, SelectItem } from '@ui-kitten/components'

const data = [
   'Alternative',
   'Blues',
   'Classical',
   'Country',
   'Dance',
   'Electronic',
   'Gospel',
   'Hip-Hop/Rap',
   'Jazz',
   'Latin',
   'Metal',
   'New Age',
   'Pop',
   'R&B/Soul',
   'Reggae',
   'Rock',
   'Singer/Songwriter',
   'World'
];

const groupedData = {
   'Alternative': [
      'Emotional Hardcore',
      'Indie Rock',
      'Lo-fi',
      'New Wave',
   ],
   // 'Country': [
   //    'Traditional',
   //    'Modern',
   // ],
   'Dance': [
      'EDM',
      'House',
      'Trance',
   ],
   'Electronic': [
      'Chill',
      'Experimental',
      'Industrial'
   ],
   'Pop': [
      'Bright',
      'Sad',
      'Original',
   ],
   'R&B/Soul': [
      'Contemporary R&B',
      'Soul',
   ],
   'Rock': [
      'Alternative',
      'Psychadelic',
      'Punk',
   ],
};

const MusicFilter = (props) => {

   // const [selectedIndex, setSelectedIndex] = useState([
   //    new IndexPath(0),
   //    new IndexPath(1),
   // ]);

   const [selectedIndex, setSelectedIndex] = React.useState(
      new IndexPath(0)
   );
   
   const [multiSelectedIndex, setMultiSelectedIndex] = React.useState([
      //   new IndexPath(0, 0),
      //   new IndexPath(1, 1),
   ]);

   // const displayValue = selectedIndex.map(index => {
   //    console.log(data[index.row])
   //    return data[index.row];
   // })

   const displayValue = data[selectedIndex.row];

   // const displayV = multiSelectedIndex.map(index => {
   //    return data[index.row]
   // })

   // const groupDisplayValues = multiSelectedIndex.map(index => {
   //    const groupTitle = Object.keys(groupedData)[index.section];
   //    console.log(groupedData[groupTitle][index.row])
   //    return groupedData[groupTitle][index.row];
   // });

   const multiSelectDisplayValues = multiSelectedIndex.map(index => {
      return data[index.row];
   });


   const renderOption = (title) => (
      <SelectItem title={title} />
   );

   const [selectedIndexTabBar, setSelectedIndexTabBar] = React.useState(0);

   const [selectedIndexRadio, setSelectedIndexRadio] = React.useState(0);

   const [checked, setChecked] = React.useState(false);
   const onCheckedChange = (isChecked) => {
      setChecked(isChecked);
   };

   return (
      <Layout style={styles.container} level='1'>
         <Select
            style={styles.selectGroup}
            size='large'
            multiSelect={true}
            placeholder='Genre(s)'
            value={multiSelectDisplayValues.join(', ')}
            selectedIndex={multiSelectedIndex}
            onSelect={index => setMultiSelectedIndex(index)}>
            {data.map((title, i) => (
               <SelectItem key={i} title={title} />
            ))}
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
         <Button style={{ marginHorizontal: 25, marginVertical: 15, paddingVertical: 13 }}> Apply All (250 Results) </Button>
      </Layout>
   )
}

/* icons */
const MusicIcon = (props) => (
   <Icon {...props} style={[props.style, { width: 28, height: 28 }]} name='music' />
);

export default MusicFilter;

const styles = StyleSheet.create({
   container: {
      flex: 1,
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