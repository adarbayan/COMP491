import React from "react";
import { Button, Grid, TextField, InputAdornment } from "@mui/material";
import { AccountCircle, LockRounded } from "@mui/icons-material";
import "./App.css";

const App: React.FC = () => {
  return (
    <div>
      <Grid container style={{ minHeight: "100vh" }}>
        <Grid item xs={12} sm={6} md={8}>
          <img
            className="Login-Image"
            src="https://www.care2curephysiotherapy.com/wp-content/uploads/2019/09/physiotherapy_techniques.jpg"
            alt="login-image"
          />
        </Grid>
        <Grid
          container
          item
          xs={12}
          sm={6}
          md={4}
          alignItems="center"
          direction="column"
          justifyContent="space-between"
        >
          <div />
          <div className="Login-Container">
            <Grid container justifyContent="center">
              <img
                src="https://cdn.dribbble.com/users/3445877/screenshots/6353004/phsiotherapy_4x.jpg"
                width={200}
                alt="logo"
              />
            </Grid>
            <TextField
              margin="normal"
              label="Kullanıcı Adı / e-Mail"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <AccountCircle />
                  </InputAdornment>
                ),
              }}
            />
            <TextField
              margin="normal"
              type="password"
              label="Şifre"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <LockRounded />
                  </InputAdornment>
                ),
              }}
            />
            <div style={{ height: 20 }} />
            <Button className="Button" color="primary" variant="contained">
              Giriş Yap
            </Button>
            <div style={{ height: 20 }} />
            <Button>Şifremi Unuttum</Button>
          </div>
          <div />
        </Grid>
      </Grid>
    </div>
  );
};

export default App;
