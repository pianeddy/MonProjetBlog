import { Component } from '@angular/core';
import { Post } from '../Post';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  post1: Post;
  post2: Post;
  post3: Post;
  posts: Post[];

  constructor() {
    this.post1 = new Post('Mon premier post', 'Ceci est le premier post');
    this.post2 = new Post('Mon deuxième post', 'Ceci est le deuxième post qui a été encodé dans le fichier');
    this.post3 = new Post('Mon troisème post', 'Le troisème post qui contient le bonus : créez un type pour les post, appelé Post, ' +
      'afin de rendre votre code plus lisible.  Vous pouvez même y intégrer un constructeur qui attribue automatiquement ' +
      'la date ! ');


    this.posts = new Array();
    this.posts.push(this.post1);
    this.posts.push(this.post2);
    this.posts.push(this.post3);

  }



}
