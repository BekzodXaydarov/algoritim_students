import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { SequelizeModule } from '@nestjs/sequelize';
import { ServeStaticModule } from '@nestjs/serve-static';
import { resolve } from 'path';
import { Student } from './students/student.model';
import { StudentsModule } from './students/students.module';
console.log(
  typeof process.env.POSTGRES_PASSWORD,
  process.env.POSTGRES_PASSWORD,
);
console.log(process.env.NODE_ENV);

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true
    }),
    // ServeStaticModule.forRoot({
    //   rootPath: resolve(__dirname, 'static'),
    // }),

    SequelizeModule.forRoot({
      dialect: 'postgres',
      host: process.env.DB_HOST,
      port: Number(process.env.DB_PORT),
      username: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      // password: String(process.env.POSTGRES_PASSWORD),
      database: process.env.DB_NAME,
      models: [Student],
      autoLoadModels: true,
      logging: false,
    }),
    StudentsModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule { }
