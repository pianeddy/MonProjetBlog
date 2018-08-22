import { Component, OnInit, Input } from '@angular/core';
import { Post } from '../../Post';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.scss']
})
export class PostListItemComponent implements OnInit {

  @Input() post: Post;

  constructor() { }

  ngOnInit() {
  }

  getColor(): string {

    if (this.post.loveIts > 0) {
      return 'green';
    } else if (this.post.loveIts < 0) {
      return 'red';
    }

  }

  onLoveit(love: boolean) {

    if (love) { this.post.loveIts++;
    } else if (!love) { this.post.loveIts--; }

  }







}
