import { Component } from '@angular/core';

interface Book {
  name: string;
  author: string;
  image: string;
  amount: number
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
      author: 'robert c martin',
      image: 'https://m.media-amazon.com/images/I/41xShlnTZTL._SX376_BO1,204,203,200_.jpg',
      amount: 700,
    },
    {
      name: 'The Pragmatic Programmer',
      author: 'david thomas',
      image: 'https://m.media-amazon.com/images/I/51A8l+FxFNL.jpg',
      amount: 800,
    }
  ]

  isShowing: boolean = true;

  // toggleBooks() {
  //   this.isShowing = !this.isShowing;
  // }
  
}
