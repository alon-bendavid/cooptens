import { Field, InputType, ObjectType } from "type-graphql";
import {
  BaseEntity,
  BeforeInsert,
  Column,
  Entity,
  PrimaryGeneratedColumn,
} from "typeorm";

@Entity()
@ObjectType()
class Job extends BaseEntity {
  @Field()
  @PrimaryGeneratedColumn()
  id: number;

  @Field()
  @Column({ default: true })
  active: boolean;

  @Field()
  @Column()
  jobTitle: string;

  @Field()
  @Column()
  jobDescription: string;

  @Field()
  @Column()
  mission: string;

  @Field()
  @Column()
  profil: string;

  @Field()
  @Column()
  salary: string;

  @Field()
  @Column()
  jobType: string;

  @Field()
  @Column()
  location: string;
}

@InputType()
export class NewJobInput {
  @Field()
  jobTitle: string;

  @Field()
  jobDescription: string;

  @Field()
  location: string;

  @Field()
  active: boolean;

  @Field()
  mission: string;

  @Field()
  profil: string;

  @Field()
  salary: string;

  @Field()
  jobType: string;
}

export default Job;
