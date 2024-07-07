import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent {
  newsList = [
    {
      title: 'Noticia 1',
      image: 'https://via.placeholder.com/150',
      body: 'Este es el cuerpo de la noticia 1',
      date: '2023-07-01'
    },
    {
      title: 'Noticia 2',
      image: 'https://via.placeholder.com/150',
      body: 'Este es el cuerpo de la noticia 2',
      date: '2023-07-02'
    }
  ];

  newNews = {
    title: '',
    image: '',
    body: '',
    date: ''
  };

  addNews() {
    if (this.newNews.title && this.newNews.image && this.newNews.body && this.newNews.date) {
      this.newsList.push(this.newNews);
      this.newNews = {
        title: '',
        image: '',
        body: '',
        date: ''
      };
    } else {
      alert('Por favor, completa todos los campos');
    }
  }
}
