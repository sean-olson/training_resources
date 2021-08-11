import { Component, OnInit } from '@angular/core';
import { VideoService } from "./video.service";

@Component({
  selector: 'app-root',
  template: `
      <div id="fullPlayer" (mouseup)="videoService.dragStop($event)" (mousemove)="videoService.dragMove($event)" (mouseleave)="videoService.dragStop($event)">
          <div class="embed-responsive embed-responsive-16by9">
              <video id="videoDisplay" muted (click)="videoService.playVideo()" width="100%" height="100%" class="embed-responsive-item"></video>
              <play-overlay (click)="videoService.playVideo()"></play-overlay>
              <video-title>{{videoService.currentTitle}}</video-title>
              <video-options style="display:none;"></video-options>
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