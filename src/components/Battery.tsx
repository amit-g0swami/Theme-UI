/** @jsxImportSource theme-ui */
import Head from 'next/head';
import React, { useEffect, useState } from 'react'
import { Select, Box, Container, Flex, Input, NavLink, Text, Image } from 'theme-ui';
import Bar from './Bar';
import Footer from './Footer';
import styled from '@emotion/styled'
import { ArrowDropDown } from '@emotion-icons/remix-line/ArrowDropDown'

const Index = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23];
const Slots = Index.map((hour) => {
    return `${hour < 10 ? "0" + hour : hour}`
});

function Battery() {
    const [modal, setModal] = useState(false)
    const [startTime, setStartTime] = useState<any>("06")
    const [endTime, setEndTime] = useState<any>("18")
    const [division, setDivision] = useState<any>("24");
    var today = new Date();
    var time = today.getHours();
    const hour = ((endTime - time) / (endTime - startTime)) * 100;
    let arr = new Array();
    for (var i = 1; i <= division; i++) {
        arr.push(i);
    }
    useEffect(() => {
        localStorage.setItem("Time", JSON.stringify({ startTime, endTime, division }));
    }, [hour, division])

    return (
        <>
            <Head>
                <title>Battery Status</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            {modal &&
                <Box sx={{ width: '100%', height: '100%', position: 'absolute', backgroundColor: "rgba(50, 37, 37, 0.6)", top: "0", bottom: "0", left: '0', right: '0' }}>
                    <Box sx={{
                        width: '30vw', height: '30vh', position: 'absolute', marginTop: "30vh", backgroundColor: '#E4E4E4', padding: '50px', marginLeft: "10vw", borderRadius: '8px',
                        '@media screen and (max-width: 720px)': {
                            width: '70vw !important', height: '23vh !important', marginTop: "10vh !important",
                            padding: '30px !important',
                            marginLeft: '15vw !important'
                        },
                    }}>
                        <Image src="https://img.icons8.com/ios/35/d21e1e/multiply.png" sx={{ position: 'absolute', cursor: 'pointer', right: '0px', top: '0px' }} alt="cross" onClick={() => setModal(!modal)} />
                        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                            <Box sx={{ display: 'flex', flexDirection: 'column', width: '50%' }}>
                                <Text color='black'>Start Time</Text>
                                <Select name="slot" className="weekday" value={startTime} onChange={(e) => setStartTime(e.target.value)}
                                    arrow={
                                        <Box>
                                            <ArrowDropDown
                                                sx={{
                                                    position: "absolute", height: '40px', width: '40px', justifyContent: 'space-between',
                                                    alignSelf: 'center',
                                                    ml: "-40px"
                                                }} />
                                        </Box>
                                    }
                                >
                                    {Slots.map((slot) =>
                                        <option value={slot} key={slot}>{slot}</option>
                                    )}
                                </Select>
                            </Box>
                            <Box sx={{ display: 'flex', flexDirection: 'column', width: '50%' }}>
                                <Text color='black'>End Time</Text>
                                <Select name="slot" className="weekday" value={endTime} onChange={(e) => setEndTime(e.target.value)}
                                    arrow={
                                        <Box>
                                            <ArrowDropDown
                                                sx={{
                                                    position: "absolute", height: '40px', width: '40px', justifyContent: 'space-between',
                                                    alignSelf: 'center',
                                                    ml: "-40px"
                                                }} />
                                        </Box>
                                    }
                                >
                                    {Slots.map((slot) =>
                                        <option value={slot} key={slot}>{slot}</option>
                                    )}
                                </Select>
                            </Box>
                        </Box>
                        <Input placeholder='insert time division' value={division} onChange={(e) => setDivision(e.target.value)} type="number" style={{ width: "100%", marginTop: 'auto' }} />
                    </Box>
                </Box>
            }
            <Box sx={{
                height: '114px', borderBottom: '2px solid #4F4F4F', width: "100%", alignItems: 'center',
                '@media screen and (max-width: 720px)': {
                    height: 'auto !important'
                },
            }}
            >
                <Flex sx={{
                    display: 'flex', justifyContent: 'space-between', padding: "36px 0px 26.5px 0px",
                    '@media screen and (max-width: 720px)': {
                        padding: "16px 0px 16px 0px !important"
                    },
                }}
                >
                    <Box sx={{ display: 'flex', alignItems: "center", justifyContent: 'center' }}>
                        <Box sx={{
                            padding: "0px", marginLeft: '67px', color: '#E0E0E0', cursor: 'pointer', font: 'Inter', fontWeight: "300", fontSize: '36px', lineHeight: '54px', letterSpacing: '0.2%',
                            '@media screen and (max-width: 720px)': {
                                fontSize: '26px !important',
                                marginLeft: '0px !important'
                            },
                        }}
                            onClick={() => setModal(!modal)}>{`${(startTime % 12) || "12"}:00`}</Box>
                        <Box style={{ marginLeft: '9px', fontWeight: '400', color: '#828282', opacity: '0.5' }}>{`${startTime >= 12 ? "PM" : "AM"}`}</Box>
                    </Box>
                    <Box sx={{
                        display: 'flex', alignItems: "center", justifyContent: 'center', marginRight: "87px",
                        '@media screen and (max-width: 720px)': {
                            marginRight: '0px !important'
                        },
                    }}>
                        <Box sx={{
                            color: "#E0E0E0", cursor: 'pointer', font: 'Inter', fontWeight: "300", fontSize: '36px', lineHeight: '54px', letterSpacing: '0.2%',
                            '@media screen and (max-width: 720px)': {
                                fontSize: '26px !important',
                            },
                        }}
                            onClick={() => setModal(!modal)}
                        >{`${(endTime % 12) || "12"}:00`}</Box>
                        <Box sx={{ marginLeft: '9px', fontWeight: '400', color: '#828282', opacity: '0.5' }}>{`${endTime >= 12 ? "PM" : "AM"}`}</Box>
                    </Box>
                </Flex>
            </Box>
            <Bar hour={hour} arr={arr} division={division} />
            <Footer />
        </>
    )
}

export default Battery