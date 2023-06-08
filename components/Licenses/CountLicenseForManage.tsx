import { Card, Collapse, Grid, Text } from '@nextui-org/react';
import React from 'react';
import { Flex } from '../styles/flex';

export const CountLicenseForManage = () => (
    <Grid.Container gap={1} justify="center">
        <Grid xs={4} css={{display: 'block !important'}}>
            <Card css={{mb: 15, backgroundColor: 'rgb(106, 179, 230)'}}>
                <Card.Body css={{p:0}}>
                    <Collapse
                        bordered
                        title="KTSD nước mặt : 123"
                        subtitle=""
                        className='license__box'
                        >
                        <Flex>
                            <Grid xs={5}>
                                <Flex direction="column">
                                    <Text h6 className='box__text'> Đã cấp: 123 </Text>
                                    <img className='box__img' src="" alt="" />
                                </Flex>
                            </Grid>
                            <Grid xs={7}>
                                <Flex direction="column">
                                    <Text h6 className='box__text'> Còn hiệu lực: 111 </Text>
                                    <Text h6 className='box__text'> BTNMT: 69 </Text>
                                    <Text h6 className='box__text'> UBND: 42 </Text>
                                </Flex>
                            </Grid>
                        </Flex>
                    </Collapse>
                </Card.Body>
            </Card>
        </Grid>
        <Grid xs={4} css={{display: 'block !important'}}>
            <Card css={{mb: 15, backgroundColor: 'rgb(0, 61, 126)'}}>
                <Card.Body css={{p:0}}>
                    <Collapse
                        bordered
                        title="KTSD nước dưới đất : 123"
                        subtitle=""
                        className='license__box'
                        >
                        <Flex>
                            <Grid xs={5}>
                                <Flex direction="column">
                                    <Text h6 className='box__text'> Đã cấp: 123 </Text>
                                    <img className='box__img' src="" alt="" />
                                </Flex>
                            </Grid>
                            <Grid xs={7}>
                                <Flex direction="column">
                                    <Text h6 className='box__text'> Còn hiệu lực: 111 </Text>
                                    <Text h6 className='box__text'> BTNMT: 69 </Text>
                                    <Text h6 className='box__text'> UBND: 42 </Text>
                                </Flex>
                            </Grid>
                        </Flex>
                    </Collapse>
                </Card.Body>
            </Card>
        </Grid>
        <Grid xs={4} css={{display: 'block !important'}}>
            <Card css={{mb: 15, backgroundColor: 'rgb(125, 95, 58)'}}>
                <Card.Body css={{p:0}}>
                    <Collapse
                        bordered
                        title="Thăm dò nước dưới đất : 123"
                        subtitle=""
                        className='license__box'
                        >
                        <Flex>
                            <Grid xs={5}>
                                <Flex direction="column">
                                    <Text h6 className='box__text'> Đã cấp: 123 </Text>
                                    <img className='box__img' src="" alt="" />
                                </Flex>
                            </Grid>
                            <Grid xs={7}>
                                <Flex direction="column">
                                    <Text h6 className='box__text'> Còn hiệu lực: 111 </Text>
                                    <Text h6 className='box__text'> BTNMT: 69 </Text>
                                    <Text h6 className='box__text'> UBND: 42 </Text>
                                </Flex>
                            </Grid>
                        </Flex>
                    </Collapse>
                </Card.Body>
            </Card>
        </Grid>
        <Grid xs={4} css={{display: 'block !important'}}>
            <Card css={{mb: 15, backgroundColor: 'rgb(0, 178, 151)'}}>
                <Card.Body css={{p:0}}>
                    <Collapse
                        bordered
                        title="Hành nghề khoan : 123"
                        subtitle=""
                        className='license__box'
                        >
                        <Flex>
                            <Grid xs={5}>
                                <Flex direction="column">
                                    <Text h6 className='box__text'> Đã cấp: 123 </Text>
                                    <img className='box__img' src="" alt="" />
                                </Flex>
                            </Grid>
                            <Grid xs={7}>
                                <Flex direction="column">
                                    <Text h6 className='box__text'> Còn hiệu lực: 111 </Text>
                                    <Text h6 className='box__text'> BTNMT: 69 </Text>
                                    <Text h6 className='box__text'> UBND: 42 </Text>
                                </Flex>
                            </Grid>
                        </Flex>
                    </Collapse>
                </Card.Body>
            </Card>
        </Grid>
        <Grid xs={4} css={{display: 'block !important'}}>
            <Card css={{mb: 15, backgroundColor: 'rgb(244, 153, 23)'}}>
                <Card.Body css={{p:0}}>
                    <Collapse
                        bordered
                        title="Xả thải : 123"
                        subtitle=""
                        className='license__box'
                        >
                        <Flex>
                            <Grid xs={5}>
                                <Flex direction="column">
                                    <Text h6 className='box__text'> Đã cấp: 123 </Text>
                                    <img className='box__img' src="" alt="" />
                                </Flex>
                            </Grid>
                            <Grid xs={7}>
                                <Flex direction="column">
                                    <Text h6 className='box__text'> Còn hiệu lực: 111 </Text>
                                    <Text h6 className='box__text'> BTNMT: 69 </Text>
                                    <Text h6 className='box__text'> UBND: 42 </Text>
                                </Flex>
                            </Grid>
                        </Flex>
                    </Collapse>
                </Card.Body>
            </Card>
        </Grid>
    </Grid.Container>
);
