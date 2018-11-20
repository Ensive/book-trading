import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BooksComponent } from './books/books.component';
import { BookFormComponent } from './books/book-form/book-form.component';
// import { CustomersComponent } from './customers/customers.component';

// ROUTES
// TODO: lazy loading stuff (angular routes)
const routes: Routes = [
  {
    path: '',
    component: BooksComponent,
  },
  {
    path: 'books',
    component: BooksComponent
  },
  // {
  //   path: 'books/add',
  //   component: BookFormComponent
  // },
  {
    path: '**',
    redirectTo: '/',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: true })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
