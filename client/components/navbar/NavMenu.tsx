import { Box, Typography } from '@mui/material';
import Link  from 'next/link';

const NavMenu = () => {
  return (
    <Box sx={{ display: 'flex',  width: '50%', justifyContent: 'center' }}>
    <Link href="/shop">
      <Typography variant="h6" sx={{ flexGrow: 1, mr:3, letterSpacing: 5 }}>
        Shop
      </Typography>
    </Link>
    <Link href="/shop">
      <Typography variant="h6" sx={{ flexGrow: 1, mr:3, letterSpacing: 5 }}>
        About
      </Typography>
    </Link>
    <Link href="/shop">
      <Typography variant="h6" sx={{ flexGrow: 1, mr:3, letterSpacing: 5 }}>
        Account
      </Typography>
    </Link>
    <Link href="/shop">
      <Typography variant="h6" sx={{ flexGrow: 1, letterSpacing: 5}}>
        Contact
      </Typography>
    </Link>
  </Box>
  )
}

export default NavMenu