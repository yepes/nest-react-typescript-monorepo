import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Todo } from '@monorepo/common';
import { Repository } from 'typeorm';
import { CreateTodoDto, UpdateTodoDto } from '@monorepo/common';

@Injectable()
export class TodosService {
  constructor(
    @InjectRepository(Todo)
    private repository: Repository<Todo>,
  ) {}
  async create(createTodoDto: CreateTodoDto): Promise<Todo> {
    console.log(createTodoDto);
    const data = new Todo();
    data.title = createTodoDto.title;

    await this.repository.save(data);

    return data;
  }

  findAll() {
    return `This action returns all todos`;
  }

  findOne(id: number) {
    return `This action returns a #${id} todo`;
  }

  update(id: number, updateTodoDto: UpdateTodoDto) {
    return `This action updates a #${id} todo`;
  }

  remove(id: number) {
    return `This action removes a #${id} todo`;
  }
}
