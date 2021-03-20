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

const MusicFilter = (props) => {

   // Dropdown Selections
   const [multiSelectedIndex, setMultiSelectedIndex] = React.useState([]);
   // Radios
   const [singerRadioChecked, setSingerRadioChecked] = React.useState(true);
   const [rapperRadioChecked, setRapperRadioChecked] = React.useState(true);
   const [producerRadioChecked, setProducerRadioChecked] = React.useState(true);
   const [composerRadioChecked, setComposerRadioChecked] = React.useState(true);
   const [stringsRadioChecked, setStringsRadioChecked] = React.useState(true);
   const [brassRadioChecked, setBrassRadioChecked] = React.useState(true);
   const [percussionRadioChecked, setPercussionRadioChecked] = React.useState(true);
   const [woodwindRadioChecked, setWoodwindRadioChecked] = React.useState(true);
   const [songwriterRadioChecked, setSongwriterRadioChecked] = React.useState(true);
   const [bandRadioChecked, setBandRadioChecked] = React.useState(true);
   const [DJRadioChecked, setDJRadioChecked] = React.useState(true);
   const [recordingEngineerRadioChecked, setRecordingEngineerRadioChecked] = React.useState(true);
   const [mixingEngineerRadioChecked, setMixingEngineerRadioChecked] = React.useState(true);
   const [masteringEngineerRadioChecked, setMasteringEngineerRadioChecked] = React.useState(true);
   const [systemsEngineerRadioChecked, setSystemsEngineerRadioChecked] = React.useState(true);
   const [sessionMusicianRadioChecked, setSessionMusicianRadioChecked] = React.useState(true);
   // Toggles
   const [openToCollabsToggledOn, setOpenToCollabsToggledOn] = React.useState(true);
   const [certifiedOnlyToggledOn, setCertifiedOnlyToggledOn] = React.useState(true);

   // Dropdown Display Values
   const multiSelectDisplayValues = multiSelectedIndex.map(index => {
      return data[index.row];
   });

   return (
      <Layout style={styles.container} level='1'>
         <Select
            style={styles.selectGroup}
            multiSelect={true}
            size='large'
            placeholder='Genres'
            selectedIndex={multiSelectedIndex}
            value={multiSelectDisplayValues.join(', ')}
            onSelect={index => setMultiSelectedIndex(index)}>
            <SelectGroup title='All Genres'>
               {data.map((title, i) => (
                  <SelectItem key={i} title={title} />
               ))}
            </SelectGroup>
         </Select>

         <Layout style={styles.togglesContainer}>
            <Layout style={styles.togglesLayout}>
               <Layout style={styles.togglesColumn}>
                  <Toggle
                     style={styles.toggle}
                     checked={openToCollabsToggledOn}
                     onChange={nextToggled => setOpenToCollabsToggledOn(nextToggled)}>
                     Pubilc DMs
                  </Toggle>
                  <Radio
                     style={styles.radio}
                     checked={singerRadioChecked}
                     onChange={nextChecked => setSingerRadioChecked(nextChecked)}>
                     Singer
                  </Radio>
                  <Radio
                     style={styles.radio}
                     checked={rapperRadioChecked}
                     onChange={nextChecked => setRapperRadioChecked(nextChecked)}>
                     Rapper
                  </Radio>
                  <Radio
                     style={styles.radio}
                     checked={producerRadioChecked}
                     onChange={nextChecked => setProducerRadioChecked(nextChecked)}>
                     Producer
                  </Radio>
                  <Radio
                     style={styles.radio}
                     checked={composerRadioChecked}
                     onChange={nextChecked => setComposerRadioChecked(nextChecked)}>
                     Composer
                  </Radio>
                  <Radio
                     style={styles.radio}
                     checked={stringsRadioChecked}
                     onChange={nextChecked => setStringsRadioChecked(nextChecked)}>
                     Strings
                  </Radio>
                  <Radio
                     style={styles.radio}
                     checked={brassRadioChecked}
                     onChange={nextChecked => setBrassRadioChecked(nextChecked)}>
                     Brass
                  </Radio>
                  <Radio
                     style={styles.radio}
                     checked={percussionRadioChecked}
                     onChange={nextChecked => setPercussionRadioChecked(nextChecked)}>
                     Percussion
                  </Radio>
                  <Radio
                     style={styles.radio}
                     checked={woodwindRadioChecked}
                     onChange={nextChecked => setWoodwindRadioChecked(nextChecked)}>
                     Woodwind
                  </Radio>
               </Layout>
               <Layout style={styles.togglesColumn}>
                  <Toggle
                     style={styles.toggle}
                     checked={certifiedOnlyToggledOn}
                     onChange={nextToggled => setCertifiedOnlyToggledOn(nextToggled)}>
                     SC Certified
                  </Toggle>
                  <Radio
                     style={styles.radio}
                     checked={songwriterRadioChecked}
                     onChange={nextChecked => setSongwriterRadioChecked(nextChecked)}>
                     Songwriter
                  </Radio>
                  <Radio
                     style={styles.radio}
                     checked={bandRadioChecked}
                     onChange={nextChecked => setBandRadioChecked(nextChecked)}>
                     Band
                  </Radio>
                  <Radio
                     style={styles.radio}
                     checked={DJRadioChecked}
                     onChange={nextChecked => setDJRadioChecked(nextChecked)}>
                     DJ
                  </Radio>
                  <Radio
                     style={styles.radio}
                     checked={recordingEngineerRadioChecked}
                     onChange={nextChecked => setRecordingEngineerRadioChecked(nextChecked)}>
                     Recording Engineer
                  </Radio>
                  <Radio
                     style={styles.radio}
                     checked={mixingEngineerRadioChecked}
                     onChange={nextChecked => setMixingEngineerRadioChecked(nextChecked)}>
                     Mixing Engineer
                  </Radio>
                  <Radio
                     style={styles.radio}
                     checked={masteringEngineerRadioChecked}
                     onChange={nextChecked => setMasteringEngineerRadioChecked(nextChecked)}>
                     Mastering Engineer
                  </Radio>
                  <Radio
                     style={styles.radio}
                     checked={systemsEngineerRadioChecked}
                     onChange={nextChecked => setSystemsEngineerRadioChecked(nextChecked)}>
                     Systems Engineer
                  </Radio>
                  <Radio
                     style={styles.radio}
                     checked={sessionMusicianRadioChecked}
                     onChange={nextChecked => setSessionMusicianRadioChecked(nextChecked)}>
                     Session Musician
                  </Radio>
               </Layout>
            </Layout>
         </Layout>
         <Button style={styles.applyButton}> Apply All (250 Results) </Button>
      </Layout>
   )
}

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
      paddingBottom: 30
   },
   togglesColumn: {
      alignItems: 'flex-start'
   },
   toggle: {
      paddingVertical: 15,
   },
   radio: {
      paddingVertical: 10,
   },
   selectGroup: {
      paddingHorizontal: 15,
      paddingVertical: 20
   },
   applyButton: {
      marginHorizontal: 15,
      marginTop: 10, // button position, below radios
      paddingVertical: 15, // button size
   }
});