import express from "express"

const app = express();

app.use('/api/events', getEventos);
app.use('/api/events/:id', getEventosId);


