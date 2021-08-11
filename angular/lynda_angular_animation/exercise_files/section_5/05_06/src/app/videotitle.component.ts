import { Component, Input } from '@angular/core';

@Component({
    selector: 'video-title',
    template: `
        <div>
            <ng-content></ng-content>
        </div>
    `,
    styles: [
            `div {
            position: absolute;
            top:0px;
            left:0px;
            font-size: 1.3em;
            color: whitesmoke;
            width:100%;
            margin:5px;
            margin-left:10px;
            text-shadow: 1px 1px #333333;
        }
        `
    ]
})
export class VideoTitleComponent {
    @Input() isHidden:string = 'false';
}