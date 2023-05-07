import { Component } from '@angular/core';
import { NewsService } from './service/news.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'newsapplication';
  newsdata:any;

  constructor(private news:NewsService){
    this.news.newshead().subscribe((data:any)=>{console.log(data)
    this.newsdata=data.articles
    
    });

  }
}
