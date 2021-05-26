import { Int, ObjectType } from '@nestjs/graphql';
import { Table, Column, Model } from 'sequelize-typescript';
import { Field } from '@nestjs/graphql';
import {DataTypes} from 'sequelize';
@ObjectType()
@Table
export class User extends Model {

  @Column({primaryKey:true,type:DataTypes.STRING})
  @Field({nullable:true})
  id?:string;

  @Column
  @Field()
  username: string;


  @Column
  @Field()

  email: string;

  @Column
  @Field()
  password:string;
}