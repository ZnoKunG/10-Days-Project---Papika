export class Post {
    userID!: Number;
    id!: Number;
    title!: string;
    description!: string;
    image!: MediaImage;
    createdAt!: Date;
    updatedAt!: Date;

    constructor(model: Post){
        Object.assign(this, model);
    }
}