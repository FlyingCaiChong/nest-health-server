import { Injectable } from '@nestjs/common';
import { CreateHomeDto } from './dto/create-home.dto';
import { UpdateHomeDto } from './dto/update-home.dto';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Home } from './entities/home.entity';

@Injectable()
export class HomeService {
  constructor(
    @InjectRepository(Home)
    private homeRepository: Repository<Home>,
  ) {}

  async create(createHomeDto: CreateHomeDto): Promise<Home> {
    const home = this.homeRepository.create(createHomeDto);
    return this.homeRepository.save(home);
  }

  findAll(): Promise<Home[]> {
    return this.homeRepository.find();
  }

  findOne(id: number): Promise<Home | null> {
    return this.homeRepository.findOneBy({ id });
  }

  update(id: number, updateHomeDto: UpdateHomeDto) {
    console.log(
      '🚀 ~ file: home.service.ts:29 ~ HomeService ~ update ~ updateHomeDto:',
      updateHomeDto,
    );
    return `This action updates a #${id} home`;
  }

  async remove(id: number): Promise<void> {
    await this.homeRepository.delete(id);
  }
}
