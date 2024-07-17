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
  @Column({default: true})
  active: boolean;


  @Field()
  @Column()
  jobTitle: string;
  
  @Field()
  @Column()
  jobDescription: string;

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

}




export default Job;














