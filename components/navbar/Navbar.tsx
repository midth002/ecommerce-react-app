import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  Button,
  IconButton,
} from "@mui/material";
import { DesignServices, ShoppingCart } from "@mui/icons-material";
import Link from 'next/link';
import NavMenu from "./NavMenu";

const Navbar = () => {
 
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" style={{ background: "#812bea" }}>
        <Toolbar sx={{ justifyContent: "space-between" }}>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <DesignServices />
            <Typography>Star Themes</Typography>
          </IconButton>
          <NavMenu />
          <Link href="/checkout">
          <Button color="inherit" >
            <ShoppingCart />
          </Button>
          </Link>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
