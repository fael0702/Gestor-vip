import { EntityManager, Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { Pedidos } from "../../entities/Pedidos";


export default class ReviewRepositorio extends Repository<Pedidos>{
  private repositorio: Repository<Pedidos>;

  constructor(
    private entityManager?: EntityManager
  ) {
    super(Pedidos, entityManager);
    this.repositorio = AppDataSource.getRepository(Pedidos);
  }

  public async salvar(Pedidos: Pedidos): Promise<Pedidos> {
    try {
      return this.repositorio.save(Pedidos);
    } catch (error) {
      console.error(error);
      throw new Error(error);
    }
  }

  public async excluir(id: number) {
    try {
      const result = await this.repositorio.delete({ id });
      return result;
    } catch (error) {
      console.error(error);
      throw new Error('Erro ao excluir pedidos');
    }
  }
}