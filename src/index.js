import { ChemicalServer } from "chemicaljs";
import express from 'express';

const PORT = 8080
const server = new ChemicalServer({
    default: "uv",
    uv: true,
    scramjet: false,
    rammerhead: false
});

server.use(express.static("public", {
}));

server.error((req, res) => {
    res.status(404);
    res.send("404 Not Found");
});

server.listen(PORT);

