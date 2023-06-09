import { Card, Grid, Text } from '@nextui-org/react';
import React from 'react';
import { Flex } from '../styles/flex';
import Image from 'next/image';

export const CountLicense = () => (
    <Card>
        <Card.Body>
            <Flex direction={'column'}>
                <Flex align={'center'}>
                    <Grid xs={8} css={{display:'block'}}>
                        <Flex direction={'column'}>
                            <Text h6 className='w-100'>Tổng số giấy phép</Text>
                            <Text h5 color='red' className='w-100'>123</Text>
                        </Flex>
                    </Grid>
                    <Grid xs={4}>
                        <Image
                            width={65}
                            height={65}  
                            src="/vercel.svg"
                            alt="Default Image"
                            objectFit="cover"
                        />
                    </Grid>
                </Flex>
                <Flex align={'center'}>
                    <Grid xs={8} css={{display:'block'}}>
                        <Flex direction={'column'}>
                            <Text h6 className='w-100'>Giấy phép sắp hết hiệu lực</Text>
                            <Text h5 color='red' className='w-100'>0/123</Text>
                        </Flex>
                    </Grid>
                    <Grid xs={4}>
                        <Image
                            width={65}
                            height={65}  
                            src="/vercel.svg"
                            alt="Default Image"
                            objectFit="cover"
                        />
                    </Grid>
                </Flex>
                <Flex align={'center'}>
                    <Grid xs={8} css={{display:'block'}}>
                        <Flex direction={'column'}>
                            <Text h6 className='w-100'>Giấy phép hết hiệu lực</Text>
                            <Text h5 color='red' className='w-100'>0/123</Text>
                        </Flex>
                    </Grid>
                    <Grid xs={4}>
                        <Image
                            width={65}
                            height={65}  
                            src="/vercel.svg"
                            alt="Default Image"
                            objectFit="cover"
                        />
                    </Grid>
                </Flex>
                <Flex align={'center'}>
                    <Grid xs={8} css={{display:'block'}}>
                        <Flex direction={'column'}>
                            <Text h6 className='w-100'>Đã bị thu hồi</Text>
                            <Text h5 color='red' className='w-100'>0/123</Text>
                        </Flex>
                    </Grid>
                    <Grid xs={4}>
                        <Image
                            width={65}
                            height={65}  
                            src="/vercel.svg"
                            alt="Default Image"
                            objectFit="cover"
                        />
                    </Grid>
                </Flex>
            </Flex>
        </Card.Body>
    </Card>
);
