import { Component } from '@angular/core';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  public posts = [
    {
      title: 'Lorem Ipsum Dolor',
      description: 'Neque porro quisquam est qui dolorem',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sagittis est vel enim venenatis ultricies.'
    },
    {
      title: 'Neque porro quisquam',
      description: 'Etiam sagittis est vel enim venenatis ultricies',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sagittis est vel enim venenatis ultricies.'
    },
    {
      title: 'Fusce tincidunt euismod ex?',
      description: 'Neque porro quisquam est qui dolorem',
      content: 'Aenean non purus nunc. Morbi eu quam odio. Pellentesque tincidunt ornare nisl, quis volutpat nisi efficitur in. Integer.'
    }
  ];

  constructor() {}

}
