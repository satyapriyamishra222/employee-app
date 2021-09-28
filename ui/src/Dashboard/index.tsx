import React, { useEffect } from 'react'
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import { get, store } from "../utility/localStorage"
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import { useHistory } from "react-router-dom";
import Home from '../Home';
import { useTranslation } from 'react-i18next';


export default function Login(props: any): any {
    const { t, i18n } = useTranslation();
    let history = useHistory();
    const [state, setState] = React.useState({
        email: "",
        pass: "",
    });


    const handleEmail = (e: any) => {
        let val = e.target.value;
        setState({ ...state, email: val });
    };

    const handlePass = (e: any) => {
        let val = e.target.value;
        setState({ ...state, pass: val });
    };

    const redirectDashbord = () => {
        props.LoginFun();

        let url = "/home"
        history.push(url)
    }

    const isVlaidLogin = () => {
        if (state.email === 'admin' && state.pass === "admin") {
            let person = state.email;
            store("username", person);
            redirectDashbord()
            return true
        }
        // console.log("Not valid user")
        return false
    }


    const handleLogin = function (e: any) {

        e.preventDefault();
        isVlaidLogin()

    }
    return (<>
        <Grid container className="h-100 login-wrp" direction="row" >
            <Grid item xs={6} className="bg-img" >
                <Grid container className="bg-mask" justifyContent="center" alignItems="center">
                    <div className="promo-box">
                        <h1 className="title"> {t(`intro.label`)} </h1>
                        <p className="sub-title"> {t("WelcomeLogin.Label")}</p>
                    </div>
                </Grid>

            </Grid>
            <Grid item xs={6}>
                <Grid container justifyContent="center" alignItems="center" className="h-100" direction="column">
                    <h1 className="login-title"> Login</h1>
                    <form onSubmit={handleLogin}>
                        <FormControl>
                            <TextField value={state.email} placeholder="Email" onChange={handleEmail} id="email" size="small" variant="outlined" />
                        </FormControl>
                        <FormControl>
                            <TextField value={state.pass} id="pass" type="password" placeholder="password" onChange={handlePass} size="small" variant="outlined" />
                        </FormControl>

                        <Button variant="contained" color="primary" type="submit" className="w-100"> Login </Button>
                    </form>
                </Grid>
            </Grid>
        </Grid>
    </>
    );
}