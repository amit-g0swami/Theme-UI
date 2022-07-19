import Head from 'next/head';
import React, { useEffect, useState } from 'react'
import { Box, Container, Input, Text } from 'theme-ui';
import Bar from './Bar';
import Percentage from './Percentage';
import Time from './Time';

const Index = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24];
const Slots = Index.map((hour) => {
    return `${hour < 10 ? "0" + hour : hour}`
});

function Battery() {
    const [startTime, setStartTime] = useState<any>("")
    const [endTime, setEndTime] = useState<any>("")
    // const [hour, setHour] = useState<any>(12);
    const hour = (startTime && endTime != null) ? (endTime - startTime) : "";
    var today = new Date();
    var time = today.getHours();
    var min = today.getMinutes();
    let arr = new Array();
    for (var i = 1; i < hour; i++) {
        arr.push(i);
    }

    useEffect(() => {
        localStorage.setItem("Time", JSON.stringify({ startTime, endTime }));
    }, [hour])


    return (
        <Container style={{ width: '70vw' }}>
            <Head>
                <title>Battery Status</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Container style={{ display: 'flex' }}>
                <Container>
                    <Text>Start Time</Text>
                    <select name="slot" className="weekday" value={startTime} onChange={(e) => setStartTime(e.target.value)}>
                        <option disabled={true} selected={true} value={""}>Choose Your Start Time</option>
                        {Slots.map((slot) =>
                            <option value={slot} key={slot}>{slot}</option>
                        )}
                    </select>
                </Container>
                <Container>
                    <Text>End Time</Text>
                    <select name="slot" className="weekday" value={endTime} onChange={(e) => setEndTime(e.target.value)}>
                        <option disabled={true} selected={true} value={""}>Choose Your End Time</option>
                        {Slots.map((slot) =>
                            <option value={slot} key={slot}>{slot}</option>
                        )}
                    </select>
                </Container>
            </Container>
            {/* <Input placeholder='insert time format 12 or 24' value={hour} onChange={(e) => setHour(e.target.value)} type="number" style={{ width: "100%" }} /> */}
            <Container style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <Time hour={hour} time={time} min={min} />
                <Percentage time={time} hour={hour} />
            </Container>
            <Bar hour={hour} time={time} arr={arr} />
        </Container>
    )
}

export default Battery