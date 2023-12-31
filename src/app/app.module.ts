import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { BrowserModule } from "@angular/platform-browser";
import { BooksComponent } from './books/books.component';
import { FormsModule } from "@angular/forms";
import { BookComponent } from './book/book.component';

@NgModule ({
    declarations: [AppComponent, BooksComponent, BookComponent],
    imports: [BrowserModule, FormsModule],
    bootstrap: [AppComponent] //This is always the very first document to load
})

export class AppModule {}