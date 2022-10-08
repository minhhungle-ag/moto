import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined'
import { alpha, Container, Stack } from '@mui/material'
import AppBar from '@mui/material/AppBar'
import IconButton from '@mui/material/IconButton'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import * as React from 'react'
import { Link, NavLink } from 'react-router-dom'
// import PropTypes from 'prop-types';
Header.propTypes = {}

const navList = [
  {
    label: 'HOME',
    link: '/home',
  },
  {
    label: 'DIPLOMATIC TT',
    link: '/diplomatic-it',
  },
  {
    label: 'COMPANY HISTORY',
    link: '/company-history',
  },
]

function Header(props) {
  return (
    <AppBar position="sticky" sx={{ bgcolor: '#202328' }}>
      <Container>
        <Toolbar
          disableGutters
          sx={{
            flexDirection: { xs: 'column', sm: 'row' },
            py: 2,
            color: (theme) => alpha(theme.palette.common.white, 0.7),

            '& a': {
              color: 'inherit',
              textDecoration: 'none',
            },
          }}
        >
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            sx={{ flexGrow: 1, width: { xs: '100%', sm: 'auto' } }}
          >
            <Link to="/">
              <Typography
                variant="h4"
                component="div"
                fontStyle="italic"
                sx={{ flexGrow: 1, color: 'white' }}
              >
                VINTAGE CHOPPERS.
              </Typography>
            </Link>

            <IconButton
              color="inherit"
              sx={{
                display: { sm: 'none' },
              }}
            >
              <ShoppingCartOutlinedIcon />
            </IconButton>
          </Stack>

          <Stack
            direction="row"
            alignItems="center"
            spacing={2}
            sx={{
              width: { xs: '100%', sm: 'auto' },
              '.active p': {
                color: 'white',
              },

              '& p:hover': {
                color: 'white',
              },
            }}
          >
            {navList.map((item, idx) => (
              <NavLink
                key={idx}
                to={item.link}
                className={({ isActive }) => (isActive ? 'active' : '')}
              >
                <Typography component="p" variant="body2" fontWeight="bold" sx={{ py: 1 }}>
                  {item.label}
                </Typography>
              </NavLink>
            ))}

            <IconButton
              color="inherit"
              sx={{
                display: {
                  xs: 'none',
                  sm: 'flex',
                },

                p: 0.5,
                ml: 0.5,

                '&:hover': {
                  color: 'white',
                },
              }}
            >
              <ShoppingCartOutlinedIcon />
            </IconButton>
          </Stack>
        </Toolbar>
      </Container>
    </AppBar>
  )
}

export default Header
