import { Component } from '@angular/core';

@Component({
    selector: '.app-success-alert',
    template: '<p>It\'s a big fat success!</p>',
    styles: [`p{
        color:green;
        padding: 20px;
        background-color: lightgreen;
        border: solid 1px green;
        margin-top: 20px;        
    }`]
})
export class SuccessAlertComponent{

}