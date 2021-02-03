import React from "react"
import NaviBar from "./NaviBar";
import Footer from "./Footer";
import Body from "./Body";
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
            <li>(2 pkt) Wypełnienie słów<img id="check" src={check} alt="Logo PJATKA"/></li>
            <li>(3 pkt) Sortowanie elementów</li>
            <li>(2 pkt) Dopasowanie elementów</li>
            </ul>
         </li>
         <li>Pod ocenę będą brane następujące elementy:</li>
         <li>(25 pkt) Uwzględnienie powyższych wymagań z uwzględnieniem sytuacji wyjątkowych</li>
         <li>(10 pkt) Styl aplikacji pod względem CSS </li>
         <ul>
             <li>(1 pkt) Użycie frameworka CSS np. Bootstrap<img id="check" src={check} alt="Logo PJATKA"/></li>
             <li>(2 pkt) Personalizacja stylu CSS za pomocą Less/SaaS<img id="check" src={check} alt="Logo PJATKA"/></li>
             <li>(4 pkt) Funkcjonalne ułożenie elementów aplikacji<img id="check" src={check} alt="Logo PJATKA"/></li>
             <li>(1 pkt) Użycie React Rounting<img id="check" src={check} alt="Logo PJATKA"/></li>
             <li>(1 pkt) Użycie React Redux</li>
             <li>(1 pkt) Użycie TypeScript</li>
         </ul>
         <li>(2 pkt) Przetestowanie aplikacji</li>
         <li>(2 pkt) Styl i podział kodu<img id="check" src={check} alt="Logo PJATKA"/></li>
         <li>Dodatkowe punkty można otrzymać za wykonanie następujących podpunktów:</li>
         <ul>
            <li>(1 pkt) Logowanie administratora</li>

            <li> (1 pkt) Internationalizacja aplikacji</li>
            <li>(1 pkt) Deploy aplikacji na serwer zewnętrzny (na przykład w serwisie Heroku/Netlify).<img id="check" src={check} alt="Logo PJATKA"/></li>
            <li>(2 pkt) Inne rzeczy, nie pokazane na wykładzie/zajęciach.<img id="check" src={check} alt="Logo PJATKA"/></li>
         </ul>
         <li>Ponadto pod ocenę jest brane również: (Brak tych elementów to ujemne punkty od obowiązkowej punktacji zadania!)</li>
         <ul>
             <li>Historia projektu w repozytorium.</li>
             <li>Ocena opisu commitów</li>
             <li>Stan repozytorium (żeby nie był śmietnikiem!!!)</li>
         </ul>
         </ul>
         </div>
         </div>
        </div>
        
       
        </>
    )
}