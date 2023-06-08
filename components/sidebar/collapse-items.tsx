import {Collapse, Text} from '@nextui-org/react';
import React, {useState} from 'react';
import {ChevronUpIcon} from '../icons/sidebar/chevron-up-icon';
import {Flex} from '../styles/flex';
import {SidebarItem} from './sidebar-item';
import {useRouter} from 'next/router';
import { Box } from '../styles/box';

interface Item {
   name: string;
   href: string;
}
interface Props {
   icon: React.ReactNode;
   title: string;
   items: Item[];
   isActive? : boolean;
}

export const CollapseItems = ({icon, items, isActive, title}: Props) => {
   const router = useRouter();

   return (
      <Collapse
         expanded={isActive}
         title={
            <Flex
               css={{
                  'gap': '$6',
                  'width': '12 0%',
                  'py': '$5',
                  'px': '$7',
                  'borderRadius': '0',
                  'transition': 'all 0.15s ease',
                  '&:active': {
                     transform: 'scale(0.98)',
                  },
                  '&:hover': {
                     bg: 'linear-gradient(98deg, #00a2ff, #003858 94%);',
                  }
               }}
               justify={'between'}
            >
               <Flex css={{gap: '$6'}}>
                  {icon}
                  <Text
                     span
                     weight={'normal'}
                     size={'$base'}
                     css={{
                        color: '#fff',
                     }}
                  >
                     {title}
                  </Text>
               </Flex>
            </Flex>
         }
         css={{
            'width': '100%',
            '& .nextui-collapse-view': {
               p: '0',
            },
            '& .nextui-collapse-content': {
               marginTop: '$1',
               padding: '0px',
            },
         }}
      >
         {items.map((item, index) => (
            <Flex
               key={index}
               direction={'column'}
            >
               <SidebarItem
               title={item.name}
               icon='◉'
               isActive={router.pathname === item.href}
               href={item.href}
               />
            </Flex>
         ))}
      </Collapse>
   );
};
