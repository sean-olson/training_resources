import {Component} from '@angular/core';
import {VideoService} from "./video.service";

@Component({
    selector: 'video-toolbar',
    template: `
    <div id="playerToolBar">
        <a id="playBtn" class="btn btn-default" (click)="videoService.playVideo()">
        	  <i [ngClass]="{'fa-play': !videoService.isPlaying, 'fa-pause': videoService.isPlaying}" class="fa"></i>
        </a>
        <a id="muteBtn" class="btn btn-default" (click)="videoService.muteVideo()">
            <i [ngClass]="{'fa-volume-off': videoService.isMuted, 'fa-volume-up': !videoService.isMuted}" class="fa"></i>
        </a>
        <span id="videoTime">{{videoService.currentTime | timeDisplay}} / {{videoService.totalTime | timeDisplay}}</span>
        <a id="fsBtn" class="btn btn-default pull-right" (click)="videoService.fullScreen()">
            <i class="fa fa-expand"></i>
        </a>
        <a id="detailsBtn" class="btn btn-default pull-right" (click)="videoService.details()">
        	   <i class="fa fa-bars"></i>
        </a>
    </div>
    `
})
export class ToolbarComponent {
    constructor(public videoService:VideoService) {}
}
