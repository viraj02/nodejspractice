const express = require('express');

const app = express();

app.listen(process.env.port || 4000, () => {
    console.log('Express JS is running.')
});
