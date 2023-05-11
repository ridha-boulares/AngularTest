import { Injectable } from '@angular/core';
import {Observable } from 'rxjs'
import {Video} from 'src/app/modules/video.model'
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class VideocrudserviceService {


  readonly api_url = "http://localhost:3000/video"
  constructor(private httpClient : HttpClient) { }
  getVideo() : Observable<Video[]>{
    return this.httpClient.get<Video[]>(this.api_url)
  }
  getVideoById (id : number) {
    return this.httpClient.get<Video[]>(`${this.api_url}/${id}`)
  }
  putVideoById (id : number, product : Video) {
    return this.httpClient.put(`${this.api_url}/${id}`, product)
  }
  postVideo ( product : Video) {
    return this.httpClient.post(this.api_url, product)
  }
  deleteVideoById (id : number) {
    return this.httpClient.delete(`${this.api_url}/${id}`)
  }
}
