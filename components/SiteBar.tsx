import * as React from 'react'
import {
  AppBar,
  Box,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Typography,
  IconButton,
} from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined'

import MuiLink from '@mui/material/Link'

import Link from './Link'

const DrawerList = () => {
  return (
    <Box sx={{ width: 250 }} role='presentation'>
      <List>
        <MuiLink href='/' color='#fff' underline='none'>
          <ListItem button key='index'>
            <ListItemIcon>
              <HomeOutlinedIcon />
            </ListItemIcon>
            <ListItemText primary='ホーム' />
          </ListItem>
        </MuiLink>
      </List>
    </Box>
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
  const [isOpenDrawer, setDrawerState] = React.useState<boolean>(false)

  return (
    <ThemeProvider theme={darkTheme}>
      <Drawer
        anchor='right'
        open={isOpenDrawer}
        onClose={() => {
          setDrawerState(false)
        }}
      >
        <DrawerList />
      </Drawer>
      <AppBar position='static' color='primary'>
        <Toolbar>
          <Typography variant='h6' noWrap component='div' sx={{ flexGrow: 1 }}>
            <Link href={'/'} underline='none' color={'#ffffff'}>
              '第6回 音ゲー七帝戦'
            </Link>
          </Typography>
          <IconButton
            edge='start'
            color='inherit'
            aria-label='menu'
            sx={{ mr: 2 }}
            onClick={() => setDrawerState(!isOpenDrawer)}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
    </ThemeProvider>
  )
}

export default SiteBar
