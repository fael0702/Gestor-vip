import { EntityManager, Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { Produtos } from "../../entities/Produtos";


export default class ProdutosRepositorio extends Repository<Produtos>{
  private repositorio: Repository<Produtos>;

  constructor(
    private entityManager?: EntityManager
  ) {
    super(Produtos, entityManager);
    this.repositorio = AppDataSource.getRepository(Produtos);
  }

  public async salvar(review: Produtos): Promise<Produtos> {
    try {
      return this.repositorio.save(review);
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
      throw new Error('Erro ao excluir review');
    }
  }
}