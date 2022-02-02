import { Grid } from '@mui/material'
import React from 'react'
import KadaiCard from './KadaiCard'
const Cards = () => {
  return (
    <>
      <Grid item xs={4}>
        <KadaiCard />
      </Grid>
      <Grid item xs={4}>
        <KadaiCard />
      </Grid>
      <Grid item xs={4}>
        <KadaiCard />
      </Grid>
    </>
  )
}
export default Cards
