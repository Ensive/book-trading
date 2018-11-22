import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Book, BooksService } from '@client/core-data';
import { Router } from '@angular/router';

@Component({
  selector: 'app-book-form',
  templateUrl: './book-form.component.html',
  styleUrls: ['./book-form.component.scss']
})
export class BookFormComponent implements OnInit {
  currentBook: Book = {
    id: '',
    title: '',
    subtitle: '',
    description: ''
  };

  originalTitle;
  @Output() saved = new EventEmitter();

  // TODO: @Input set (explore)
  @Input()
  set book(value) {
    // TODO: do we have problems here?
    if (value) this.originalTitle = value.title;
    this.currentBook = { ...value };
  }

  constructor(private booksService: BooksService, private router: Router) {}

  ngOnInit() {}


  saveBook(book) {
    if (book.id) {
      // this.updateBook(book);
    } else {
      this.createBook(book);
    }
  }

  createBook(book) {
    book.id = getId();
    this.booksService.create(book).subscribe(() => {
      this.router.navigate(['books']);
      // this.getBooks();
      // this.resetBook();
    });
  }

  // handleSaveBook(book) {
  //   this.saved.emit(book);
  // }

  getTitle() {
    if (this.currentBook && this.currentBook.title) {
      return this.currentBook.title;
    }
  }
}

function getId() {
  return (
    '_' +
    Math.random()
      .toString(36)
      .substr(2, 9)
  );
}
