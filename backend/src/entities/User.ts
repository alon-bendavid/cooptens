import { IsEmail, IsStrongPassword, Length } from "class-validator";
import { Field, InputType, ObjectType } from "type-graphql";
import {
  BaseEntity,
  BeforeInsert,
  Column,
  Entity,
  PrimaryGeneratedColumn,
} from "typeorm";
import { hash } from "argon2";

export enum UserRole {
  Admin = "admin",
  Visitor = "visitor",
}

@Entity()
@ObjectType()
class User extends BaseEntity {
  static findAll(): User[] | PromiseLike<User[]> {
    throw new Error("Method not implemented.");
  }
  password: string;

  @BeforeInsert()
  async hashPassword() {
    this.hashedPassword = await hash(this.password);
  }

  @Field()
  @PrimaryGeneratedColumn()
  id: number;

  @Field()
  @Column({ unique: true })
  email: string;

  @Field()
  @Column()
  nickname: string;

  @Column()
  hashedPassword: string;

  @Column({
    default:
      "https://icons.veryicon.com/png/o/miscellaneous/standard/avatar-15.png",
  })
  @Field()
  avatar: string;
  

  @Field()
  @Column({ enum: UserRole, default: UserRole.Visitor })
  role: UserRole;
  
}

@InputType()
export class NewUserInput {
  @IsEmail()
  @Field()
  email: string;

  @Length(2, 30)
  @Field()
  nickname: string;

  @Length(2, 30)
  @Field({ nullable: true })
  avatar?: string;

  @Field()
  @IsStrongPassword()
  password: string;

  @Field()
  @IsStrongPassword()
  role: UserRole;
}

@InputType()
export class UpdateUserInput {

  @Length(2, 30)
  @Field({ nullable: true })
  nickname?: string;

  @Length(2, 30)
  @Field({ nullable: true })
  avatar?: string;


}

@InputType()
export class LoginInput {
  @IsEmail()
  @Field()
  email: string;

  @Field()
  @IsStrongPassword()
  password: string;
}

export default User;
