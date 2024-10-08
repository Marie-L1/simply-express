import express from 'express';
import 'dotenv/config'

const app = express();

const PORT = process.env.PORT || 5050;

app.get('/', (req, res) => {
    res.send(`<h1>Welcome to my Express App</h1>`);
});

app.get("/videos", (req, res) => {
    res.send("This is a video route")
})

app.listen(PORT, () => {
   console.log(`app running on port ${PORT}`)
});