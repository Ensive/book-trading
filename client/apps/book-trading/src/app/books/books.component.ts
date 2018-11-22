import { Component, OnInit } from '@angular/core';
import { Book, BooksService } from '@client/core-data';
import { HttpClient } from '@angular/common/http';
// import { Observable } from 'rxjs';

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

  booksList$; // Observable<Book[]>

  constructor(private http: HttpClient, private booksService: BooksService) {}

  ngOnInit() {
    // this.getBooks();
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

  // TODO: sorting
  // getBooks() {
  //   this.booksList$ = this.booksService.all();
  // }

  // saveBook(book) {
  //   if (book.id) {
  //     this.updateBook(book);
  //   } else {
  //     this.createBook(book);
  //   }
  // }

  // createBook(book) {
  //   book.id = getId();
  //   this.booksService.create(book).subscribe(() => {
  //     this.getBooks();
  //     this.resetBook();
  //   });
  // }

  // updateBook(book) {
  //   this.booksService.update(book).subscribe(() => {
  //     this.getBooks();
  //     this.resetBook();
  //   });
  // }

  // editBook(book) {
  //   this.selectBook(book);
  // }

  // deleteBook(bookId) {
  //   this.booksService
  //     .delete(bookId)
  //     .subscribe(
  //       () => this.getBooks(),
  //       error => console.error('Something wrong happened', error)
  //     );
  // }
}

function getId() {
  return (
    '_' +
    Math.random()
      .toString(36)
      .substr(2, 9)
  );
}
