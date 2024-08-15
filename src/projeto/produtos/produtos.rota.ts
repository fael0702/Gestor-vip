import { Router } from 'express';
import ProdutosController from './produtos.controller';

export default class ProdutosRota {
  private router: Router;
  private controller: ProdutosController;

  constructor() {
    this.router = Router();
    this.controller = new ProdutosController();
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.post('/criar', this.controller.criarProdutos);
    // this.router.delete('/apagar/:id', this.controller.apagarProdutos);
  }

  getRouter() {
    return this.router;
  }
}
