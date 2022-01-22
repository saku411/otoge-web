import type { NextPage } from 'next'

import ScoreReport from '../components/ScoreReport'

const Home: NextPage = () => {
  return (
    <>
      <main>
        <ScoreReport link={'https://otoge-connected.com/competitions/192'} />
      </main>
      <footer></footer>
    </>
  )
}

export default Home
