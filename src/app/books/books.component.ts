import { Component } from '@angular/core';

interface Book {
  name: string;
  author: string;
  image: string;
}

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent {

  books: Book[] = [
    {
      name: 'Clean Code',
      author: 'Robert C Martin',
      image: 'https://m.media-amazon.com/images/I/41xShlnTZTL._SX376_BO1,204,203,200_.jpg',
    },
    {
      name: 'The Pragmatic Programmer',
      author: 'David Thomas',
      image: 'https://m.media-amazon.com/images/I/51A8l+FxFNL.jpg',
    }
  ]

  isShowing: boolean = true;

  // toggleBooks() {
  //   this.isShowing = !this.isShowing;
  // }
  
}
