import { Component } from '@angular/core';
import { Book } from '../types/Book';

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
    },
    {
      name: 'Modern Software Engineering',
      author: 'David Farley',
      image: 'https://m.media-amazon.com/images/I/51YZ7o1Y9JL.jpg',
      amount: 450,
    },
    {
      name: 'The Kubernetes Book',
      author: 'Nigel Poulton',
      image: 'https://m.media-amazon.com/images/I/41sovme3JIL.jpg',
      amount: 400,
    }
  ]

  isShowing: boolean = true;

  card: Book[] = [];

  addToCard(book: any) {
    console.log(book)
  }
  
}
