import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { BooksService } from '@client/core-data';

@Component({
  selector: 'app-books-list',
  templateUrl: './books-list.component.html',
  styleUrls: ['./books-list.component.scss']
})
export class BooksListComponent implements OnInit {
  booksList$;

  constructor(private router: Router, private booksService: BooksService) {}

  ngOnInit() {
    this.getBooks();
  }

  getBooks() {
    this.booksList$ = this.booksService.all();
  }

  editBook(book) {
    this.router.navigate(['books/add', book]);
  }

  deleteBook(bookId) {
    this.booksService
      .delete(bookId)
      .subscribe(
        () => this.getBooks(),
        error => console.error('Something wrong happened', error)
      );
  }
}
