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
          <div className="Login-Container" style={{ justifyContent: "center" }}>
            <header className="Header">Hesabınıza Giriş Yapın</header>
            <TextField
              margin="normal"
              label="Kullanıcı Adı / e-mail"
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
            <a
              className="Forgot-Password"
              href="https://google.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Şifremi Unuttum
            </a>
            <div style={{ height: 40 }} />
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
              }}
              variant="contained"
            >
              Giriş Yap
            </Button>
          </div>
          <div />
        </Grid>
      </Grid>
    </div>
  );
};

export default App;
