import React from 'react'
import CountdownTimer from './CountdownTimer'

const MyTimer = () => {

  const DAYS_IN_MS = 1 * 24 * 60 * 60 * 1000;
  const NOW_IN_MS = new Date().getTime();

  const dateTimeAfter = NOW_IN_MS + DAYS_IN_MS;

  return (
    <>
    <CountdownTimer targetDate={dateTimeAfter} />
    </>
  )


}

export default MyTimer