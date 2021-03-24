import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import { Text, Card, Toggle, Tab, TabBar, Button, ButtonGroup, Radio, RadioGroup, Icon, IndexPath, Layout, Select, SelectGroup, SelectItem } from '@ui-kitten/components'

const data = [
   'Less than 1 Year',
   'More than 1 Year',
   'More than 3 Years',
];

const OtherFilter = (props) => {

   //Radios
   const [socialMediaRadioChecked, setSocialMediaRadioChecked] = React.useState(true);
   const [influencingRadioChecked, setInfluencingRadioChecked] = React.useState(true);
   const [marketingRadioChecked, setMarketingRadioChecked] = React.useState(true);
   const [artistManagementRadioChecked, setArtistManagementRadioChecked] = React.useState(true);
   const [recordLabelRadioChecked, setRecordLabelRadioChecked] = React.useState(true);
   const [venueOwnerRadioChecked, setVenueOwnerRadioChecked] = React.useState(true);
   const [studioOwnerRadioChecked, setStudioOwnerRadioChecked] = React.useState(true);
   const [bookingAgentRadioChecked, setBookingAgentRadioChecked] = React.useState(true);
   const [eventPromoterRadioChecked, setEventPromoterRadioChecked] = React.useState(true);
   const [musicReviewerRadioChecked, setMusicReviewerRadioChecked] = React.useState(true);
   const [interviewerRadioChecked, setInterviewerRadioChecked] = React.useState(true);
   const [podcastHostRadioChecked, setPodcastHostRadioChecked] = React.useState(true);

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
            placeholder='Years of Experience'
            selectedIndex={multiSelectedIndex}
            value={multiSelectDisplayValues.join(', ')}
            onSelect={(index) => setMultiSelectedIndex(index)}>
            <SelectGroup title='Any'>
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
                     checked={artistManagementRadioChecked}
                     onChange={nextChecked => setArtistManagementRadioChecked(nextChecked)}>
                     Artist Management
                  </Radio>
                  <Radio
                     style={styles.radio}
                     checked={recordLabelRadioChecked}
                     onChange={nextChecked => setRecordLabelRadioChecked(nextChecked)}>
                     Record Label
                  </Radio>
                  <Radio
                     style={styles.radio}
                     checked={venueOwnerRadioChecked}
                     onChange={nextChecked => setVenueOwnerRadioChecked(nextChecked)}>
                     Venue Owner
                  </Radio>
                  <Radio
                     style={styles.radio}
                     checked={studioOwnerRadioChecked}
                     onChange={nextChecked => setStudioOwnerRadioChecked(nextChecked)}>
                     Studio Owner
                  </Radio>
                  <Radio
                     style={styles.radio}
                     checked={bookingAgentRadioChecked}
                     onChange={nextChecked => setBookingAgentRadioChecked(nextChecked)}>
                     Booking Agent
                  </Radio>
                  <Radio
                     style={styles.radio}
                     checked={eventPromoterRadioChecked}
                     onChange={nextChecked => setEventPromoterRadioChecked(nextChecked)}>
                     Event Promoter
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
                     checked={socialMediaRadioChecked}
                     onChange={nextChecked => setSocialMediaRadioChecked(nextChecked)}>
                     Social Media
                  </Radio>
                  <Radio
                     style={styles.radio}
                     checked={influencingRadioChecked}
                     onChange={nextChecked => setInfluencingRadioChecked(nextChecked)}>
                     Influencing
                  </Radio>
                  <Radio
                     style={styles.radio}
                     checked={marketingRadioChecked}
                     onChange={nextChecked => setMarketingRadioChecked(nextChecked)}>
                     Marketing
                  </Radio>
                  <Radio
                     style={styles.radio}
                     checked={musicReviewerRadioChecked}
                     onChange={nextChecked => setMusicReviewerRadioChecked(nextChecked)}>
                     Music Reviewer
                  </Radio>
                  <Radio
                     style={styles.radio}
                     checked={interviewerRadioChecked}
                     onChange={nextChecked => setInterviewerRadioChecked(nextChecked)}>
                     Interviewer
                  </Radio>
                  <Radio
                     style={styles.radio}
                     checked={podcastHostRadioChecked}
                     onChange={nextChecked => setPodcastHostRadioChecked(nextChecked)}>
                     Podcast Host
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
         {/* <Layout style={styles.bottomButtons}>
            <Button appearance='outline' style={styles.applyButton}> Reset </Button>
            <Button status='success' style={styles.applyButton}> Apply </Button>
         </Layout> */}
                  <Layout style={styles.bottomButtons}>
            {/* <Button appearance='outline' style={styles.applyButton}> Reset </Button> */}
            <Button appearance='outline' style={styles.ResetAndUnselectButtons}> Reset All </Button>
            <Button status='info' appearance='outline' style={styles.ResetAndUnselectButtons}> Unselect All </Button>
            {/* <Button status='success' style={styles.applyButton}> Apply </Button> */}
         </Layout>
         <Layout style={styles.bottomButtons}>
            <Button status='success' style={styles.applyButton}> Apply </Button>
         </Layout>
      </Layout>
   )
}

export default OtherFilter;

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
   // applyButton: {
   //    marginHorizontal: 15,
   //    // marginTop: 10, // button position, below radios
   //    // paddingVertical: 15, // button size
   //    flexGrow: 1
   // },
   // bottomButtons: {
   //    // marginHorizontal: 15,
   //    flexDirection: 'row',
   //    justifyContent: 'space-between',
   //    // alignItems: 'center'
   // },
   ResetAndUnselectButtons: {
      marginHorizontal: 3,
      // width: '50%',
      // marginTop: 10, // button position, below radios
      // paddingVertical: 15, // button size
      flexGrow: 1,
      flexBasis: '49%'
      // borderRadius: 0
   },
   applyButton: {
      // marginHorizontal: 5,
      // width: '50%',
      marginTop: 20, // button position, below radios
      paddingVertical: 15, // button size
      flexGrow: 1
      // width: '100%'
   },
   bottomButtons: {
      marginHorizontal: 15,
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-evenly',
      // paddingHorizontal: 10,
      // alignItems: 'center'
   },
   buttonGroupHeader: {
      paddingHorizontal: 15,
      paddingTop: 10,
      justifyContent: 'center'
   },
   buttonGroup: {
      paddingHorizontal: 15,
      paddingTop: 10,
      paddingBottom: 20,
      flexDirection: 'row',
      justifyContent: 'center'
   },
});