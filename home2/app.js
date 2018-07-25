const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(bodyParser.json());

const fullName = 'Рыжков Станислав Алексадрович';
const occupation = 'Full stack developer';

const data = {fullName, occupation};

app.get('/api', (req, res) => {
    res.json(data);
});

app.listen(8000, () => {
    console.log('Server start on port 8000...');
});
