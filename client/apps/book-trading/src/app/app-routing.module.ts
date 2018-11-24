import { BooksListComponent } from './books/books-list/books-list.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookFormComponent } from './books/book-form/book-form.component';

// ROUTES
// TODO: lazy loading stuff (angular routes)
const routes: Routes = [
  {
    path: '',
    redirectTo: '/books',
    pathMatch: 'full'
  },
  {
    path: 'books',
    component: BooksListComponent
  },
  {
    path: 'books/add',
    component: BookFormComponent
  },
  {
    path: 'sign-up',
    component: BookFormComponent
  },
  {
    path: '**',
    redirectTo: '/',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: false })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
