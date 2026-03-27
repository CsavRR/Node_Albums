import express from 'express'
import albumsRoutes from './routes/albumsRoutes.js'

const PORT = 3000;
const app = express();

app.use(express.json());
app.use("/albums", albumsRoutes);

app.listen(PORT, () =>{
    console.log(`Server runs on http://localhost:${PORT}`);
});
