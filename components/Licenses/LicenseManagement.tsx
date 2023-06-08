import React from 'react';
import {Text, Card} from '@nextui-org/react';
import {Box} from '../styles/box';
import LicenseChart from './LicenseChart';
import { CountLicenseForManage } from './CountLicenseForManage';

const data= [
    {
      name: 'Khai thác và sử dụng nước mặt',
      data: [2, 3, 4, 7, 3],
    },
    {
      name: 'Khai thác sử dụng nước dưới đất',
      data: [4, 4, 5, 2, 6],
    },
    {
      name: 'Thăm dò nước dưới đất',
      data: [5, 6, 7, 4, 9],
    },
    {
      name: 'Hành nghề khoan',
      data: [5, 6, 3, 2, 1],
    },
    {
      name: 'Xả thải vào nguồn nước',
      data: [4, 9, 4, 3, 0],
    },
  ]
  const year = [2019, 2020, 2021, 2022, 2023]

  const color = [
    'rgb(106, 179, 230)',
    'rgb(0, 61, 126)',
    'rgb(125, 95, 58)',
    'rgb(0, 178, 151)',
    'rgb(244, 153, 23)',
  ];

export const LicenseManagement = () => (
   <Box css={{overflow: 'hidden', height: '100%'}}>
        <Card css={{mb: 15}}>
            <Card.Body>
                <CountLicenseForManage />
            </Card.Body>
        </Card>
        {/* Chart */}
        <Card css={{mb: 15}}>
            <Card.Body>
                <Text
                    h5
                    css={{
                        'textAlign': 'center',
                        '@lg': {
                        textAlign: 'center',
                        },
                    }}
                >
                    Số liệu thống kê giấy phép đã được cấp phép theo năm
                </Text>
                <Box
                    css={{
                        width: '100%',
                        backgroundColor: '$accents0',
                        boxShadow: '$lg',
                        borderRadius: '$2xl',
                        px: '$10',
                        py: '$10',
                    }}
                >
                    <LicenseChart data={data} year={year} color={color} />
                </Box>
            </Card.Body>
        </Card>
   </Box>
);
