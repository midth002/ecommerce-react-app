import { Box, Typography } from "@mui/material";
import Link from "next/link";

const NavMenu = () => {
  return (
    <Box sx={{ display: "flex", width: "50%", justifyContent: "center" }}>
      <Link href="/products">
        <Typography variant="h6" sx={{ flexGrow: 1, mr: 3, letterSpacing: 5 }}>
          Products
        </Typography>
      </Link>
      <Link href="/about">
        <Typography variant="h6" sx={{ flexGrow: 1, mr: 3, letterSpacing: 5 }}>
          About
        </Typography>
      </Link>
      <Link href="/services">
        <Typography variant="h6" sx={{ flexGrow: 1, mr: 3, letterSpacing: 5 }}>
          Services
        </Typography>
      </Link>
      <Link href="/contact">
        <Typography variant="h6" sx={{ flexGrow: 1, letterSpacing: 5 }}>
          Contact
        </Typography>
      </Link>
    </Box>
  );
};

export default NavMenu;
