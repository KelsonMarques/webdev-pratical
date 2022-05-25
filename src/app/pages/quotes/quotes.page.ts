import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.page.html',
  styleUrls: ['./quotes.page.scss'],
})
export class QuotesPage implements OnInit {

  quotes: Observable<any>;

  constructor(private router: Router, private http: HttpClient) { }

  ngOnInit() {
      this.quotes = this.http.get('https://www.breakingbadapi.com/api/quotes');
      
    }
  

  openDetails(quote){
    let split =  quote.url.split('/');
    let quoteId = quote[quote.length-2];
      this.router.navigateByUrl(`/tabs/character/${quoteId}`);
  }
}
