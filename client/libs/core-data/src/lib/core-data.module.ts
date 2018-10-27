import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BooksService } from './books/books.service'

@NgModule({
  imports: [CommonModule],
  providers: [BooksService]
})
export class CoreDataModule {}
