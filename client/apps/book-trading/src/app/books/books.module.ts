import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BooksRoutingModule } from './books-routing.module';
import { MaterialModule } from '@client/material';
import { FormsModule } from '@angular/forms';
import { BooksListComponent } from './books-list/books-list.component';
import { BookFormComponent } from './book-form/book-form.component';

@NgModule({
  imports: [CommonModule, BooksRoutingModule, MaterialModule, FormsModule],
  declarations: [BooksListComponent, BookFormComponent]
})
export class BooksModule {}
