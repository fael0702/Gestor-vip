import { Router } from 'express';
import PedidosController from './pedidos.controller';

export default class PedidosRota {
  private router: Router;
  private controller: PedidosController;

  constructor() {
    this.router = Router();
    this.controller = new PedidosController();
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.post('/criar', this.controller.criarPedido);
    // this.router.get('/buscar/:id', this.controller.reviewsUsuario);
    // this.router.delete('/apagar/:id', this.controller.apagarPedido);
  }

  getRouter() {
    return this.router;
  }
}
