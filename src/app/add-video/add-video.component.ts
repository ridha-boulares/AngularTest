import { Component, OnInit } from '@angular/core';
import { Video } from '../modules/video.model'
import { Router } from '@angular/router';
import { VideocrudserviceService} from '../videocrudservice.service'
@Component({
  selector: 'app-add-video',
  templateUrl: './add-video.component.html',
  styleUrls: ['./add-video.component.css']
})
export class AddVideoComponent implements OnInit {
  video!:Video
  constructor(private route:Router, private vs:VideocrudserviceService) { }

  ngOnInit(): void {
    this.video= new Video();
  }
  ajoutervideo(){
    this.vs.postVideo(this.video).subscribe(
      ()=> {
        this.route.navigateByUrl("/video")
      }
    )
  }
}
