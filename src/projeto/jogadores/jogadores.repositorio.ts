import { EntityManager, Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { Jogadores } from "../../entities/Jogadores";


export default class JogadoresRepositorio extends Repository<Jogadores>{
  private repositorio: Repository<Jogadores>;

  constructor(
    private entityManager?: EntityManager
  ) {
    super(Jogadores, entityManager);
    this.repositorio = AppDataSource.getRepository(Jogadores);
  }

  public async buscarPorSteamId(steamId: string): Promise<Jogadores> {
    try {
      const jogador = this.repositorio.findOneBy({ steam_id: steamId })
      return jogador;
    } catch (error) {
      console.error(error);
    }
  }

  public async buscarPorId(id: number): Promise<Jogadores> {
    try {
      const jogador = this.repositorio.findOneBy({ id })
      return jogador;
    } catch (error) {
      console.error(error);
    }
  }

  public async salvar(jogador: Jogadores): Promise<Jogadores> {

    try {
      return this.repositorio.save(jogador);
    } catch (error) {
      console.error(error);
      throw new Error(error);
    }

  }
}