import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsOptional, IsEnum, IsDate, IsEmail, IsPhoneNumber } from 'class-validator';

export class CreateStudentDto {
  @ApiProperty({ example: 'Abdulaziz', description: 'Student first name' })
  @IsString({ message: 'First name must be a string' })
  readonly first_name: string;

  @ApiProperty({ example: 'Otam tufayli', description: 'Reason for joining' })
  @IsOptional()
  @IsString({ message: 'Cause must be a string' })
  readonly cause: string;

  @ApiProperty({ example: 'Education-system', description: 'What you liked the most' })
  @IsString({ message: 'Liked must be a string' })
  readonly liked: string;

  @ApiProperty({ example: 'Better quality education', description: 'What you wish to improve' })
  @IsString({ message: 'Wish must be a string' })
  readonly wish: string;

  @ApiProperty({ example: 'High-quality education', description: 'Reason for studying here' })
  @IsString({ message: 'Reason for study must be a string' })
  readonly reasonOfStudy: string;

  @ApiProperty({ example: 'Not sure', description: 'Future plans according to your parents' })
  @IsString({ message: 'Future plan must be a string' })
  readonly futurePlan: string;

  @ApiProperty({ example: 'Not interested', description: 'Discussion with parents about courses' })
  @IsString({ message: 'Parents talk must be a string' })
  readonly parentsTalk: string;

  @ApiProperty({ example: 'Professionalism', description: 'What you like about your teacher' })
  @IsString({ message: 'Teacher like must be a string' })
  readonly teacherLike: string;

  @ApiProperty({ example: 'Delivery service', description: 'Plans after certification' })
  @IsString({ message: 'Certificate must be a string' })
  readonly certificate: string;

  @ApiProperty({ example: '1 month', description: 'Duration of study at the center' })
  @IsString({ message: 'Length of study must be a string' })
  readonly lengthofstudy: string;  // Corrected here

  @ApiProperty({ example: 'Ikromov', description: 'Student last name' })
  @IsString({ message: 'Last name must be a string' })
  readonly last_name: string;

  @ApiProperty({ example: '+998938888038', description: 'Student phone number' })
  @IsOptional()
  @IsPhoneNumber('UZ', { message: 'Invalid phone number' })  // Use IsPhoneNumber decorator for stricter validation
  readonly phone: string;

  @ApiProperty({ example: 'abdulazizikromov09@gmail.com', description: 'Student email' })
  @IsOptional()
  @IsEmail({}, { message: 'Invalid email format' })  // Use IsEmail for stricter validation
  readonly email: string;

  @ApiProperty({ example: '2022-12-03', description: 'Student birth date' })
  readonly birth_date: Date;

  @ApiProperty({ example: 'male', description: 'Student gender' })
  @IsEnum(['male', 'female'], { message: 'Gender must be male or female' })  // Use IsEnum to validate specific values
  readonly gender: string;
}


export class FilterStudentDto {
  @IsOptional()
  @IsString()
  cause?: string;
}