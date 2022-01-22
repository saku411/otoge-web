import * as React from 'react'
import Link from 'next/link'
import { AppBar, Toolbar, Typography, IconButton } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import { ThemeProvider, createTheme } from '@mui/material/styles'

const appBarLabel = (label: string) => {
  return (
    <Toolbar>
      <Typography variant='h6' noWrap component='div' sx={{ flexGrow: 1 }}>
        <Link href='/'>
          <a>{label}</a>
        </Link>
      </Typography>
      <IconButton edge='start' color='inherit' aria-label='menu' sx={{ mr: 2 }}>
        <MenuIcon />
      </IconButton>
    </Toolbar>
  )
}

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#1976d2',
    },
  },
})

const SiteBar = () => {
  return (
    <ThemeProvider theme={darkTheme}>
      <AppBar position='static' color='primary'>
        {appBarLabel('音ゲー')}
      </AppBar>
    </ThemeProvider>
  )
}

export default SiteBar
