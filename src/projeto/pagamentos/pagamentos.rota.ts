import { Router } from 'express';
import PagamentosController from './pagamentos.controller';

export default class PagamentosRota {
  private router: Router;
  private controller: PagamentosController;

  constructor() {
    this.router = Router();
    this.controller = new PagamentosController();
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.post('/criar', this.controller.criarPagamento);
    // this.router.get('/buscar/:id', this.controller.reviewsUsuario);
    // this.router.delete('/apagar/:id', this.controller.apagarPagamentos);
  }

  getRouter() {
    return this.router;
  }
}
