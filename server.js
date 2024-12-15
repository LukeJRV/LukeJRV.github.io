const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.get('/projects', (req, res) => {
    const projects = [
        { id: 1, name: "Project One", description: "A cool frontend project." },
        { id: 2, name: "Project Two", description: "A backend API project." },
        { id: 3, name: "Project Three", description: "A fullstack project." }
    ];
    res.json(projects);
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
