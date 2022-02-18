import React from 'react'
import Grid from '@mui/material/Grid'
import { Box } from '@mui/system'
import { KadaiKyokuLists } from '../libs/KadaiKyokuLists'
import { Card, Typography, CardMedia, CardContent } from '@mui/material'

const Kisyu = [
  'IIDXSP',
  'IIDXDP',
  'SDVX',
  "pop'n music",
  'DDRSP',
  'DDRDP',
  'GUITARFREAKS',
  'DrumMania',
  'jubeat',
  'ノスタルジア',
  'CHUNITHM',
  'maimai',
  'DIVA',
  'グルコス',
  '太鼓の達人',
  'DANCERUSH STARDOM',
  'オンゲキ',
  'WACCA',
  'プロジェクトセカイ カラフルステージ',
  'Deemo',
  'Cytus',
  'BMS',
  'バンドリ!ガールズバンドパーティ!',
]

const Kadai = () => {
  return (
    <Grid container spacing={2} direction='row' justifyContent='space-evenly' alignItems='center'>
      {KadaiKyokuLists.map((kadaiKyoku, i) => (
        <>
          {/* <Grid item xs={6}> */}
          <Typography variant='h5'>{Kisyu[i / 2]}</Typography>
          {/* </Grid> */}
          <Grid item xs={6} sx={{ maxHeight: 150, minHeight: 150 }}>
            <Card sx={{ display: 'flex', justifyContent: 'space-between' }}>
              <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                <CardContent>
                  <Typography variant='h6'>{kadaiKyoku.title}</Typography>
                  <Typography variant='h6'>
                    {kadaiKyoku.difficulty ? '難易度:' + kadaiKyoku.difficulty : '全難易度'}
                  </Typography>
                </CardContent>
              </Box>
              <CardMedia
                component='img'
                sx={{ maxWidth: 150, maxHeight: 150, minWidth: 150, minHeight: 150 }}
                image={kadaiKyoku.image}
                alt={kadaiKyoku.title}
              />
            </Card>
          </Grid>
        </>
      ))}
    </Grid>
  )
}
export default Kadai
