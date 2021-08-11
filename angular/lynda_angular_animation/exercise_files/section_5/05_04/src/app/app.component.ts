import { Component, OnInit } from '@angular/core';
import { VideoService } from "./video.service";

@Component({
  selector: 'app-root',
  template: `
      <div id="fullPlayer" (mouseup)="videoService.dragStop($event)" (mousemove)="videoService.dragMove($event)" (mouseleave)="videoService.dragStop($event)">
          <div class="embed-responsive embed-responsive-16by9">
              <video id="videoDisplay" muted (click)="videoService.playVideo()" width="100%" height="100%" class="embed-responsive-item"></video>
              <div id="bigPlayButton" (click)="videoService.playVideo()"><i class="fa fa-play"></i></div>
              <div id="videoTitle">{{videoService.currentTitle}}</div>
              <video-options></video-options>
          </div>
          <video-progress></video-progress>
          <video-toolbar></video-toolbar>
      </div>
  `
})
export class AppComponent implements OnInit {
  constructor(public videoService:VideoService) {}
  ngOnInit() {
    this.videoService.appSetup("videoDisplay");
    this.videoService.gatherJSON();
  }
}