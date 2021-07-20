import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, DeleteDateColumn, ManyToOne } from 'typeorm'
import GradebookAssignment from './gradebookAssignments.model'

@Entity('courses')
export default class Course {
  @PrimaryGeneratedColumn()
  @ManyToOne(() => GradebookAssignment)
  id: number

  @Column({ length: 128 })
  name: string

  @Column({ length: 16 })
  semester: string

  @Column({ length: 128 })
  number: string

  @Column({ name: 'start_date' })
  startDate: Date

  @Column({ name: 'end_date' })
  endDate: Date

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date

  @DeleteDateColumn({ name: 'deleted_at' })
  deletedAt?: Date
}
