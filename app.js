const express = require('express');

const app = express();

const PORT = process.env.PORT;

app.get('/', (req, res) => {
    res.send('Hello World');
}
);

const SECRET = process.env.SECRET;

app.get('/secret', (req, res) => {
    res.send(`The secret is ${SECRET}`);
}
);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
}
);