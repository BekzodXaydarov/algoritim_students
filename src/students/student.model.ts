import { Column, DataType, Model, Table } from 'sequelize-typescript';
import { ApiProperty } from '@nestjs/swagger';

@Table({ tableName: 'student' })
export class Student extends Model<Student> {
  @ApiProperty({ example: '1', description: 'Unique ID' })
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @ApiProperty({ example: 'Abdulaziz', description: 'Student first name' })
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  first_name: string;

  @ApiProperty({ example: 'Ikromov', description: 'Student last name' })
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  last_name: string;

  @ApiProperty({
    example: '+998938888038',
    description: 'Student phone number',
  })
  @Column({
    type: DataType.STRING,
    allowNull: false,
    unique: true,
  })
  phone: string;

  @ApiProperty({ example: '17.09.2004', description: 'Student birth date' })
  @Column({
    type: DataType.DATE,
    allowNull: false,
  })
  birth_date: Date;

  // Other fields below can follow similar structure

  @ApiProperty({
    example: 'Otam tufayli',
    description: 'Kim yoki qanday kelgani',
  })
  @Column({ type: DataType.STRING })
  cause: string;

  @ApiProperty({
    example: 'education-system',
    description: 'Nimadan ko’nlingiz to’lgan?',
  })
  @Column({ type: DataType.STRING })
  liked: string;

  @ApiProperty({
    example: "Talim sifati bo'lishini",
    description: 'Yana nimalar bo’lishini istardingiz?',
  })
  @Column({ type: DataType.STRING })
  wish: string;

  @ApiProperty({
    example: "Ta'lim sifati yaxshi",
    description: 'Bizda nima uchun o’qiyapsiz?',
  })
  @Column({ type: DataType.STRING })
  reasonOfStudy: string;

  @ApiProperty({
    example: 'Bilmadim',
    description: 'Kelajakda kim bo’lishingizni ota-onangiz qanday ko’rishadi?',
  })
  @Column({ type: DataType.STRING })
  futurePlan: string;

  @ApiProperty({
    example: 'Qiziq emas',
    description: 'Ota-onangiz bilan kurslarimiz haqida nimalarni gaplashasiz?',
  })
  @Column({ type: DataType.STRING })
  parentsTalk: string;

  @ApiProperty({
    example: 'Professional ekanligi',
    description: 'O’qituvchingiz qaysi hislatlari sizga yoqadi?',
  })
  @Column({ type: DataType.STRING })
  teacherLike: string;

  @ApiProperty({
    example: 'Uzumda dostavkachilik qilaman',
    description: 'Kursni tamomlab sertifikatlar oldingiz?',
  })
  @Column({ type: DataType.STRING })
  certificate: string;

  @ApiProperty({
    example: '1 oy',
    description: 'Algoritm Ta’limda qanchadan beri o’qiyapsiz?',
  })
  @Column({ type: DataType.STRING })
  lengthofstudy: string;
}
