import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { BooksService } from '@client/core-data';

interface Response {
  message: string;
}

@Component({
  selector: 'app-books-list',
  templateUrl: './books-list.component.html',
  styleUrls: ['./books-list.component.scss']
})
export class BooksListComponent implements OnInit {
  booksList$;
  message;
  isMessageVisible = false;

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
    this.booksService.delete(bookId).subscribe(
      (response: Response) => {
        this.showMessage(response.message);
        setTimeout(this.hideMessage, 3000);
        this.getBooks();
      },
      error => console.error('Something wrong happened', error)
    );
  }

  showMessage(message) {
    this.isMessageVisible = true;
    this.message = message;
  }

  hideMessage() {
    this.isMessageVisible = false;
    this.message = '';
  }
}
