import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Book } from '@client/core-data';

@Component({
  selector: 'app-book-form',
  templateUrl: './book-form.component.html',
  styleUrls: ['./book-form.component.scss']
})
export class BookFormComponent implements OnInit {
  currentBook: Book;
  originalTitle;
  @Output() saved = new EventEmitter();

  // TODO: @Input set (explore)
  @Input()
  set book(value) {
    // TODO: do we have problems here?
    if (value) this.originalTitle = value.title;
    this.currentBook = { ...value };
  }

  constructor() {}

  ngOnInit() {}

  handleSaveBook(book) {
    this.saved.emit(book);
  }

  getTitle() {
    if (this.currentBook && this.currentBook.title) {
      return this.currentBook.title;
    }
  }
}
