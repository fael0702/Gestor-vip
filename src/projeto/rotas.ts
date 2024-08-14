import { Express } from 'express';
import UsuarioRota from './usuario/usuario.rota';
import ReviewRota from './pagamentos/pagamentos.rota';
import JogadorRota from './jogadores/jogadores.rota';
import PagamentoRota from './pagamentos/pagamentos.rota';
import { authMiddleware } from '../middlewares/authMiddleware';
import PasswordResetRota from './passwordReset/passwordReset.rota';

export default class Rotas {
  private app: Express;
  private usuarioRota: UsuarioRota;
  private reviewRota: ReviewRota;
  private pagamentoRota: PagamentoRota;
  private jogadorRota: JogadorRota;
  private passwordResetRota: PasswordResetRota;
  
  constructor(app: Express) {
    this.app = app;
    this.usuarioRota = new UsuarioRota();
    this.reviewRota = new ReviewRota();
    this.pagamentoRota = new PagamentoRota();
    this.jogadorRota = new JogadorRota();
    this.passwordResetRota = new PasswordResetRota();
  }

  configurarRotas(): void {
    this.app.use('/usuario', this.usuarioRota.getRouter());
    this.app.use('/passwordReset', this.passwordResetRota.getRouter());
    this.app.use(authMiddleware);
    this.app.use('/jogador', this.jogadorRota.getRouter());
    this.app.use('/pagamento', this.pagamentoRota.getRouter());
    this.app.use('/pedido', this.reviewRota.getRouter());
    this.app.use('/produto', this.jogoRota.getRouter());
  }
}
