import {Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, OneToMany} from "typeorm";
import {Comment} from "./Comment";

@Entity()
export class Article {
    @PrimaryGeneratedColumn()
    id: number;

    @Column("text")
    title: string;

    @Column("text")
    text: string;

    @CreateDateColumn()
    timestamp: Date;

    @Column("text")
    category: string;

    @Column("bool")
    is_article: boolean;

    @OneToMany(type => Comment, comment => comment.article)
    comments: Comment[];
}