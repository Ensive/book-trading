import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BookFormComponent } from './book-form/book-form.component';
import { BooksListComponent } from './books-list/books-list.component';

const bookRoutes: Routes = [
  {
    path: 'books',
    children: [
      {
        path: '',
        component: BooksListComponent
      },
      {
        path: 'add',
        component: BookFormComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(bookRoutes)],
  exports: [RouterModule]
})
export class BooksRoutingModule {}
