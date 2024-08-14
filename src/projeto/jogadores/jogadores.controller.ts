import { Response, Request } from 'express';
import JogadoresService from './jogadores.service';
import BaseController from '../../bases/BaseController';

export default class JogadoresController extends BaseController {

  private service: JogadoresService;

  constructor() {
    super();
    this.service = new JogadoresService();
    this.bindMethods();
  }

  public async criarJogador(req: Request, res: Response): Promise<void> {
    await this.executeMethod(async () => {
      const nome = req.body.nome;
      const img = req.body.img;
      const dataLanc = req.body.data_lancamento;

      const Jogador = await this.service.criarJogador(nome, img, dataLanc);

      res.status(200).json(Jogador);
    }, req, res);
  }

  // public async buscarPorNome(req: Request, res: Response): Promise<void> {
  //   await this.executeMethod(async () => {
  //     const nome = req.params.nome;

  //     const Jogador = await this.service.buscarPorNome(nome);
  //     res.status(200).json(Jogador);
  //   }, req, res);
  // }

}
