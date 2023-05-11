import { Component, OnInit } from '@angular/core';
import {VideocrudserviceService} from '../videocrudservice.service'
import { Router } from '@angular/router';
import { Video} from '../modules/video.model'

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.css']
})
export class VideoComponent implements OnInit {
  title: string ='video'
  listProduct!: Video[];
  constructor(private vs:VideocrudserviceService) { }

  ngOnInit(): void {
    this.vs.getVideo().subscribe(
      {
        next: (res) => this.listProduct = res,
        error: (error) => console.log('error'),
        complete: () => console.log("finish")
      });
  }
  onDelete(id : number){
    this.vs.deleteVideoById(id).subscribe(()=>{
      this.ngOnInit()
    })
  }

}
