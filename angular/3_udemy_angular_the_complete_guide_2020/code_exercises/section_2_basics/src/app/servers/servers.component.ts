import { Component, OnInit } from '@angular/core';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.scss']
})
export class ServersComponent implements OnInit {

  allowNewServer = false;
  serverCreationStatus = 'No server was created.';
  serverName = 'Test Server';
  serverCreated = false;
  servers = ['Server 1', 'Server 2'];

  // EXERCISE 2
  // userName = '';

  // EXERCISE 3
  hideSecret = true;
  showLog = [];

  constructor() {
    setTimeout(()=>{
      this.allowNewServer = true;
    }, 2000)
   }

  ngOnInit() {
  }

  onCreateServer(){
    this.serverCreated = true;
    this.servers.push(this.serverName);
    this.serverCreationStatus = `A server was created.  It's name is ${this.serverName}`;
  }

  onUpdateServerName(evt){
    this.serverName = (<HTMLInputElement>evt.target).value;
    
  }

  //EXERCISE 2

  // onClearUserName(){
  //   this.userName = '';
  // }

// EXERCISE 3
isVisible() {
  console.log(this.hideSecret);
  return this.hideSecret ? 'none' : 'block';
}

toggleVisibility(){
  this.hideSecret = !this.hideSecret;
  this.showLog.push(` ${this.showLog.length + 1}: The message is being ${this.hideSecret ? 'hidden' : 'shown'} at ${(new Date()).getTime()}`)
}

}
