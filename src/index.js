import { ChemicalServer } from "chemicaljs";
// import { createBareServer } from '@tomphttp/bare-server-node';
import express from 'express'   ;
import http from 'node:http';
// i think were imporing shit here

const app = new ChemicalServer();
const PORT = 8080;



// The sigma shutdown
app.listen(PORT);
app.use(express.static("public"))
