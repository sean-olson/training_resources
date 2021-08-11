import { animate, animation, style } from '@angular/animations';

export var fadeAnimation = animation([
    style({
        opacity: "{{ from }}"
    }),
    animate("{{ time }} {{ delay }} ease-in-out", style({
        opacity: "{{ to }}"
    }))
])