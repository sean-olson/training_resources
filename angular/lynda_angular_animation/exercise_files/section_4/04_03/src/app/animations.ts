import { animate, animation, style } from '@angular/animations';

export var fadeAnimation = animation([
    style({
        opacity: "0"
    }),
    animate("800ms 300ms ease-in-out", style({
        opacity: "1"
    }))
])