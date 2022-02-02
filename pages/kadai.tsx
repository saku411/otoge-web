import Cards from '../components/Cards'
import React from 'react'
import Grid from '@mui/material/Grid'
import { Box } from '@mui/system'

const Kadai = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={1}>
        <Grid container item spacing={3}>
          <Cards />
        </Grid>
        <Grid container item spacing={3}>
          <Cards />
        </Grid>
        <Grid container item spacing={3}>
          <Cards />
        </Grid>
      </Grid>
    </Box>
  )
}
export default Kadai
