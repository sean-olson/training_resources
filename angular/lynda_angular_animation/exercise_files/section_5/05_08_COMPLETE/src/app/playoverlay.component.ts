import { Component, Input } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
    selector: 'play-overlay',
    template: `
    <div [@hiddenChanged]="isHidden">
        <i class="fa fa-play"></i>
    </div>
    `,
    styles: [
        `div {
            background-color: rgba(0, 0, 0, 0.8);
            width:120px;
            height:100px;
            font-size: 3.2em;
            cursor: pointer;
            border-radius: 6px;
            text-align: center;
            position:absolute;
            top: 50%;
            left: 50%;
            margin-right: -50%;
            transform: translate(-50%, -50%);
        }
        .fa {
            display: block;
            margin-top: 1.5rem;
        }
        `
    ],
    animations: [
        trigger('hiddenChanged', [
            state('false', style({
                opacity: 1,
                transform: 'translate(-50%, -50%) scale(1)',
                backgroundColor: 'rgba(0, 0, 0, 0.8)'
            })),
            state('true', style({
                opacity: 0,
                transform: 'translate(-50%, -50%) scale(2)',
                backgroundColor: 'rgba(81, 7, 0, 0.8)'
            })),
            transition('true => false', animate('100ms ease-out')),
            transition('false => true', animate('800ms ease-out')),
            transition('void => *', [
                animate(1000, style({opacity:1}))
            ])
        ])
    ]
})
export class PlayOverlayComponent {
    @Input() isHidden:string = 'false';
}