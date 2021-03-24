import React, { useState } from "react";
import { authService } from "../../fire_module/fireMain";
import { useSelector } from "react-redux";
import { useHistory, Link } from "react-router-dom";
//Material UI 로그인 Form 관련 Imports

import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";

// Materaul UI 회원가입 Form Design
const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));
//TODO 오류 발생하므로 코드 수정하기
const FindAccountPage = () => {
  //redux로 로그인 상태 체크
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  // 로그인한 유저는 해당 페이지에 접근하지 못하도록 Redirect
  let history = useHistory();
  if (isLoggedIn) {
    history.push("/");
  }
  // Materail Ui 디자인에 사용
  const classes = useStyles();
  const [email, setEmail] = useState("");

  const handleInput = (event) => {
    setEmail(event.currentTarget.value);
  };

  const handleFindAccount = async (event) => {
    event.preventDefault();
    var actionCodeSettings = {
      // URL you want to redirect back to. The domain (www.example.com) for this
      // URL must be in the authorized domains list in the Firebase Console.
      url: "localhost:3000/",
      // This must be true.
      handleCodeInApp: true,
      iOS: {
        bundleId: "com.example.ios",
      },
      android: {
        packageName: "com.example.android",
        installApp: true,
        minimumVersion: "12",
      },
      dynamicLinkDomain: "example.page.link",
    };

    await authService
      .sendSignInLinkToEmail(email, actionCodeSettings)
      .then(() => {
        // The link was successfully sent. Inform the user.
        // Save the email locally so you don't need to ask the user for it again
        // if they open the link on the same device.
        window.localStorage.setItem("emailForSignIn", email);
        // ...
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log("계정찾기=>", errorCode);
        console.log("계정찾기=>", errorMessage);
        // ...
      });
  };
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Typography component="h1" variant="h5">
          Check Charging
        </Typography>
        <br />
        <Typography>(계정 찾기)</Typography>
        <br />
        <Typography>
          작성하신 이메일로 로그인 가능한 링크를 보내드립니다.
        </Typography>
        {/* <form className={classes.form} onSubmit={handleCreateAccount}> */}
        <form className={classes.form} onSubmit={handleFindAccount}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Email"
                name="email"
                autoComplete="email"
                autoFocus
                value={email}
                onChange={handleInput}
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            계정 찾기
          </Button>
          <Grid container justify="flex-end">
            <Grid item>
              <Link to="/login" variant="body2">
                이미 계정이 있으신가요? 로그인 하기
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
};

export default FindAccountPage;
