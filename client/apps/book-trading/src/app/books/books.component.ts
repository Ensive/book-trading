import { Component, OnInit } from '@angular/core';
import { Book } from './book.model';
import { BooksService } from '@client/core-data';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss']
})
export class BooksComponent implements OnInit {
  currentBook: Book = {
    id: '',
    title: '',
    subtitle: '',
    description: ''
  };

  booksList$; //Observable<Book[]>;

  constructor(private http: HttpClient, private booksService: BooksService) {}

  ngOnInit() {
    this.getBooks();
  }

  selectBook(book) {
    this.currentBook = { ...book };
  }

  resetBook() {
    const emptyBook = {
      id: '',
      title: '',
      subtitle: '',
      description: ''
    };
    this.selectBook(emptyBook);
  }

  getBooks() {
    this.booksList$ = this.booksService.all();
  }

  saveBook(book) {
    if (book.id) {
      this.booksList = this.booksList.map(b => {
        if (b.id === book.id) {
          return book;
        }

        return b;
      });
    } else {
      book.id =
        '_' +
        Math.random()
          .toString(36)
          .substr(2, 9);
      this.booksList.unshift(book);
    }

    this.resetBook();
  }

  editBook(book) {
    this.selectBook(book);
  }

  deleteBook(bookId) {
    this.booksList = this.booksList.filter(({ id }) => {
      return id !== bookId;
    });
  }
}
