import {Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn, ManyToOne} from "typeorm";
import {ArticleList} from "./ArticleList";

@Entity()
export class Comment {
    @PrimaryGeneratedColumn()
    id: number;

    @Column("text")
    content: string;

    @CreateDateColumn()
    created: Date;

    @UpdateDateColumn()
    updated: Date;

    @ManyToOne(type => ArticleList, article_list => article_list.comments, {onDelete: 'CASCADE', onUpdate: "CASCADE"})
    article: ArticleList;

}