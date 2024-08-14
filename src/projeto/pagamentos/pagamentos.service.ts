import { Pagamentos } from '../../entities/Pagamentos';
import JogoRepositorio from '../jogadores/jogadores.repositorio';
import UsuarioRepositorio from '../usuario/usuario.repositorio';
import PagamentosRepositorio from './pagamentos.repositorio';

export default class PagamentosService {
    private repositorio: PagamentosRepositorio;
    private jogoRepositorio: JogoRepositorio;
    private usuarioRepositorio: UsuarioRepositorio

    constructor() {
        this.repositorio = new PagamentosRepositorio();
        this.jogoRepositorio = new JogoRepositorio();
        this.usuarioRepositorio = new UsuarioRepositorio();
    }

    // public async pagamentosUsuario(id: number) {
    //     try {
    //         const pagamento = await this.repositorio.pagamentosUsuario(id);

    //         return pagamento;
    //     } catch (error) {
    //         console.error(error);
    //     }
    // }

    public async criarPagamento(titulo: string, link: string, valor: number): Promise<Pagamentos> {
        try {
            // const jaExiste = await this.repositorio.buscarPorJogo(idJogo);

            // if (jaExiste.length) {
            //     throw new Error('Já existe um usuário com esse email!');
            // }

            // const jogo = await this.jogoRepositorio.buscarPorId(idJogo);

            // const usuario = await this.usuarioRepositorio.buscarPorId(idUsuario);

            const pagamento = new Pagamentos();
            pagamento.titulo = titulo;
            pagamento.link = link;
            pagamento.valor = valor;

            await this.repositorio.salvar(pagamento);
            return pagamento;
        } catch (error) {
            console.error(error);
            throw new Error('Erro ao criar pagamento');
        }
    }

    // public async apagarPagamento(id: number) {
    //     try {
    //         await this.repositorio.excluir(id);
    //     } catch (error) {
    //         console.error(error);
    //         throw new Error('Erro excluir pagamento');
    //     }
    // }
}
