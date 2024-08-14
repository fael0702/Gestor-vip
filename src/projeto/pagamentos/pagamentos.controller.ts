import { Response, Request } from 'express';
import PagamentosService from './pagamentos.service';
import BaseController from '../../bases/BaseController';

export default class PagamentosController extends BaseController {

  private service: PagamentosService;

  constructor() {
    super();
    this.service = new PagamentosService();
    this.bindMethods();
  }

  public async criarPagamento(req: Request, res: Response): Promise<void> {
    await this.executeMethod(async () => {
      const titulo = req.body.titulo;
      const link = req.body.link;
      const valor = +req.body.valor;

      const pagamento = await this.service.criarPagamento(titulo, link, valor);

      res.status(200).json(pagamento);
    }, req, res);
  }

  // public async apagarPagamentos(req: Request, res: Response): Promise<void> {
  //   await this.executeMethod(async () => {
  //     const id = +req.params.id;

  //     await this.service.apagarPagamento(id);

  //     res.status(200).json({ message: 'Pagamentos excluida com sucesso' });
  //   }, req, res);
  // }
}
