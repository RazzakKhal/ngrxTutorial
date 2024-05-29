import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService implements OnInit{

  constructor(private http : HttpClient) { }
  ngOnInit(): void {
  }

  getDataUser(){
    return this.http.get('assets/data.json');

  }
}
