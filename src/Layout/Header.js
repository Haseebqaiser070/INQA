import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Iconify from 'src/components/iconify/Iconify';
import logo from 'src/components/logo/logo.png';
import { navItems } from './NavItems';
import Scrollspy from 'react-scrollspy';
import { HashLink as Link } from 'react-router-hash-link';

const drawerWidth = 240;

function Header(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center', height: '56px' }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        {/* <img src={logo1} style={{ maxWidth: '120px' }} /> */}
        LAUENROTH
      </Typography>
      <Divider />
      <List>
        {navItems.map((item, index) => (
          <Link className="text-decoration-none text-muted" to={item.link}>
            <ListItem key={index} disablePadding>
              <ListItemButton sx={{ textAlign: 'center' }}>
                <ListItemText primary={item.label} />
              </ListItemButton>
            </ListItem>
          </Link>
        ))}
      </List>
    </Box>
  );
  const container = window !== undefined ? () => window().document.body : undefined;

  const [selectedItem, setSelectedItem] = React.useState("#inqa");

  return (
    <Box id="inqa" sx={{ display: 'flex', height: { sm: '88px', xs: '53px' } }}>
      <CssBaseline />
      <AppBar className="bg-white shadow-none border-bottom text-muted" component="nav">
        <Toolbar className="container">
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <Iconify icon="material-symbols:menu" />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}>
            <Link to="/">
              <img src={logo} style={{ maxWidth: '240px' }} />
            </Link>
          </Typography>
          <Box id="fff" sx={{ display: { xs: 'none', sm: 'flex' } }}>
            {navItems.map((item, index) => (
              <Link
                onClick={() => setSelectedItem(item.link)}
                className={` text-decoration-none ${selectedItem == item.link ? 'text-primary' : 'text-muted'}`}
                to={item.link}
              >
                <div
                  key={index}
                  style={{ borderBottom: selectedItem === item.link ? '6px solid' : 'none', padding: '30px 10px' }}
                  className="mx-2 header-menue"
                >
                  {item.label}
                </div>
              </Link>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
      <Box component="main" sx={{ p: 3 }}>
        <Toolbar />
      </Box>
    </Box>
  );
}

Header.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default Header;
