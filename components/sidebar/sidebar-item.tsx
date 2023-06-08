import {Text, Link} from '@nextui-org/react';
import NextLink from 'next/link';
import React from 'react';
import {useSidebarContext} from '../layout/layout-context';
import {Flex} from '../styles/flex';

interface Props {
   title: string;
   icon: React.ReactNode;
   isActive?: boolean;
   href?: string;
}

export const SidebarItem = ({icon, title, isActive, href = ''}: Props) => {
   const {collapsed, setCollapsed} = useSidebarContext();

   const handleClick = () => {
      if (window.innerWidth < 768) {
         setCollapsed();
      }
   };
   return (
      <NextLink href={href}>
         <Link
            css={{
               color: '#fff',
               minWidth: '100%',
            }}
         >
            <Flex
               onClick={handleClick}
               css={{
                  'gap': '$6',
                  'width': '100%',
                  'minHeight': '44px',
                  'height': '100%',
                  'alignItems': 'center',
                  'px': '$7',
                  'borderRadius': '0',
                  'cursor': 'pointer',
                  'transition': 'all 0.15s ease',
                  'color': '#fff',
                  '&:active': {
                     transform: 'scale(0.98)',
                  },
                  ...(isActive
                     ? {
                           'boxShadow': '0px 4px 8px -4px rgba(58, 53, 65, 0.42);',
                           'background': 'linear-gradient(98deg, #00a2ff, #003858 94%);',
                          '& svg path': {
                             fill: '#fff',
                          },
                       }
                     : {'&:hover': {
                        bg: 'linear-gradient(98deg, #00a2ff, #003858 94%);',
                     }}),
               }}
               align={'center'}
            >
               {icon} 
               <Text
                  span
                  weight={'normal'}
                  size={'$base'}
                  css={{
                     alignItems: 'center',
                     color: '#fff',
                     fill: '#fff'
                  }}
               >
                  {title}
               </Text>
            </Flex>
         </Link>
      </NextLink>
   );
};
