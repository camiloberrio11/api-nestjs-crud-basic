import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TasksModule } from './tasks/tasks.module';
@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'berrio',
      password: 'postgres',
      database: 'my_db',
      entities: ['dist/**/*.entity{.ts,.js}'],
      synchronize: false,
      retryAttempts: 10,
      retryDelay: 3000,
    }),
    TasksModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
