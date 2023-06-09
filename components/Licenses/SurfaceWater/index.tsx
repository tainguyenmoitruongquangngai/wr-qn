import React from 'react';
import {Text, Card, Grid, Image} from '@nextui-org/react';
import { Box } from '../../styles/box';
import { CountLicense } from '../CountLicense';
import { TableWrapper } from './table/table';

export const SFWater = () => (
   <Box css={{overflow: 'hidden', height: '100%'}}>
        <Grid.Container gap={1}>
            <Grid xs={12} md={3}>
                <CountLicense />
            </Grid>
            <Grid xs={12} md={9}>
                <Card>
                    <Card.Body>
                        MAP
                    </Card.Body>
                </Card>
            </Grid>
            <Grid xs={12}>
                <Card>
                    <Card.Body>
                        <TableWrapper />
                    </Card.Body>
                </Card>
            </Grid>
        </Grid.Container>
   </Box>
);
