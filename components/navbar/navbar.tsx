import {Link, Navbar} from '@nextui-org/react';
import React from 'react';
import {Box} from '../styles/box';
import {BurguerButton} from './burguer-button';
import {UserDropdown} from './user-dropdown';

interface Props {
   children: React.ReactNode;
}

export const NavbarWrapper = ({children}: Props) => {
   const collapseItems = [
      'Profile',
      'Log Out',
   ];
   return (
      <Box
         css={{
            
            position: 'relative',
            display: 'flex',
            flexDirection: 'column',
            flex: '1 1 auto',
            overflowY: 'auto',
            overflowX: 'hidden',
         }}
      >
         <Navbar
            isBordered
            css={{
               $$navbarBlurBackgroundColor: "rgb(1, 57, 89)",
               'borderBottom': '1px solid $border',
               'justifyContent': 'space-between',
               'width': '100%',
               '@md': {
                  justifyContent: 'space-between',
               },

               '& .nextui-navbar-container': {
                  'border': 'none',
                  'maxWidth': '100%',

                  'gap': '$6',
                  '@md': {
                     justifyContent: 'space-between',
                  },
               },
            }}
         >
            <Navbar.Content showIn="md">
               <BurguerButton />
            </Navbar.Content>
            
            <Navbar.Content
               hideIn={'md'}
               css={{
                  width: '100%',
                  color: '#fff'
               }}
            >
               SITE NAME
            </Navbar.Content>
            <Navbar.Content>
               <UserDropdown />
            </Navbar.Content>

            <Navbar.Collapse>
               {collapseItems.map((item, index) => (
                  <Navbar.CollapseItem
                     key={item}
                     activeColor="secondary"
                     css={{
                        color:
                           index === collapseItems.length - 1 ? '$error' : '',
                     }}
                     isActive={index === 2}
                  >
                     <Link
                        color="inherit"
                        css={{
                           minWidth: '100%',
                        }}
                        href="#"
                     >
                        {item}
                     </Link>
                  </Navbar.CollapseItem>
               ))}
            </Navbar.Collapse>
         </Navbar>
         {children}
      </Box>
   );
};
