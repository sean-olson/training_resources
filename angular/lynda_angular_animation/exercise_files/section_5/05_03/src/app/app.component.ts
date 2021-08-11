import { Component, OnInit } from '@angular/core';
import { VideoService } from "./video.service";

@Component({
  selector: 'app-root',
  template: `
      <div id="fullPlayer" (mouseup)="videoService.dragStop($event)" (mousemove)="videoService.dragMove($event)" (mouseleave)="videoService.dragStop($event)">
          <div class="embed-responsive embed-responsive-16by9">
              <video id="videoDisplay" muted (click)="videoService.playVideo()" width="100%" height="100%" class="embed-responsive-item"></video>
              <div id="bigPlayButton" [ngClass]="{'fade-out':videoService.isPlaying}" class="fader" (click)="videoService.playVideo()"><i class="fa fa-play"></i></div>
              <div id="videoTitle" [ngClass]="{'fade-out':videoService.isPlaying}" class="fader">{{videoService.currentTitle}}</div>
              <video-options [ngClass]="{'fade-out':!videoService.showDetails}" class="fader"></video-options>
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