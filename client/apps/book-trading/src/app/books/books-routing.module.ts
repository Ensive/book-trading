import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BooksComponent } from './books.component';
import { BookFormComponent } from './book-form/book-form.component';
import { BooksListComponent } from './books-list/books-list.component';

console.log('BookFormComponent', BookFormComponent);
const routes: Routes = [
  {
    path: '',
    component: BooksComponent,
    children: [
      {
        path: 'books/add',
        component: BookFormComponent
      },
      {
        path: 'books/list',
        component: BooksListComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class BooksRoutingModule {}
