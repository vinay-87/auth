const express = require('express');
const app = express();
const port = 3000;

app.use(express.static('public'));

app.listen(process.env.PORT || port, () => {
    console.log(`Server is listening at http://localhost:${port}`);
});
