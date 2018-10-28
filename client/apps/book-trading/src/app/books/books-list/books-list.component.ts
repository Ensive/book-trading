import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Book } from '@client/core-data';

@Component({
  selector: 'app-books-list',
  templateUrl: './books-list.component.html',
  styleUrls: ['./books-list.component.scss']
})
export class BooksListComponent implements OnInit {
  @Input() booksList: Book[];
  @Output() edited = new EventEmitter();
  @Output() deleted = new EventEmitter();
  constructor() {}

  ngOnInit() {}

  // TODO: discover
  // EventEmitter - naming convention
  // Output Angular 2 - naming
  // Angular general conventions

  handleEditBook(book) {
    this.edited.emit(book);
  }

  handleDeleteBook(bookId) {
    this.deleted.emit(bookId);
  }
}
