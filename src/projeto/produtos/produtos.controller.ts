import { Response, Request } from 'express';
import ProdutosService from './produtos.service';
import BaseController from '../../bases/BaseController';

export default class ProdutosController extends BaseController {

  private service: ProdutosService;

  constructor() {
    super();
    this.service = new ProdutosService();
    this.bindMethods();
  }

  public async criarProdutos(req: Request, res: Response): Promise<void> {
    await this.executeMethod(async () => {
      const comentario = req.body.comentario;
      const nota = +req.body.nota;
      const idJogo = +req.body.idJogo;
      const idUsuario = +req.body.idUsuario;

      const review = await this.service.criarProdutos(comentario, nota, idJogo, idUsuario);

      res.status(200).json(review);
    }, req, res);
  }

  public async apagarProdutos(req: Request, res: Response): Promise<void> {
    await this.executeMethod(async () => {
      const id = +req.params.id;

      await this.service.apagarProdutos(id);

      res.status(200).json({ message: 'Produtos excluida com sucesso' });
    }, req, res);
  }
}
