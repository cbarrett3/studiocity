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

const VisualsFilter = (props) => {

   // Dropdown Selections
   const [multiSelectedIndex, setMultiSelectedIndex] = React.useState([]);
   // Radios
   const [photographerRadioChecked, setPhotographerRadioChecked] = React.useState(false);
   const [rapperRadioChecked, setRapperRadioChecked] = React.useState(false);
   const [producerRadioChecked, setProducerRadioChecked] = React.useState(false);
   const [composerRadioChecked, setComposerRadioChecked] = React.useState(false);
   const [stringsRadioChecked, setStringsRadioChecked] = React.useState(false);
   const [brassRadioChecked, setBrassRadioChecked] = React.useState(false);
   const [percussionRadioChecked, setPercussionRadioChecked] = React.useState(false);
   const [woodwindRadioChecked, setWoodwindRadioChecked] = React.useState(false);
   const [songwriterRadioChecked, setSongwriterRadioChecked] = React.useState(false);
   const [bandRadioChecked, setBandRadioChecked] = React.useState(false);
   const [DJRadioChecked, setDJRadioChecked] = React.useState(false);
   const [recordingEngineerRadioChecked, setRecordingEngineerRadioChecked] = React.useState(false);
   const [mixingEngineerRadioChecked, setMixingEngineerRadioChecked] = React.useState(false);
   const [masteringEngineerRadioChecked, setMasteringEngineerRadioChecked] = React.useState(false);
   const [systemsEngineerRadioChecked, setSystemsEngineerRadioChecked] = React.useState(false);
   const [sessionMusicianRadioChecked, setSessionMusicianRadioChecked] = React.useState(false);
   // Toggles
   const [openToCollabsToggledOn, setOpenToCollabsToggledOn] = React.useState(false);
   const [certifiedOnlyToggledOn, setCertifiedOnlyToggledOn] = React.useState(false);

   // Dropdown Display Values
   const multiSelectDisplayValues = multiSelectedIndex.map(index => {
      return data[index.row];
   });

   return (
      <Layout style={styles.container} level='1'>
         {/* <Select
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
         </Select> */}

         {/* <ButtonGroup appearance='filled' style={styles.selectGroup}>
            <Button appearance='filled'>L</Button>
            <Button appearance='ghost'>M</Button>
            <Button appearance='ghost'>R</Button>
         </ButtonGroup> */}

         <Layout style={styles.togglesContainer}>
            <Layout style={styles.togglesLayout}>
               <Layout style={styles.togglesColumn}>
                  <Radio
                     style={styles.radio}
                     checked={composerRadioChecked}
                     onChange={nextChecked => setComposerRadioChecked(nextChecked)}>
                     Portrait Photography
                  </Radio>
                  <Radio
                     style={styles.radio}
                     checked={composerRadioChecked}
                     onChange={nextChecked => setComposerRadioChecked(nextChecked)}>
                     Street Photography
                  </Radio>
                  <Radio
                     style={styles.radio}
                     checked={stringsRadioChecked}
                     onChange={nextChecked => setStringsRadioChecked(nextChecked)}>
                     Concert Photography
                  </Radio>
                  <Radio
                     style={styles.radio}
                     checked={percussionRadioChecked}
                     onChange={nextChecked => setPercussionRadioChecked(nextChecked)}>
                     Web Development
                  </Radio>
                  <Radio
                     style={styles.radio}
                     checked={recordingEngineerRadioChecked}
                     onChange={nextChecked => setRecordingEngineerRadioChecked(nextChecked)}>
                     Drawing
                  </Radio>
                  <Radio
                     style={styles.radio}
                     checked={masteringEngineerRadioChecked}
                     onChange={nextChecked => setMasteringEngineerRadioChecked(nextChecked)}>
                     Painting
                  </Radio>
                  <Radio
                     style={styles.radio}
                     checked={masteringEngineerRadioChecked}
                     onChange={nextChecked => setMasteringEngineerRadioChecked(nextChecked)}>
                     Street Artist
                  </Radio>
                  <Toggle
                     style={styles.toggle}
                     checked={openToCollabsToggledOn}
                     onChange={nextToggled => setOpenToCollabsToggledOn(nextToggled)}>
                     Pubilc DMs
                  </Toggle>
               </Layout>
               <Layout style={styles.togglesColumn}>
                  <Radio
                     style={styles.radio}
                     checked={songwriterRadioChecked}
                     onChange={nextChecked => setSongwriterRadioChecked(nextChecked)}>
                     Videographer
                  </Radio>
                  <Radio
                     style={styles.radio}
                     checked={rapperRadioChecked}
                     onChange={nextChecked => setRapperRadioChecked(nextChecked)}>
                     Drone Videography
                  </Radio>
                  <Radio
                     style={styles.radio}
                     checked={photographerRadioChecked}
                     onChange={nextChecked => setPhotographerRadioChecked(nextChecked)}>
                     2D or 3D Graphics
                  </Radio>
                  <Radio
                     style={styles.radio}
                     checked={woodwindRadioChecked}
                     onChange={nextChecked => setWoodwindRadioChecked(nextChecked)}>
                     Animation
                  </Radio>
                  {/* <Radio
                     style={styles.radio}
                     checked={bandRadioChecked}
                     onChange={nextChecked => setBandRadioChecked(nextChecked)}>
                     Video Producer
                  </Radio>
                  <Radio
                     style={styles.radio}
                     checked={DJRadioChecked}
                     onChange={nextChecked => setDJRadioChecked(nextChecked)}>
                     Video Director
                  </Radio> */}
                  <Radio
                     style={styles.radio}
                     checked={mixingEngineerRadioChecked}
                     onChange={nextChecked => setMixingEngineerRadioChecked(nextChecked)}>
                     Cinematographer
                  </Radio>
                  {/* <Radio
                     style={styles.radio}
                     checked={recordingEngineerRadioChecked}
                     onChange={nextChecked => setRecordingEngineerRadioChecked(nextChecked)}>
                     Set Designer
                  </Radio>
                  <Radio
                     style={styles.radio}
                     checked={masteringEngineerRadioChecked}
                     onChange={nextChecked => setMasteringEngineerRadioChecked(nextChecked)}>
                     Lighting Director
                  </Radio> */}
                  <Radio
                     style={styles.radio}
                     checked={recordingEngineerRadioChecked}
                     onChange={nextChecked => setRecordingEngineerRadioChecked(nextChecked)}>
                     Drawing
                  </Radio>
                  <Radio
                     style={styles.radio}
                     checked={masteringEngineerRadioChecked}
                     onChange={nextChecked => setMasteringEngineerRadioChecked(nextChecked)}>
                     Painting
                  </Radio>
                  <Toggle
                     style={styles.toggle}
                     checked={certifiedOnlyToggledOn}
                     onChange={nextToggled => setCertifiedOnlyToggledOn(nextToggled)}>
                     SC Certified
                  </Toggle>
               </Layout>
            </Layout>
         </Layout>
         <Layout style={styles.bottomButtons}>
            <Button appearance='outline' style={styles.applyButton}> Reset </Button>
            <Button status='success' style={styles.applyButton}> Apply </Button>
         </Layout>
      </Layout>
   )
}

export default VisualsFilter;

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
      // marginTop: 10, // button position, below radios
      // paddingVertical: 15, // button size
      flexGrow: 1
   },
   bottomButtons: {
      // marginHorizontal: 15,
      flexDirection: 'row',
      justifyContent: 'space-between',
      // alignItems: 'center'
   }
});