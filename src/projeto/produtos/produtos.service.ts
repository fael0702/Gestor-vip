import { Produtos } from '../../entities/Produtos';
import JogoRepositorio from '../jogadores/jogadores.repositorio';
import UsuarioRepositorio from '../usuario/usuario.repositorio';
import ProdutosRepositorio from './produtos.repositorio';

export default class ProdutosService {
    private repositorio: ProdutosRepositorio;

    constructor() {
        this.repositorio = new ProdutosRepositorio();
    }

    public async criarProdutos(comentario: string, nota: number, idJogo: number, idUsuario: number): Promise<Produtos> {
        try {
            // const jaExiste = await this.repositorio.buscarPorJogo(idJogo);

            // if (jaExiste.length) {
            //     throw new Error('Já existe um usuário com esse email!');
            // }

            // const jogo = await this.jogoRepositorio.buscarPorId(idJogo);

            // const usuario = await this.usuarioRepositorio.buscarPorId(idUsuario);

            const produto = new Produtos();
            // produto.comentario = comentario;
            // produto.nota = nota;
            // produto.jogo = jogo;
            // produto.usuario = usuario;

            await this.repositorio.salvar(produto);
            return produto;
        } catch (error) {
            console.error(error);
            throw new Error('Erro ao criar produto');
        }
    }

    public async apagarProdutos(id: number) {
        try {
            await this.repositorio.excluir(id);
        } catch (error) {
            console.error(error);
            throw new Error('Erro excluir produto');
        }
    }
}
