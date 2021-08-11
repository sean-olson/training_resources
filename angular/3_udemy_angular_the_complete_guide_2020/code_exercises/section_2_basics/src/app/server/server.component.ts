import { Component } from  '@angular/core';

@Component({
    selector: 'app-server',
    templateUrl: './server.component.html',
    styles: [`
        .online{ color: white; padding: 10px;}
        .offline{ color: pink; padding: 10px;}
    `]
})
export class ServerComponent {
    serverId: number = 10;
    serverStatus: string = '';

    constructor(){
        this.serverStatus = Math.random() > 0.5 ? 'online' : 'offline';
    }

    getServerStatus(){
        return this.serverStatus;
    }

    getColor(){
        return this.serverStatus === 'offline' ? 'red' : 'green';
    }
}