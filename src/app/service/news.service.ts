import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor(private http:HttpClient) { }
  apikey="35b405b6499e4d44a34fa1c807577e80"
  newshead(){
    return this.http.get("https://newsapi.org/v2/top-headlines?country=in&apiKey=a0788f5413b045729112ca9f3c73c55d");
  }
}
