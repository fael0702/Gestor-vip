import { Jogadores } from "../../entities/Jogadores";
import JogadoresRepositorio from "./jogadores.repositorio";

export default class JogadoresService {

    private repositorio: JogadoresRepositorio;

    constructor() {
        this.repositorio = new JogadoresRepositorio();
    }

    public async criarJogador(nick: string, steamId: string, email: string): Promise<Jogadores> {
        try {
            const jaExiste = await this.repositorio.buscarPorSteamId(steamId);

            if (jaExiste) {
                throw new Error('Já existe um Jogador com esse nome!');
            }

            const Jogador = new Jogadores();
            Jogador.nickname = nick;
            Jogador.steam_id = steamId;
            Jogador.email = email;

            await this.repositorio.salvar(Jogador);
            return Jogador;
        } catch (error) {
            console.error(error);
            throw new Error('Erro ao criar usuário');
        }
    }

}
