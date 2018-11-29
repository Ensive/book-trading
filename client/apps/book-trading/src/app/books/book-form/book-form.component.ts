import { Component, OnInit } from '@angular/core';
import { Book, BooksService } from '@client/core-data';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-book-form',
  templateUrl: './book-form.component.html',
  styleUrls: ['./book-form.component.scss']
})
export class BookFormComponent implements OnInit {
  originalTitle;
  currentBook: Book = {
    id: '',
    title: '',
    subtitle: '',
    description: ''
  };

  constructor(
    private booksService: BooksService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.route.params.subscribe((params: Book) => {
      this.currentBook = { ...params };
      this.originalTitle = params.title;
    });
  }

  saveBook(book) {
    if (book.id) {
      this.updateBook(book);
    } else {
      this.createBook(book);
    }
  }

  updateBook(book) {
    this.booksService.update(book).subscribe(() => this.redirectToBooks());
  }

  createBook(book) {
    // book.id = getId();

    this.booksService.create(book).subscribe(() => this.redirectToBooks());
  }

  redirectToBooks() {
    this.router.navigate(['books']);
  }
}

// function getId() {
//   return (
//     '_' +
//     Math.random()
//       .toString(36)
//       .substr(2, 9)
//   );
// }
