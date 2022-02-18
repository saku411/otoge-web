import React from 'react'
import { Button, Card, CardContent, CardActions, Typography } from '@mui/material'
import SendIcon from '@mui/icons-material/Send'

import Link from './Link'

type Props = {
  link: string
}

const ScoreReport = (props: Props) => {
  return (
    <Card sx={{ maxWidth: 400 }}>
      <CardContent>
        <Typography align='center' variant='h4'>
          スコア提出はこちら
        </Typography>
      </CardContent>
      <CardActions style={{ justifyContent: 'center' }}>
        <Link href={props.link} target='_blank'>
          <Button endIcon={<SendIcon />} variant='contained'>
            <Typography align='center' variant='h6'>
              提出
            </Typography>
          </Button>
        </Link>
      </CardActions>
    </Card>
  )
}

export default ScoreReport
