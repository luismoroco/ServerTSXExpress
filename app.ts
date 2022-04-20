import dotenv from 'dotenv';
import ServerIniter from './models/server';
dotenv.config();

const setupServer = new ServerIniter;    
setupServer.listen();