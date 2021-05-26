import { Field, ObjectType } from "@nestjs/graphql";
import { Column, Model, Table } from "sequelize-typescript";
import {DataTypes} from 'sequelize';

@ObjectType()
@Table
export class Follow extends Model{
    @Column({primaryKey:true,type:DataTypes.STRING})
    @Field({nullable:true})
    id?:string;

    @Column({type:DataTypes.STRING,references:{model:'Users',key:'id'},})
    @Field()
    follower:string;

    @Column({type:DataTypes.STRING,references:{model:'Users',key:'id'},})
    @Field()
    followed:string;
}