// const express = require('express');
// const http = require('http');
// const { Server } = require('socket.io');
// const { PrismaClient } = require('@prisma/client');

import express from 'express';
import http from "http"
import { Server } from 'socket.io';

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
    cors: {
        origin: "*",
        methods: "*"
    }
});

export  {io, server, app}