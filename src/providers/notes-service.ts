import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class NotesService {
  data: any;
  baseURL: any;

  constructor(public http: Http) {
    this.data = null;
    this.baseURL = "http://192.168.0.33:3000";
  }

  getNotes() {
    let headers = new Headers({
      'Content-Type': 'application/json'
    });
    let options = new RequestOptions({
      headers: headers
    });

    let body = JSON.stringify({
      // token: token,
    });

    return new Promise((resolve, reject) => {
      this.http.get(this.baseURL + "/stickers/",options)
      .map(res => res.json())
      .subscribe(data => {
        resolve(data);
      }, error => {
        reject(error)
      });
    });
  }

  createNote(item) {
    let headers = new Headers({
      'Content-Type': 'application/json'
    });
    let options = new RequestOptions({
      headers: headers
    });

    let body = JSON.stringify({
       sticker: item,
    });

    return new Promise((resolve, reject) => {
      this.http.post(this.baseURL + "/stickers/", body, options)
      .map(res => res.json())
      .subscribe(data => {
        resolve(data);
      }, error => {
        reject(error)
      });
    });
  }

  updateCountNote(item) {
    let headers = new Headers({
      'Content-Type': 'application/json'
    });
    let options = new RequestOptions({
      headers: headers
    });

    return new Promise((resolve, reject) => {
      this.http.get(this.baseURL + "/stickers/" + item.id,options)
      .map(res => res.json())
      .subscribe(data => {
        resolve(data);
      }, error => {
        reject(error)
      });
    });
  }


  updateNote(item) {
    let headers = new Headers({
      'Content-Type': 'application/json'
    });
    let options = new RequestOptions({
      headers: headers
    });

    return new Promise((resolve, reject) => {
      this.http.post(this.baseURL + "/stickers/" + item.id,options)
      .map(res => res.json())
      .subscribe(data => {
        resolve(data);
      }, error => {
        reject(error)
      });
    });
  }

  deleteNote(item) {
    let headers = new Headers({
      'Content-Type': 'application/json'
    });
    let options = new RequestOptions({
      headers: headers
    });

    return new Promise((resolve, reject) => {
      this.http.delete(this.baseURL + "/stickers/" + item.id, options)
      .map(res => res.json())
      .subscribe(data => {
        resolve(data);
      }, error => {
        reject(error)
      });
    });
  }

}
