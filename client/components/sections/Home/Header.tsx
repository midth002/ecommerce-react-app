import { Box, Typography } from '@mui/material';
import Image from 'next/image'; 
import myImage from '../../../public/images/web-design-4.png';

const Header = () => {
  return (
    <Box sx={{
        height: '70vh',
        backgroundImage: 'linear-gradient(rgba(255,74,158,.2),rgba(255,74,158,0) 50%),linear-gradient(60deg,#5c00c3 16%,#ff4a9e 85%)'
    }}>
        <Box sx={{
            display: 'flex'
        }}>
        <Typography variant="h2" color="white" >Digital Marketing Website Templates</Typography>
        <Image
      src={myImage}
      alt="Picture of the author"
    />
    </Box>
    </Box>
  )
}

export default Header