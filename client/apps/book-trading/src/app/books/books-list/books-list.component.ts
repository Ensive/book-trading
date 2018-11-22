import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Book, BooksService } from '@client/core-data';

@Component({
  selector: 'app-books-list',
  templateUrl: './books-list.component.html',
  styleUrls: ['./books-list.component.scss']
})
export class BooksListComponent implements OnInit {
  booksList$;

  constructor(private booksService: BooksService) {}

  ngOnInit() {
    this.getBooks();
  }

  getBooks() {
    this.booksList$ = this.booksService.all();
  }

  deleteBook(bookId) {
    this.booksService
      .delete(bookId)
      .subscribe(
        () => this.getBooks(),
        error => console.error('Something wrong happened', error)
      );
  }




  // @Input() booksList: Book[];
  // @Output() edited = new EventEmitter();
  // @Output() deleted = new EventEmitter();

  // TODO: discover
  // EventEmitter - naming convention
  // Output Angular 2 - naming
  // Angular general conventions

  // handleEditBook(book) {
  //   this.edited.emit(book);
  // }

  // handleDeleteBook(bookId) {
  //   this.deleted.emit(bookId);
  // }
}
