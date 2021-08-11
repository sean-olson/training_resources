import { Component } from '@angular/core';
import { VideoService } from "./video.service";

@Component({
    selector: 'video-options',
    template: `
    <div id="VideoOptions" [hidden]="!videoService.showDetails" class="card">
        <div class="panel-heading">
            <h1 class="panel-title">{{videoService.currentTitle}}</h1>
        </div>
        <div class="panel-body row">
            <div class="col-6">
                <h2>Video Details:</h2>
                <p>{{videoService.currentDesc}}</p>
            </div>
            <div class="col-6">
                <ul class="list-group">
                    <h2>Playlist:</h2>
                    <li class="list-group-item" *ngFor="let playlistItem of videoService.playlist; let i = index" (click)="videoService.selectedVideo(i)">{{playlistItem.title}}</li>
                </ul>
            </div>
        </div>
    </div>
    `
})
export class OptionsComponent {
    constructor(public videoService:VideoService) {}
}
