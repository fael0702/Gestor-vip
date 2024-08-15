import { Pedidos } from '../../entities/Pedidos';
import JogoRepositorio from '../jogadores/jogadores.repositorio';
import UsuarioRepositorio from '../usuario/usuario.repositorio';
import PedidoRepositorio from './pedidos.repositorio';

export default class PedidoService {
    private repositorio: PedidoRepositorio;

    constructor() {
        this.repositorio = new PedidoRepositorio();
    }

    // public async pedidoUsuario(id: number) {
    //     try {
    //         const pedido = await this.repositorio.pedidoUsuario(id);

    //         return pedido;
    //     } catch (error) {
    //         console.error(error);
    //     }
    // }

    public async criarPedido(jogadorId: number, valor: number, taxa: number, status: string): Promise<Pedidos> {
        try {
            // const jaExiste = await this.repositorio.buscarPorJogo(idJogo);

            // if (jaExiste.length) {
            //     throw new Error('Já existe um usuário com esse email!');
            // }

            // const jogador = await this.jogoRepositorio.buscarPorId(idJogo);

            // const usuario = await this.usuarioRepositorio.buscarPorId(idUsuario);

            const pedido = new Pedidos();
            // pedido.comentario = comentario;
            // pedido.nota = nota;
            // pedido.jogo = jogo;
            // pedido.usuario = usuario;

            await this.repositorio.salvar(pedido);
            return pedido;
        } catch (error) {
            console.error(error);
            throw new Error('Erro ao criar pedido');
        }
    }

    public async apagarPedido(id: number) {
        try {
            await this.repositorio.excluir(id);
        } catch (error) {
            console.error(error);
            throw new Error('Erro excluir pedido');
        }
    }
}
