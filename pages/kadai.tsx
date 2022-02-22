import React from 'react'
import Grid from '@mui/material/Grid'
import { Box } from '@mui/system'
import { KadaiKyokuLists } from '../libs/KadaiKyokuLists'
import { Card, Collapse, Typography, CardMedia, CardContent, CardActions } from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import { styled } from '@mui/material/styles'
import IconButton, { IconButtonProps } from '@mui/material/IconButton'

interface ExpandMoreProps extends IconButtonProps {
  expand: boolean
}

const ExpandMore = styled((props: ExpandMoreProps) => {
  const { expand, ...other } = props
  return <IconButton {...other} />
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}))

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
    <Grid
      container
      spacing={2}
      direction='row'
      justifyContent='space-between'
      alignItems='flex-start'
    >
      {KadaiKyokuLists.map((kadaiKyoku, i) => (
        <>
          {i % 2 === 0 ? (
            <Grid
              item
              xs={12}
              container
              direction='column'
              justifyContent='center'
              alignItems='center'
            >
              <Grid item xs={12}>
                <Typography variant='h3'>{Kisyu[i / 2]}</Typography>
              </Grid>
            </Grid>
          ) : (
            <></>
          )}
          <Grid item xs={6} sx={{ mb: 2 }}>
            <Card sx={{ display: 'flex', justifyContent: 'space-between' }}>
              <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                <CardContent>
                  <Typography variant='h6'>{kadaiKyoku.title}</Typography>
                  <Typography variant='h6'>
                    {kadaiKyoku.difficulty ? '難易度:' + kadaiKyoku.difficulty : ''}
                  </Typography>
                  <Typography variant='body2'>{kadaiKyoku.remark}</Typography>
                </CardContent>
              </Box>
              <CardMedia
                component='img'
                sx={{ maxWidth: 250, maxHeight: 250, minWidth: 250, minHeight: 250 }}
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
