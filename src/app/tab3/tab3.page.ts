import { Component } from '@angular/core';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  isModalOpen = false;
  currentPost = {};


  private posts = [
    {
      title: 'Post 1',
      description: 'Delicioso copo de água',
      content:'aaaaa aaaaa  aaaaaaaaaa aaaaa  aaaaaaaaaa aaaaa  aaaaaaaaaa aaaaa  aaaaaaaaaa aaaaa  aaaaaaaaaa aaaaa  aaaaaaaaaa aaaaa  aaaaa'
    },
    {
      title: 'Post 2',
      description: 'Delicioso copo de água',
      content:'aaaaa aaaaa  aaaaaaaaaa aaaaa  aaaaaaaaaa aaaaa  aaaaaaaaaa aaaaa  aaaaaaaaaa aaaaa  aaaaaaaaaa aaaaa  aaaaaaaaaa aaaaa  aaaaa'
    },
    {
      title: 'Post 3',
      description: 'Delicioso copo de água',
      content:'aaaaa aaaaa  aaaaaaaaaa aaaaa  aaaaaaaaaa aaaaa  aaaaaaaaaa aaaaa  aaaaaaaaaa aaaaa  aaaaaaaaaa aaaaa  aaaaaaaaaa aaaaa  aaaaa'
    }
  ];

  constructor() {}

  setOpen(isOpen, post) {
    this.isModalOpen = isOpen;
    if (isOpen) {
      this.currentPost = post;
    }
  }
}
