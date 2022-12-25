import {Outlet} from "react-router-dom";
import "./header.css";
import { HeaderLink, Ul} from "../styles";
import React from 'react';

export function Header() {
    // const [activeMenuDeroulant, setActiveMenuDeroulant] = useState(false);
    return (
        <>
        <nav style={{height:"60px"}}>
            <Ul>
                <li className="headerTitle">Maison LeRoux</li>
                <li>
                    <HeaderLink /*onMouseEnter={()=>setActiveMenuDeroulant(false)}*/ to="/accueil/user/platsDuMois">
                        Accueil
                    </HeaderLink>
                </li>
                <li>
                    <HeaderLink
                        //onMouseEnter={()=>setActiveMenuDeroulant(true)}
                        to="/accueil/user/platsDuSemaine">Commander</HeaderLink>
                    {/*{activeMenuDeroulant === true ?*/}
                    {/*    <Ul*/}
                    {/*        onMouseLeave={()=>setActiveMenuDeroulant(false)}*/}
                    {/*        style={{position: "absolute", top: "78px", width: "120px", display:"block" }}>*/}
                    {/*        <li>*/}
                    {/*            <HeaderLink to ="/accueil/user/platsDuSemaine" style={{textAlign: "left", marginLeft:"0%"}}>Par semaine</HeaderLink>*/}
                    {/*        </li>*/}
                    {/*        <li>*/}
                    {/*            <HeaderLink to="/accueil/user/platsDuMois" style={{textAlign: "left", marginLeft:"0%"}}>Par mois</HeaderLink>*/}
                    {/*        </li>*/}
                    {/*    </Ul> : null}*/}
                </li>
                <li>
                    <HeaderLink /*onMouseEnter={()=>setActiveMenuDeroulant(false)} */to="/accueil/user/profil-details" >
                        Profil
                    </HeaderLink>
                    {/*<HeaderLink //onMouseEnter={()=>setActiveMenuDeroulant(true)}
                        to="/accueil/user/platsDuSemaine">Paiement </HeaderLink>*/}
                    {/*{activeMenuDeroulant === true ?*/}
                    {/*    <Ul*/}
                    {/*        onMouseLeave={()=>setActiveMenuDeroulant(false)}*/}
                    {/*        style={{position: "absolute", top: "78px", width: "120px", display:"block" }}>*/}
                    {/*        <li>*/}
                    {/*            <HeaderLink to ="/accueil/user/platsDuSemaine" style={{textAlign: "left", marginLeft:"0%"}}>Par semaine</HeaderLink>*/}
                    {/*        </li>*/}
                    {/*        <li>*/}
                    {/*            <HeaderLink to="/accueil/user/platsDuMois" style={{textAlign: "left", marginLeft:"0%"}}>Par mois</HeaderLink>*/}
                    {/*        </li>*/}
                    {/*    </Ul> : null}*/}
                </li>
            </Ul>
            <Outlet />
        </nav>
        </>
    );
}