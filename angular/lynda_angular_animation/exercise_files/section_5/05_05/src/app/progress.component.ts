import {Component} from '@angular/core';
import {VideoService} from "./video.service";

@Component({
    selector: 'video-progress',
    template: `
    <div id="progressMeterFull" (click)="videoService.seekVideo($event)">
        <div id="progressMeter" (click)="videoService.seekVideo($event)" [style.width.px]="videoService.calculatedWidth"></div>
    </div>
    <div id="thumbScrubber" (mousedown)="videoService.dragStart($event)" [style.top.px]="videoService.calculatedScrubY - 2" [style.left.px]="videoService.calculatedWidth"></div>
    `
})
export class ProgressComponent {
    constructor(public videoService:VideoService) {}
}
