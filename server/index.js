const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mysql = require('mysql2');
const cors = require('cors');
const port = 5000;

const db = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'admin_hrtd'
});

if(!db.error){
    console.log('Database is connected successfully');
}


app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({extended: true }));

app.get('/api/get', (req, res) => {
     const sqlGet = 'SELECT * FROM users';
     db.query(sqlGet, (err, result) => {
        if(err) throw res.send(err);
        res.send(result);
     });
});


app.post('/api/post', (req, res) => {
    const {name, email, age, mobile, work, address, description } = req.body;
    const sqlInsert = "INSERT INTO users (full_name, email, age, mobile, work, address, description) VALUES(?,?,?,?,?,?,?)";
    db.query(sqlInsert, [name, email, age, mobile, work, address, description], (error, result) => {
        if(error){
            console.log(error);
        }
    })
});

//Delete specific user
app.delete('/api/remove/:id', (req, res) => {
    const {id} = req.params;
    const sqlRemove = "DELETE FROM users WHERE id = ?";
    db.query(sqlRemove, id, (err, result) => {
        if(err) console.log(err);
    })
});

//Get Specific user details
app.get('/api/get/:id', (req, res) => {
    const {id} = req.params;
    const sqlGet = 'SELECT * FROM users WHERE id = ?';
    db.query(sqlGet,id, (err, result) => {
       if(err) throw res.send(err);
       res.send(result);
    });
});


//Update Specific user details
app.put('/api/put/:id', (req, res) => {
    const {id} = req.params;
    const {name, email,age,mobile,work,address,description} = req.body;
    const sqlUpdate = 'UPDATE users SET full_name = ?, email = ?, age = ?, mobile = ?, work = ?, address = ?, description = ? WHERE id = ?';
    db.query(sqlUpdate,[name, email, age, mobile, work, address, description, id], (err, result) => {
       if(err) throw res.send(err);
       res.send(result);
    });
});

app.get('/', (req, res) => {
    // const sqlInsert = "INSERT INTO users (full_name, email, age, mobile, work, address, description) VALUES('Shahab','shahab@gmail.com',28,01521117590,'Software','Mirpur','Head of IT')";
    // db.query(sqlInsert, (err, result) => {
    //     console.log('Error: ', err);
    //     console.log('Result: ', result);
    //     res.send('Hello Excpress');
    // })
    res.send('Hello Excpress');
});


app.listen(port, () => {
    console.log('Server is running on port: '+port);
})