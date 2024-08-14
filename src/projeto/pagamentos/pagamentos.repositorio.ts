import { EntityManager, Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { Pagamentos } from "../../entities/Pagamentos";


export default class PagamentosRepositorio extends Repository<Pagamentos>{
  private repositorio: Repository<Pagamentos>;

  constructor(
    private entityManager?: EntityManager
  ) {
    super(Pagamentos, entityManager);
    this.repositorio = AppDataSource.getRepository(Pagamentos);
  }

  public async pagamentosUsuario(id: number) {
    try {
      const qb = this.repositorio.createQueryBuilder('r')
        .innerJoinAndSelect('r.usuario', 'u')
        .innerJoinAndSelect('r.jogo', 'j')
        .where('r.usuario_id = :id')
        .setParameters({ id })

      return await qb.getMany()
    } catch (error) {
      console.error(error);
    }
  }

  public async buscarPorJogo(id: number) {
    try {
      const qb = this.repositorio.createQueryBuilder('r')
        .innerJoinAndSelect('r.jogo', 'j')
        .where('r.jogo_id = :id')
        .setParameters({ id })

      return await qb.getMany()
    } catch (error) {
      console.error(error);
    }
  }

  public async salvar(pagamento: Pagamentos): Promise<Pagamentos> {
    try {
      return this.repositorio.save(pagamento);
    } catch (error) {
      console.error(error);
      throw new Error(error);
    }
  }

  public async excluir(id: number) {
    try {
      const result = await this.repositorio.softDelete({ id });
      return result;
    } catch (error) {
      console.error(error);
      throw new Error('Erro ao excluir pagamento');
    }
  }
}