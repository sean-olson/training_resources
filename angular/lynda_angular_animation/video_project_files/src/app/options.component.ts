import { Component, Input } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { VideoService } from "./video.service";

@Component({
    selector: 'video-options',
    template: `
    <div [@hiddenChanged]="isHidden" id="VideoOptions" class="card">
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
    `,
    animations: [
        trigger('hiddenChanged', [
            state('true', style({
                opacity: 1,
                transform: 'translateX(0%)'
            })),
            state('false', style({
                opacity: 0,
                transform: 'translateX(100%)'
            })),
            transition('false => true', animate('100ms ease-out')),
            transition('true => false', animate('400ms ease-in'))
        ])
    ]    
})
export class OptionsComponent {
    @Input() isHidden:string = 'true';
    constructor(public videoService:VideoService) {}
}
