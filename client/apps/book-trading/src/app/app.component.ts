import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Book Trading';

  links = [
    { path: '', icon: 'home', title: 'Home' },
    { path: 'books', icon: 'face', title: 'Books' },
    { path: 'books/add', icon: 'work', title: 'Add Book' }
  ];
}
