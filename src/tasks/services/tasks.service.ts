import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Task } from '../entities/task.entity';

interface TaskModel {
  name?: string;
  completed?: boolean;
}
@Injectable()
export class TasksService {
  constructor(@InjectRepository(Task) private taskRepo: Repository<Task>) {}

  findAll() {
    return this.taskRepo.find();
  }

  findOne(id: number) {
    return this.taskRepo.findOne(id);
  }

  create(body: TaskModel): Promise<Task> {
    const newTasks = this.taskRepo.create(body);
    return this.taskRepo.save(newTasks);
  }

  async update(id: number, body: TaskModel): Promise<Task> {
    const task = await this.taskRepo.findOne(id);
    this.taskRepo.merge(task, body);
    return this.taskRepo.save(task);
  }

  async delete(id: number): Promise<boolean> {
    await this.taskRepo.delete(id);
    return true;
  }
}
