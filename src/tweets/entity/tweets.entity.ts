import { Field, ObjectType } from "@nestjs/graphql";
import { Column, Model, Table  } from "sequelize-typescript";
import {DataTypes} from "sequelize";

@ObjectType()
@Table
export class Tweets extends Model{
@Column({primaryKey:true,type:DataTypes.STRING})
@Field({nullable:true})
id?:string

@Column 
@Field()
content:string

@Column({references:{model:'Users',key:'id'},type:DataTypes.STRING}) 
@Field()
userId:string


@Column 
@Field({nullable:true})
like?:number
}