import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import { Text, Card, Toggle, Tab, TabBar, Button, ButtonGroup, Radio, RadioGroup, Icon, IndexPath, Layout, Select, SelectGroup, SelectItem } from '@ui-kitten/components'

const data = [
   'Newcomer',
   'Intermediate',
   'Expert',
];

const VisualsFilter = (props) => {

   // Radios
   const [portraitPhotographyRadioChecked, setPortraitPhotographyRadioChecked] = React.useState(true);
   const [streetPhotographyRadioChecked, setStreetPhotographyRadioChecked] = React.useState(true);
   const [concertPhotographyRadioChecked, setConcertPhotographyRadioChecked] = React.useState(true);
   const [abstractPhotographyRadioChecked, setAbstractPhotographyRadioChecked] = React.useState(true);
   const [dancingRadioChecked, setDancingRadioChecked] = React.useState(true);
   const [streetArtistRadioChecked, setStreetArtistRadioChecked] = React.useState(true);
   const [drawingRadioChecked, setDrawingRadioChecked] = React.useState(true);
   const [paintingRadioChecked, setPaintingRadioChecked] = React.useState(true);

   const [videographyRadioChecked, setVideographyRadioChecked] = React.useState(true);
   const [droneVideographyRadioChecked, setDroneVideographyRadioChecked] = React.useState(true);
   const [twoDorThreeDGraphicsRadioChecked, setTwoDorThreeDGraphicsRadioChecked] = React.useState(true);
   const [animationRadioChecked, setAnimationRadioChecked] = React.useState(true);
   const [cinematographyRadioChecked, setCinematographyRadioChecked] = React.useState(true);
   const [webDevelopmentRadioChecked, setWebDevelopmentRadioChecked] = React.useState(true);
   const [mobileDevelopmentRadioChecked, setMobileDevelopmentRadioChecked] = React.useState(true);
   const [artificialIntelligenceRadioChecked, setArtificialIntelligenceRadioChecked] = React.useState(true);
   // Toggles
   const [openToCollabsToggledOn, setOpenToCollabsToggledOn] = React.useState(false);
   const [certifiedOnlyToggledOn, setCertifiedOnlyToggledOn] = React.useState(false);

   // Dropdown Selections
   const [multiSelectedIndex, setMultiSelectedIndex] = React.useState([
      new IndexPath(0, 0),
      new IndexPath(1, 0),
      new IndexPath(2, 0),
   ]);
   // Dropdown Display Values (gets text values for indices determined by multiselectedIndex)
   const multiSelectDisplayValues = multiSelectedIndex.map(index => {
      return data[index.row];
   });
   return (
      <Layout style={styles.container} level='1'>
         <Select
            style={styles.selectDropdown}
            multiSelect={true}
            size='large'
            placeholder='Select Expertise Level(s)'
            selectedIndex={multiSelectedIndex}
            value={multiSelectDisplayValues.join(', ')}
            onSelect={(index) => setMultiSelectedIndex(index)}>
            <SelectGroup title='All Expertise Levels'>
               {data.map((title, i) => (
                  <SelectItem key={i} title={title} />
               ))}
            </SelectGroup>
         </Select>

         <Layout style={styles.togglesContainer}>
            <Layout style={styles.togglesLayout}>
               <Layout style={styles.togglesColumn}>
                  <Radio
                     style={styles.radio}
                     checked={portraitPhotographyRadioChecked}
                     onChange={nextChecked => setPortraitPhotographyRadioChecked(nextChecked)}>
                     Portrait Photography
                  </Radio>
                  <Radio
                     style={styles.radio}
                     checked={streetPhotographyRadioChecked}
                     onChange={nextChecked => setStreetPhotographyRadioChecked(nextChecked)}>
                     Street Photography
                  </Radio>
                  <Radio
                     style={styles.radio}
                     checked={concertPhotographyRadioChecked}
                     onChange={nextChecked => setConcertPhotographyRadioChecked(nextChecked)}>
                     Concert Photography
                  </Radio>
                  <Radio
                     style={styles.radio}
                     checked={abstractPhotographyRadioChecked}
                     onChange={nextChecked => setAbstractPhotographyRadioChecked(nextChecked)}>
                     Abstract Photography
                  </Radio>
                  <Radio
                     style={styles.radio}
                     checked={dancingRadioChecked}
                     onChange={nextChecked => setDancingRadioChecked(nextChecked)}>
                     Dancing
                  </Radio>
                  <Radio
                     style={styles.radio}
                     checked={streetArtistRadioChecked}
                     onChange={nextChecked => setStreetArtistRadioChecked(nextChecked)}>
                     Street Artist
                  </Radio>
                  <Radio
                     style={styles.radio}
                     checked={drawingRadioChecked}
                     onChange={nextChecked => setDrawingRadioChecked(nextChecked)}>
                     Drawing
                  </Radio>
                  <Radio
                     style={styles.radio}
                     checked={paintingRadioChecked}
                     onChange={nextChecked => setPaintingRadioChecked(nextChecked)}>
                     Painting
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
                     checked={videographyRadioChecked}
                     onChange={nextChecked => setVideographyRadioChecked(nextChecked)}>
                     Videography
                  </Radio>
                  <Radio
                     style={styles.radio}
                     checked={droneVideographyRadioChecked}
                     onChange={nextChecked => setDroneVideographyRadioChecked(nextChecked)}>
                     Drone Videography
                  </Radio>
                  <Radio
                     style={styles.radio}
                     checked={twoDorThreeDGraphicsRadioChecked}
                     onChange={nextChecked => setTwoDorThreeDGraphicsRadioChecked(nextChecked)}>
                     2D or 3D Graphics
                  </Radio>
                  <Radio
                     style={styles.radio}
                     checked={animationRadioChecked}
                     onChange={nextChecked => setAnimationRadioChecked(nextChecked)}>
                     Animation
                  </Radio>
                  <Radio
                     style={styles.radio}
                     checked={cinematographyRadioChecked}
                     onChange={nextChecked => setCinematographyRadioChecked(nextChecked)}>
                     Cinematography
                  </Radio>
                  <Radio
                     style={styles.radio}
                     checked={webDevelopmentRadioChecked}
                     onChange={nextChecked => setWebDevelopmentRadioChecked(nextChecked)}>
                     Web Development
                  </Radio>
                  <Radio
                     style={styles.radio}
                     checked={mobileDevelopmentRadioChecked}
                     onChange={nextChecked => setMobileDevelopmentRadioChecked(nextChecked)}>
                     Mobile Development
                  </Radio>
                  <Radio
                     style={styles.radio}
                     checked={artificialIntelligenceRadioChecked}
                     onChange={nextChecked => setArtificialIntelligenceRadioChecked(nextChecked)}>
                     Artificial Intelligence
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
   selectDropdown: {
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