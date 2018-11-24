import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from './auth/auth.service';
import { BooksService } from './books/books.service';

@NgModule({
  imports: [CommonModule],
  providers: [BooksService, AuthService]
})
export class CoreDataModule {}
