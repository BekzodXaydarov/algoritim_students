import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
  BadRequestException,
} from '@nestjs/common';
import { StudentService } from './students.service';
import { CreateStudentDto, FilterStudentDto } from './dto/create-student.dto';
import { UpdateStudentDto } from './dto/update-student.dto';
import { ApiOperation, ApiQuery, ApiTags } from '@nestjs/swagger';
import { Student } from './student.model';
import { callbackify } from 'util';
@ApiTags('Student')
@Controller('students')
export class StudentsController {
  constructor(private readonly studentsService: StudentService) { }

  @Post()
  create(@Body() createStudentDto: CreateStudentDto) {
    return this.studentsService.create(createStudentDto);
  }

  @Get()
  findAll() {
    return this.studentsService.findAll();
  }
  @Get('cause')
  // @ApiQuery({ name: 'cause', type: 'string' })
  getCause(@Query('cause') cause: string) {
    return this.studentsService.filterByCause(cause);
  }

  @Get('reasonOfStudy')
  // @ApiQuery({ name: 'cause', type: 'string' })
  getReasonOfStudy(@Query('reasonOfStudy') reasonOfStudy: string) {
    return this.studentsService.filterByReasonOfStudy(reasonOfStudy);
  }

  @Get('lengthOfStudy')
  // @ApiQuery({ name: 'cause', type: 'string' })
  getLengthOfStudy(@Query('lengthOfStudy') lengthOfStudy: string) {
    return this.studentsService.filterByLengthofStudy(lengthOfStudy);
  }

  @Get('liked')
  // @ApiQuery({ name: 'cause', type: 'string' })
  getLiked(@Query('liked') liked: string) {
    return this.studentsService.filterByLiked(liked);
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.studentsService.findOne(id)
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateStudentDto: UpdateStudentDto) {
    return this.studentsService.update(+id, updateStudentDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.studentsService.remove(+id);
  }


}
