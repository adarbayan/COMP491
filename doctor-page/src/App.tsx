import * as React from "react";
import {
  Button,
  Grid,
  TextField,
  InputAdornment,
  Container,
} from "@mui/material";
import { AccountCircle, LockRounded } from "@mui/icons-material";
import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import Badge from "@mui/material/Badge";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import MailIcon from "@mui/icons-material/Mail";
import NotificationsIcon from "@mui/icons-material/Notifications";
import MoreIcon from "@mui/icons-material/MoreVert";
import { Avatar } from "@mui/material";
import "./App.css";

import { ProgressBar } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { fontSize } from "@mui/system";

import AvatarImage from "./patient1.jpg";
import PatientHolder from "./PatientHolder";

const progress = 60;

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: "#EBF9F9",
  "&:hover": {
    backgroundColor: alpha("#EBF9F9", 0.25),
  },
  color: "black",
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "30ch",
    },
  },
}));

const StyledIconButton = styled(IconButton)((theme) => ({
  fontSize: "20px",
  padding: "30px",
  "&:hover": { backgroundColor: "transparent" },
}));

export default function PrimarySearchAppBar() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] =
    React.useState<null | HTMLElement>(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = "primary-search-account-menu";
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
    </Menu>
  );

  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <IconButton size="large" aria-label="show 4 new mails" color="inherit">
          <Badge badgeContent={4} color="error">
            <MailIcon />
          </Badge>
        </IconButton>
        <p>Messages</p>
      </MenuItem>
      <MenuItem>
        <IconButton
          size="large"
          aria-label="show 17 new notifications"
          color="inherit"
        >
          <Badge badgeContent={17} color="error">
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <p>Notifications</p>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
    </Menu>
  );

  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar
            style={{
              backgroundColor: "#ffffff",
              color: "#4EC6C7",
              minHeight: "80px",
              paddingLeft: "120px",
              paddingRight: "120px",
            }}
          >
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
            >
              <AccountCircle />
            </IconButton>
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ display: { xs: "none", sm: "block" } }}
            >
              Dr. Strange
            </Typography>
            <Search>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Hasta ara..."
                inputProps={{ "aria-label": "search" }}
              />
            </Search>
            <Box sx={{ flexGrow: 1 }} />
            <Box sx={{ display: { xs: "none", md: "flex" } }}>
              <StyledIconButton
                aria-label="home page"
                size="large"
                color="inherit"
              >
                Ana Sayfa
              </StyledIconButton>
              <StyledIconButton size="large" color="inherit">
                Randevular
              </StyledIconButton>
              <StyledIconButton size="large" color="inherit">
                Hastalar
              </StyledIconButton>
              <StyledIconButton size="large">
                <Typography
                  style={{
                    backgroundColor: "#4EC6C7",
                    color: "white",
                    fontSize: "20px",
                    padding: "8px 30px",
                    borderRadius: "10px",
                  }}
                >
                  Yeni Hasta
                </Typography>
              </StyledIconButton>
            </Box>
            <Box sx={{ display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                aria-label="show more"
                aria-controls={mobileMenuId}
                aria-haspopup="true"
                onClick={handleMobileMenuOpen}
                color="inherit"
              >
                <MoreIcon />
              </IconButton>
            </Box>
          </Toolbar>
          <Box
            style={{
              backgroundColor: "#4EC6C7",
              minHeight: "10px",
            }}
          ></Box>
        </AppBar>
        {renderMobileMenu}
        {renderMenu}
      </Box>
      <div style={{ padding: "50px 100px" }}>
        <Grid
          container
          style={{
            display: "flex",
            height: "540px",
          }}
        >
          <Grid container item xs={11.8} sm={5.8}>
            <Grid
              container
              className="Next-Patient"
              alignItems="center"
              direction="column"
              style={{
                margin: "30px",
              }}
            >
              <Container
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  backgroundColor: "#4EC6C7",
                  color: "white",
                  height: "80px",
                }}
              >
                <Typography
                  style={{
                    fontSize: "26px",
                    fontWeight: "bold",
                    textAlign: "left",
                    padding: "30px",
                  }}
                >
                  Sıradaki Hasta
                </Typography>
              </Container>
              <Grid container direction="row" height="300px">
                <Grid
                  container
                  item
                  sm={8}
                  direction="column"
                  style={{
                    padding: "40px",
                  }}
                >
                  <Typography className="Text">08:30 - 1 Nisan 2022</Typography>
                  <Typography className="Text">Donuk Omuz Tedavisi</Typography>
                  <Typography className="Text">Seans 3/12</Typography>
                  <Typography className="Text">Toplam İyileşme</Typography>

                  <ProgressBar
                    className="progress"
                    now={progress}
                    label={`${progress}%`}
                    variant="progress-bg"
                  />
                </Grid>
                <Grid
                  container
                  item
                  sm={4}
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "center",
                  }}
                >
                  <div
                    style={{
                      margin: "30px 30px 20px 30px",
                    }}
                  >
                    <Avatar
                      alt="Hasta 1"
                      src={AvatarImage}
                      sx={{ width: 192, height: 192 }}
                    />
                  </div>
                  <div style={{ marginBottom: "30px" }}>
                    <Typography className="Patient-Name">Hasta 1</Typography>
                  </div>
                </Grid>
              </Grid>
              <Button
                className="Button"
                style={{
                  borderRadius: 10,
                  backgroundColor: "#4EC6C7",
                  padding: "8px",
                  fontSize: "18px",
                  textTransform: "none",
                  minWidth: "250px",
                  maxWidth: "400px",
                  alignSelf: "center",
                  margin: "40px",
                }}
                variant="contained"
              >
                Seansı Başlat
              </Button>
            </Grid>
          </Grid>
          <Grid xs={0.0} sm={0.4} style={{ backgroundColor: "black" }} />
          <Grid container item xs={11.8} sm={5.8}>
            <Grid
              container
              className="Next-Patient"
              alignItems="center"
              direction="column"
              style={{
                margin: "30px",
              }}
            >
              <Container
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  backgroundColor: "#4EC6C7",
                  color: "white",
                  height: "80px",
                }}
              >
                <Typography
                  style={{
                    fontSize: "26px",
                    fontWeight: "bold",
                    textAlign: "left",
                    padding: "30px",
                  }}
                >
                  Bugünün Randevuları
                </Typography>
              </Container>
              <Grid
                container
                item
                direction="column"
                height="300px"
                style={{
                  padding: "40px",
                }}
              >
                <PatientHolder
                  patientName="Adar Bayan"
                  hour="08:30"
                ></PatientHolder>
                <PatientHolder
                  patientName="Alp Tekirdağ"
                  hour="09:30"
                  width="600px"
                ></PatientHolder>
                <PatientHolder
                  patientName="Alper Kılınç"
                  hour="10:30"
                  height="60px"
                ></PatientHolder>
                <PatientHolder
                  patientName="Oğuzhan Taş"
                  hour="11:30"
                  color="black"
                ></PatientHolder>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}
