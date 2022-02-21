import { Box } from '@mui/material'
import type { NextPage } from 'next'

import ScoreReport from '../components/ScoreReport'

const Home: NextPage = () => {
  return (
    <>
      <main>
        <Box sx={{ mx: 'auto', width: 400 }}>
          <ScoreReport link={'https://otoge-connected.com'} />
        </Box>
      </main>
      <footer></footer>
    </>
  )
}

export default Home
