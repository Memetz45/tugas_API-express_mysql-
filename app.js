const express = require ('express');
const path = require ('path');
const app = express();
const appRouter = require ('./app/routes');
const logger = require ('morgan');


app.use(logger('dev'));
app.use(express.urlencoded({extended: true})); 
app.use(express.json());
app.use('/public', express.static(path.join(__dirname, 'uploads')));
app.use('/api', appRouter);
app.use((req, res) => {
    res.status(404);
    res.send({
        status: 'failed',
        message: 'Resource ' + req.originalUrl + ' Not Found'
    })
})

app.listen(3001, () => console.log('Server: http://localhost:3001'));