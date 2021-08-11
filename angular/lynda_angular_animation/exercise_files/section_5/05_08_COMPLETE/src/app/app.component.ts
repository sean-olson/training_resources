import { Component, OnInit } from '@angular/core';
import { VideoService } from "./video.service";

@Component({
  selector: 'app-root',
  template: `
      <div id="fullPlayer" (mouseup)="videoService.dragStop($event)" (mousemove)="videoService.dragMove($event)" (mouseleave)="videoService.dragStop($event)">
          <div class="embed-responsive embed-responsive-16by9">
              <video id="videoDisplay" muted (click)="videoService.playVideo()" width="100%" height="100%" class="embed-responsive-item"></video>
              <play-overlay [isHidden]="videoService.checkHidden()" (click)="videoService.playVideo()"></play-overlay>
              <video-title [isHidden]="videoService.checkHidden()">{{videoService.currentTitle}}</video-title>
              <video-options [isHidden]="videoService.showDetails"></video-options>
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