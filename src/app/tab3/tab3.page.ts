import { Component } from '@angular/core';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  isModalOpen = false;
  currentPost: Post | null = null;


  private posts: Post[] = [
    {
      title: 'Lorem ipsum dolor sit amet',
      description: 'Integer a magna sed mi luctus venenatis quis vitae dui.',
      content:' Maecenas convallis mollis nulla, nec lobortis sapien fermentum at.',
      liked: false
    },
    {
      title: 'Lorem ipsum dolor sit amet',
      description: 'Delicioso copo de água',
      content:'Nulla convallis aliquam augue, vel lacinia ligula tincidunt tincidunt. Cras iaculis pulvinar tempus.',
      liked: false
    },
    {
      title: 'Lorem ipsum dolor sit amet',
      description: 'Curabitur euismod interdum varius',
      content:'Phasellus fringilla metus mauris, non blandit justo tempus eget. Nulla non ex a lacus ornare fringilla sit amet vel risus.',
      liked: false
    }
  ];

  constructor() {}

  setOpen(isOpen, post) {
    this.isModalOpen = isOpen;
    if (isOpen) {
      this.currentPost = post;
    }
  }

  likePost() {
    this.currentPost.liked = !this.currentPost.liked;
  }
}

interface Post {
  title: string;
  description: string;
  content: string;
  liked: boolean;
}
