import { Module } from '@nestjs/common';
import { StudentService } from './students.service';
import { StudentsController } from './students.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Student } from './student.model';
@Module({
  imports: [SequelizeModule.forFeature([Student]), ],
  controllers: [StudentsController],
  providers: [StudentService],
  exports: [StudentService],
})
export class StudentsModule {}
