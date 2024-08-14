import { Router } from 'express';
import JogadoresController from './jogadores.controller';

export default class JogadoresRota {
  private router: Router;
  private controller: JogadoresController;

  constructor() {
    this.router = Router();
    this.controller = new JogadoresController();
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.post('/criar', this.controller.criarJogador);
    // this.router.get('/buscar/:nome', this.controller.buscarPorNome);
  }

  getRouter() {
    return this.router;
  }
}
