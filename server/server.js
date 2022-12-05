const multer = require('multer');
const express = require('express');
const cors = require('cors');
const cookieparser = require('cookie-parser');
const db = require('./db');
const moviesRoutes = require('./routes/movies');
const loginRoutes = require('./routes/login');

const app = express();

const storage = multer.diskStorage({
    destination: (req, file, callBack) => {
        callBack(null, './public/images/');
    },
    filename: (req, file, callBack) => {
        callBack(null, `${file.originalname}`);
    }
});
let upload = multer({ dest: './public/images/' })

db.sync();

app.use(cookieparser());
app.use(cors({
    origin: 'http://localhost:3000',
    credentials: true,
}));
app.use(express.json());

app.get('/user', loginRoutes.auth, loginRoutes.getUser);

app.post('/login', loginRoutes.postLogin);
app.delete('/login', loginRoutes.deleteLogin);

app.get('/movies', moviesRoutes.getMovies);
app.post('/movies', loginRoutes.auth, upload.single('file') , moviesRoutes.postMovies);
app.delete('/movies/:id', loginRoutes.auth, moviesRoutes.deleteMovie);

app.listen(3001, ()=>{
    console.log("server iniciado");
})





