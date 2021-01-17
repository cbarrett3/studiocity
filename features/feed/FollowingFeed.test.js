import React from 'react';
import renderer from 'react-test-renderer';
/* eva & ui kitten */
import * as eva from '@eva-design/eva';
import { ApplicationProvider, IconRegistry } from '@ui-kitten/components';
/* custom theme */
import { ThemeContext } from '../../theme-context';
/* icon packs */
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import { FeatherIconsPack } from '../../assets/icons/FeatherIconsPack';
import { MaterialIconsPack } from '../../assets/icons/MaterialIconsPack';
import { AssetIconsPack } from '../../assets/icons/AssetIconsPack';
/* component being tested */
import FollowingFeedScreen from './FollowingFeed';

describe('<FollowingFeedScreen />', () => {

   /* dummy theme for setup */
   const toggleTheme = () => {
   };
   const theme = 'light';

   /* renders a View */ 
   it('is a View', () => {
      const tree = renderer
         .create(
            <>
               <IconRegistry icons={[EvaIconsPack, FeatherIconsPack, MaterialIconsPack, AssetIconsPack]} />
               <ThemeContext.Provider value={{ theme, toggleTheme }}>
                  <ApplicationProvider {...eva} theme={eva[theme]} >

                     {/* component we're testing */}
                     <FollowingFeedScreen />,

                  </ApplicationProvider>
               </ThemeContext.Provider>
            </>
         )
         .toJSON();
      expect(tree.type).toBe('View')
   });

   /* renders the correct amount of children */ 
   it('has 2 children I guess, lol', () => {
      const tree = renderer
         .create(
            <>
               <IconRegistry icons={[EvaIconsPack, FeatherIconsPack, MaterialIconsPack, AssetIconsPack]} />
               <ThemeContext.Provider value={{ theme, toggleTheme }}>
                  <ApplicationProvider {...eva} theme={eva[theme]} >

                     {/* component we're testing */}
                     <FollowingFeedScreen />,

                  </ApplicationProvider>
               </ThemeContext.Provider>
            </>
         )
         .toJSON();
      expect(tree.children.length).toBe(2);
   });
});