import { Component, Input } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({

    selector: 'video-title',
    template: `
        <div [@hiddenChanged]="isHidden">
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
    ],
    animations: [
        trigger('hiddenChanged', [
            state('false', style({
                opacity: 1
            })),
            state('true', style({
                opacity: 0
            })),
            transition('true => false', animate('100ms ease-out')),
            transition('false => true', animate('800ms ease-out')),
            transition('void => *', [
                animate(1000, style({opacity:1}))
            ])
        ])
    ]
})
export class VideoTitleComponent {

    @Input() isHidden:string = 'false';

}
