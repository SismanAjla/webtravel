const express = require('express');
const mongoose = require('mongoose');
const korisnikRoutes = require('./routes/KorisnikRoutes');
const putovanjeRoutes = require('./routes/PutovanjeRoutes');
const bcrypt = require('bcrypt');
const cors = require('cors');
const Korisnik = require('./models/Korisnik');


//u narednoj liniji koda morate koristiti uri vase Mongo DB baze, ja sam za svoju koristio (mongodb+srv://karicmuhamed21:16A2jkY2FO1eljo0@cluster0.tx2pg2g.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0)
mongoose.connect('Ovdjeide vas Mongo URI')
.then(() => {
    console.log('Connected to database')
    dodajAdmin();
});

async function dodajAdmin() {
  try {
    const adminUser = await Korisnik.findOne({ email: "muhamed@example.com" });
    if (!adminUser) {
      const newAdmin = new Korisnik({
        korisnickoIme: "MuhamedKaric281",
        lozinka: "adminpass", 
        email: "muhamed@example.com",
        uloga: "admin",
        aktivan: true
      });
      await newAdmin.save();
      console.log("Admin user created");
    }
  } catch (error) {
    console.error("Error ensuring admin user:", error);
  }
}


const app = express();
app.use(cors());

app.use(express.json());
app.use('/api/korisnici', korisnikRoutes);
app.use('/api/putovanja', putovanjeRoutes);



app.get('/', (req, res) => {
  res.send('Travel Agency Portal');
});





app.listen(3001, () => {
    console.log('Server is running on port 3001');
});
