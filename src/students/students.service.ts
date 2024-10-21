import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Student } from './student.model';
import { CreateStudentDto, FilterStudentDto } from './dto/create-student.dto';
import { UpdateStudentDto } from './dto/update-student.dto';
import { Op } from 'sequelize';
@Injectable()
export class StudentService {
  constructor(
    @InjectModel(Student) private studentRepository: typeof Student,
  ) { }
  async create(createStudentDto: CreateStudentDto) {
    return await this.studentRepository.create(createStudentDto);
  }

  async findAll() {
    return await this.studentRepository.findAll({ include: { all: true } });
  }

  async findOne(id: number) {
    const check = await this.studentRepository.findByPk(id);
    if (!check) {
      throw new HttpException('Id notogri', HttpStatus.BAD_REQUEST);
    }
    return await this.studentRepository.findByPk(id);
  }

  async update(id: number, updateStudentDto: UpdateStudentDto) {
    const check = await this.studentRepository.findByPk(id);
    if (!check) {
      throw new HttpException('Id notogri', HttpStatus.BAD_REQUEST);
    }
    const newStudent = await this.studentRepository.update(
      {
        ...updateStudentDto,
      },
      { where: { id: id }, returning: true },
    );
    return newStudent;
  }

  async remove(id: number) {
    const check = await this.studentRepository.findByPk(id);
    if (!check) {
      throw new HttpException('Id notogri', HttpStatus.BAD_REQUEST);
    }
    await this.studentRepository.destroy({
      where: {
        id: +id,
      },
    });

    return check;
  }

  async filterByCause(cause: string) {
    const student = await this.studentRepository.findAll({
      where: {
        cause: {
          [Op.iLike]: `%${cause}%`,
        },
      },
    });
    return student
  }
  async filterByReasonOfStudy(query: string) {
    const student = await this.studentRepository.findAll({
      where: {
        reasonOfStudy: {
          [Op.iLike]: `%${query}%`,
        },
      },
    });
    return student
  }
  async filterByLengthofStudy(query: string) {
    const student = await this.studentRepository.findAll({
      where: {
        lengthofstudy: {
          [Op.iLike]: `%${query}%`,
        },
      },
    });
    return student
  }

  async filterByLiked(query: string) {
    const student = await this.studentRepository.findAll({
      where: {
        liked: {
          [Op.iLike]: `%${query}%`,
        },
      },
    });
    return student
  }

}
