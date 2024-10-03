Projekat: Web Programiranje

Opis Projekta:
Projekat se sastoji iz dva dijela:
1. Client - Frontend koji je rađen koristeći React framework.
2. Server - Backend koji je rađen koristeći Node.js.

Baza podataka koja je korištena je MongoDB, što znači da je projekat izgrađen koristeći MERN stack (MongoDB, Express.js, React, Node.js).

-Uputstvo za Pokretanje Projekta

1. **Otvori Projekat u Visual Studio Code:**
   - Otvori `webtravel_281` folder u Visual Studio Code.

2. **Pokretanje Servera:**
   - U Visual Studio Code, otvori terminal i navigiraj se u folder `server`:
   
     cd server
   - Instaliraj sve potrebne dependency i pakete:
     npm install
     ili
     npm i
   - Nakon završetka instalacije, pokreni server:
     npm start
   - Ova komanda će spojiti bazu podataka i podići server na portu `3001`.

3. Pokretanje Frontenda:
   - Otvori novi terminal u Visual Studio Code i navigiraj se u folder `client`:
     cd client
   - Instaliraj sve potrebne dependency i pakete:
     npm install
     ili
     npm i
   - Nakon završetka instalacije, pokreni frontend:
     npm start
   - Aplikacija bi trebala automatski da se pokrene u browseru na adresi `http://localhost:3000`. Ako se ne pokrene automatski, otvori navedeni URL ručno u browseru.

Napomena:
Baza podataka je povezana sa mojim MongoDB Atlas nalogom i podešena je tako da svi mogu pristupiti. Ne bi trebalo biti problema sa povezivanjem na bazu podataka.
