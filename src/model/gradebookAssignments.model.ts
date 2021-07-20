import { 
  Entity, 
  Column, 
  PrimaryGeneratedColumn,
  OneToMany,
} from 'typeorm'

import Assignment from "./assignments.model"

import Course from "./courses.model"

@Entity('gradebookAssignments')
export default class GradebookAssignment {
  @PrimaryGeneratedColumn()
  id: number

  // assignment id
  @OneToMany(() => Assignment, assignment => assignment.id)
  assignments: Assignment[]

  // course id
  @OneToMany(() => Course, course => course.id)
  courses: Course[]

  @Column({ name: 'grading_release_date' })
  gradingReleaseDate: Date
}
