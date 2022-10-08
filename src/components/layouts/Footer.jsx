import React from 'react'
// import PropTypes from "prop-types";
import CopyrightIcon from '@mui/icons-material/Copyright'
import { alpha, Box, Container, Divider, Stack, Typography } from '@mui/material'
import { Link } from 'react-router-dom'
import Item from '../common/Item'
import SocialItem from '../common/SocialItem'
import InstagramIcon from '@mui/icons-material/Instagram'
import FacebookIcon from '@mui/icons-material/Facebook'
import TwitterIcon from '@mui/icons-material/Twitter'

Footer.propTypes = {}

const socialList = [
  {
    social: 'Facebook',
    icon: <FacebookIcon />,
  },
  {
    social: 'Instagram',
    icon: <InstagramIcon />,
  },
  {
    social: 'Twitter',
    icon: <TwitterIcon />,
  },
]

function Footer(props) {
  return (
    <Box
      component="footer"
      sx={{
        bgcolor: '#2e313a',

        '& *': {
          color: (theme) => `${alpha(theme.palette.common.white, 0.7)} !important`,
        },

        '& a': {
          color: 'inherit',
          textDecoration: 'none',
        },
      }}
    >
      <Container>
        <Stack>
          <Link to="/">
            <Typography
              variant="h4"
              component="div"
              fontStyle="italic"
              sx={{ flexGrow: 1, color: 'white', mt: 8 }}
            >
              VINTAGE CHOPPERS.
            </Typography>
          </Link>

          <Stack
            direction="row"
            alignItems="flex-start"
            justifyContent="space-between"
            flexWrap="wrap"
            sx={{
              py: 4,
            }}
          >
            <Stack spacing={2} sx={{ width: { xs: '100%', sm: 1 / 2, md: 1 / 3 }, py: 4 }}>
              <Item label="Email address:" value="contact@example.com" />
              <Item label="Phone number:" value="+44 (0) 7850 933 262" />
            </Stack>

            <Box sx={{ width: { xs: '100%', sm: 1 / 2, md: 1 / 3 }, py: 4 }}>
              <Item
                label="Insight"
                value="Nam vulputate a arcu vel fringilla. Nulla eu diam in libero tempus commodo et et leo. Donec convallis commodo massa, a tristique turpis. Maecenas eu lobortis ipsum. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus."
              />
            </Box>

            <Box sx={{ flexGrow: 1 }} />

            <Stack spacing={1} sx={{ py: 4 }}>
              {socialList.map((item, idx) => (
                <Box key={idx} sx={{ cursor: 'pointer' }}>
                  <SocialItem social={item.social} icon={item.icon} />
                </Box>
              ))}
            </Stack>
          </Stack>

          <Divider color="white" />

          <Stack direction="row" alignItems="center" justifyContent="center" sx={{ p: 2 }}>
            <CopyrightIcon fontSize="small" />
            <Typography variant="body2">
              {` ${new Date().getFullYear()}. Power by Minh Hung Le`}
            </Typography>
          </Stack>
        </Stack>
      </Container>
    </Box>
  )
}

export default Footer
