import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BooksRoutingModule } from './books-routing.module';
import { BooksComponent } from './books.component';
import { MaterialModule } from '@client/material';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [CommonModule, BooksRoutingModule, MaterialModule, FormsModule],
  exports: [BooksComponent],
  declarations: [BooksComponent]
})
export class BooksModule {}
