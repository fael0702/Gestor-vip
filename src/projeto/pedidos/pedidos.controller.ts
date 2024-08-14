import { Response, Request } from 'express';
import PedidosService from './pedidos.service';
import BaseController from '../../bases/BaseController';

export default class PedidosController extends BaseController {

  private service: PedidosService;

  constructor() {
    super();
    this.service = new PedidosService();
    this.bindMethods();
  }

  public async criarPedido(req: Request, res: Response): Promise<void> {
    await this.executeMethod(async () => {
      const comentario = req.body.comentario;
      const nota = +req.body.nota;
      const idJogo = +req.body.idJogo;
      const idUsuario = +req.body.idUsuario;

      const pedido = await this.service.criarPedido(comentario, nota, idJogo, idUsuario);

      res.status(200).json(pedido);
    }, req, res);
  }

  // public async pedidosUsuario(req: Request, res: Response): Promise<void> {
  //   await this.executeMethod(async () => {
  //     const usuarioId = +req.params.id;

  //     const pedido = await this.service.pedidosUsuario(usuarioId);

  //     if (pedido.length) {
  //       res.status(200).json(pedido);
  //     } else {
  //       res.status(404).json({ message: 'Não foi encontrado nenhuma pedido para esse usuário' });
  //     }
  //   }, req, res);
  // }

  // public async apagarPedidos(req: Request, res: Response): Promise<void> {
  //   await this.executeMethod(async () => {
  //     const id = +req.params.id;

  //     await this.service.apagarPedido(id);

  //     res.status(200).json({ message: 'Pedidos excluida com sucesso' });
  //   }, req, res);
  // }
}
