import e from 'express';
import cors from 'cors';
import router from './routes/ProductRoute.js';

const app = e();
const port = 3000;

app.use(cors());
app.use(e.json());
app.use(router);

app.get('/', (req, res) => {
    res.send('Hello World');
});

app.listen(port, () => {
    console.log(`Server running on port http://localhost:${port}`);
})