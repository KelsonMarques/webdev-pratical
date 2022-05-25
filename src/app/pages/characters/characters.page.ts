import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.page.html',
  styleUrls: ['./characters.page.scss'],
})
export class CharactersPage implements OnInit {

  characters: Observable<any>;

  constructor(private router: Router, private http: HttpClient) { }

  ngOnInit() {
      this.characters = this.http.get('https://www.breakingbadapi.com/api/characters');
      
    }
  

  openDetails(character){
    let split =  character.url.split('/');
    let characterId = character[character.length-2];
      this.router.navigateByUrl(`/tabs/character/${characterId}`);
  }
}
