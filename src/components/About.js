import React from "react"
import NaviBar from "./NaviBar";
import Footer from "./Footer";
import Body from "./Body";
import ChooseQuiz from "./ChooseQuiz";
import Style from '../Style.scss'
import photo from "../img/logo_header.png"
import check from "../img/check.png"
export default function About() {
    return (
        <>
        
       
        <NaviBar/>
        <img id="photo" src={photo} alt="Logo PJATKA"/>
        <div id="AboutBody">

        <div id="TextBody">
         <header>
         <h3>Projekt X (40 pkt) Napisz aplikację, która będzie realizowała quiz. Aplikacja powinna spełniać następujące wymagania:</h3>
         </header>
         <div id="contents">
         <ul>
         <li>(1 pkt) Aplikacja na stronie głównej powinna mieć możliwość wyboru przez użytkownika quizu<img id="check" src={check} alt="Logo PJATKA"/></li>
         <li>(1 pkt) Po wybraniu quizu aplikacja powinna zapytać się o imię dla gracza<img id="check" src={check} alt="Logo PJATKA"/></li>
         <li>(3 pkt) Następnie aplikacja powinna przeprowadzić quiz dla gracza<img id="check" src={check} alt="Logo PJATKA"/></li>
         <li>(2 pkt) Aplikacja powinna przechowywać rankingi dla graczy dla danego quizu<img id="check" src={check} alt="Logo PJATKA"/></li>
         <li>(1 pkt) Aplikacja powinna mieć możliwość tworzenia przez użytkownika quizu</li>
         <li>(12 pkt) Quiz powinien mieć następujące typy pytań:
            <ul>
            <li>(1 pkt) Jednokrotnego wyboru<img id="check" src={check} alt="Logo PJATKA"/></li>
            <li>(1 pkt) Wielokrotnego wyboru<img id="check" src={check} alt="Logo PJATKA"/></li>
            <li>(1 pkt) Prawda/Fałsz<img id="check" src={check} alt="Logo PJATKA"/></li>
            <li>(1 pkt) Krótka odpowiedź<img id="check" src={check} alt="Logo PJATKA"/></li>
            <li>(1 pkt) Wybór odpowiedzi z listy</li>
            <li>(2 pkt) Wypełnienie słów</li>
            <li>(3 pkt) Sortowanie elementów</li>
            <li>(2 pkt) Dopasowanie elementów</li>
            </ul>
         </li>
         </ul>
         </div>
         </div>
        </div>
        <Body/>
        <Footer/>
        </>
    )
}