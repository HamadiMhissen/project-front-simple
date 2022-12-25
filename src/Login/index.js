import { useState, React } from "react";
import axios from "axios";
import imgLogo from "../images/mlrLogo.png";
import {useNavigate} from "react-router-dom";
import {URL_API_DEPLOY_CLIENT} from "../constantsAPI.js";
import { Input, StyledLink } from "../styles.js";
import { RotatingLines } from 'react-loader-spinner'
import "./index.css";



export default function Login() {
  const titrePage = "Se connecter ";
  //const EMAIL_ERRONE = "adresse mail erronée, compte inexistant !";
  //const MOT_DE_PASSE_ERRONE = "Access Denied";
  const emptyCompte = { email: "", mdp: "" };
  const [compte, setCompte] = useState(emptyCompte);
  const [loggedIn, setLoggedIn] = useState("");
  const navigate = useNavigate();

const chargementAnimation = <RotatingLines
  strokeColor="purple"
  strokeWidth="5"
  animationDuration="0.75"
  width="56"
  visible={true}
/>
    const headers = {
      'Content-Type': 'application/json',
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  }

  async function handleSubmit(event) {
    event.preventDefault();
    setLoggedIn("en cours");
    axios
        .post(`${URL_API_DEPLOY_CLIENT}/authentication/login`, { email: compte.email, mdp: compte.mdp }, {headers})
        .then((response) => {
                localStorage.setItem("token", response.data);
                localStorage.setItem("username", compte.email);
                console.log(`jeton de connexion : ${localStorage.getItem("token")}`);
                console.log(`username : ${localStorage.getItem("username")}`);
                setLoggedIn("fin");
                navigate("/accueil/");
        })
        .catch((error) => {
          //let erreur = error.response.data ;
          if (error.response) {
            if (error.response.status === 400)  alert(`erreur : ${error.response.data}`);
            else alert(`erreur : ${error.response.data}`);
          }
        });
    setCompte(emptyCompte);
  }
  return (
    <>
      <div className="eltParent">
        <p style={{ display: "flex"}}>
          <label style={{ marginTop: "0.75em", marginRight: "0.5em" }}>
          Pas encore inscrit ?
          </label>
          <StyledLink to="/sign-up">Créer compte</StyledLink>
          <StyledLink to="#">Retour</StyledLink>
        </p>
      </div>
      <form className="eltFils" onSubmit={handleSubmit}>
        <img src={imgLogo} width="255px" height="55px" alt="not-found" />
        <br />
        <>
          <span className="titreStyle">{titrePage}</span>
          <p>
          <span>{loggedIn === "en cours" && chargementAnimation}</span><br/>
            <label>
              {"Adresse e-mail "}
              <Input
                type="text"
                placeholder="E-mail"
                value={compte.email}
                onChange={(e) =>
                  setCompte({ ...compte, email: e.target.value })
                }
              />
            </label>
          </p>
          <p>
            <label>
              {"Mot de passe "}
              <Input
                type="password"
                placeholder="Mot de passe"
                value={compte.mdp}
                onChange={(e) => setCompte({ ...compte, mdp: e.target.value })}
              />
            </label>
          </p>
          <p style={{ marginLeft: "15px", marginTop: "30px"}}>
            <a href="https://reactjs.org">Mot de passe oublié</a>
            <Input
              style={{ cursor: "pointer", color: "#ef7d00", fontWeight: "bold" }}
              type="submit"
              value="Se connecter"
              data-testid="connexion btn"
            />
          </p>
        </>
      </form>
    </>
  );
}
