import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  Button,
  IconButton,
  useTheme,
} from "@mui/material";
import { DesignServices } from "@mui/icons-material";
import NavMenu from "./NavMenu";

const Navbar = () => {
  const theme = useTheme();

  
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
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
