import express, {Application} from 'express';
import userRoutes from '../routes/users';
import cors from 'cors';
import db from '../db/connection';

class ServerIniter {
  private app: Application;
  private port: string | number;
  private apiPaths = {
    users : 'api/users'
  }
  
  constructor() {
    this.app = express();
    this.port = process.env.PORT || '5001'; 
    this.tryConnection();
    this.middleware();
    this.routes();
  }

  async tryConnection() {
    try { 
      await db.authenticate();
      console.log('Connection succefull');
    } catch(error) {
      throw new Error('error');
    }
  }

  middleware() {
    this.app.use(cors());
    this.app.use(express.json());
    this.app.use(express.static('public'));
  }

  routes() {
    this.app.use(this.apiPaths.users, userRoutes);
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log('Server running on ' + this.port);
    });
  }
}

export default ServerIniter;