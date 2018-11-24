import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BookFormComponent } from './book-form/book-form.component';
import { BooksListComponent } from './books-list/books-list.component';

console.log('BookFormComponent', BookFormComponent);
const bookRoutes: Routes = [
  // TODO: Investigate children routing;
  // {
  //   path: 'books',
  //   component: BooksListComponent
  // },
  // {
  //   path: 'books/add',
  //   component: BookFormComponent
  // }
];

@NgModule({
  imports: [RouterModule.forChild(bookRoutes)],
  exports: [RouterModule]
})
export class BooksRoutingModule {}
