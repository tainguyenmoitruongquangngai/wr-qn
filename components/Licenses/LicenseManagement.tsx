import React from 'react';
import {Text, Link, Card, Grid, Collapse} from '@nextui-org/react';
import {Box} from '../styles/box';
import {Flex} from '../styles/flex';
import LicenseChart from './LicenseChart';
import { CountLicenseForManage } from './CountLicenseForManage';

const data = [
    {SWForChart: [3, 4, 5, 1, 6]},
    {EGWForChart: [3, 4, 5, 1, 6]},,
    {PGWForChart: [3, 4, 5, 1, 6]},,
    {DPWForChart: [3, 4, 5, 1, 6]},,
    {DWForChat: [3, 4, 5, 1, 6]},
]

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
                    <LicenseChart chartId="chartCountLicense" data={data} />
                </Box>
            </Card.Body>
        </Card>
   </Box>
);
