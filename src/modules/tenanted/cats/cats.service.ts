import { Inject, Injectable } from '@nestjs/common';
import { DataSource, Repository } from 'typeorm';
import { CreateCatDto } from './dto/create-cat.dto';
import { Cat } from './cat.entity';
import { TENANT_DATA_SOURCE } from '../../tenancy/consts';

@Injectable()
export class CatsService {
  private readonly catsRepository: Repository<Cat>;

  constructor(@Inject(TENANT_DATA_SOURCE) dataSource: DataSource) {
    this.catsRepository = dataSource.getRepository(Cat);
  }

  create(createCatDto: CreateCatDto): Promise<Cat> {
    const cat = new Cat();
    cat.name = createCatDto.name;

    return this.catsRepository.save(cat);
  }

  async findAll(): Promise<Cat[]> {
    return this.catsRepository.find();
  }
}
