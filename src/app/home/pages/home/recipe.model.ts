export class Recipe {
  title: string;
  image: string;
  description: string;
  likes: number;
  comments: number;
  id: number;

  constructor( title: string,
               image: string,
               description: string,
               likes: number,
               comments: number,
               id: number, ) {
    this.title = title;
    this.comments = comments
    this.description = description;
    this.likes = likes;
    this.comments = comments;
    this.id = id;
  }
}
