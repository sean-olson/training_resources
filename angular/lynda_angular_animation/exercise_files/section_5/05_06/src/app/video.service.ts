import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class VideoService {

  public videoElement:any;
  public currentPath:string = "";
  public currentTitle:string = "loading...";
  public currentTime:number = 0;
  public totalTime:number = 0;
  public calculatedWidth:number;
  public calculatedScrubY:number;
  public isMuted:boolean = false;
  public isPlaying:boolean = false;
  public isDragging:boolean = false;
  public showDetails:string = "false";
  public currentDesc:string = "A very nice video...";
  public playlist:Array<Object> = [];

  constructor(private http:Http) {}

  appSetup(v:string) {
    this.videoElement = <HTMLVideoElement> document.getElementById(v);
    this.videoElement.addEventListener("loadedmetadata", this.updateData);
    this.videoElement.addEventListener("timeupdate", this.updateTime);
    window.setInterval(this.timerFired, 500);
  }

  checkHidden = () => {
      var isHidden:string = "false";
      if(this.isPlaying) {
          isHidden = "true";
      }else{
          isHidden = "false";
      }
      return isHidden;
  };

  gatherJSON = () => {
      this.http.get('./assets/data/playlist.json')
          .map((res:Response) => res.json())
          .subscribe(
              data => {
                  this.playlist = data;
                  this.selectedVideo(1);
              }
          );
  };

  selectedVideo = (i:number) => {
      this.currentTitle = this.playlist[i]['title'];
      this.currentDesc = this.playlist[i]['description'];
      this.videoElement.src = this.playlist[i]['path'];
      this.videoElement.play();
      this.isPlaying = true;
      this.showDetails = 'false';
  };

  seekVideo(e:any) {
      var w = document.getElementById('progressMeterFull').offsetWidth;
      var d = this.videoElement.duration;
      var s = Math.round(e.pageX / w * d);
      this.videoElement.currentTime = s;
  };

  dragStart = function(e:any) {
      this.isDragging = true;
  };
  dragMove = function(e:any) {
      if(this.isDragging){
          this.calculatedWidth = e.x;
      }
  };
  dragStop = function(e:any) {
      if(this.isDragging){
          this.isDragging = false;
          this.seekVideo(e);
      }
  };

  muteVideo() {
      if(this.videoElement.volume == 0) {
          this.videoElement.volume = 1;
          this.isMuted = false;
      }else{
          this.videoElement.volume = 0;
          this.isMuted = true;
      }
  };

  playVideo() {
      if(this.videoElement.paused) {
          this.videoElement.play();
          this.isPlaying = true;
      }else{
          this.videoElement.pause();
          this.isPlaying = false;
      }
  };

  updateData = (e:any) => {
      this.totalTime = this.videoElement.duration;
  };
  updateTime = (e:any) => {
      this.currentTime = this.videoElement.currentTime;
  };

  timerFired = () => {
    if(!this.isDragging) {
      this.calculatedScrubY = this.videoElement.offsetHeight;
      var t = this.videoElement.currentTime;
      var d = this.videoElement.duration;
      this.calculatedWidth = (t / d * this.videoElement.offsetWidth);
    }
  };

  details() {
      if(this.showDetails == 'false'){
          this.showDetails = 'true';
      }else{
          this.showDetails = 'false';
      }
  };

  fullScreen() {
      if(this.videoElement.requestFullscreen) {
          this.videoElement.requestFullscreen();
      }else if(this.videoElement.mozRequestFullScreen) {
          this.videoElement.mozRequestFullScreen();
      }else if(this.videoElement.webkitRequestFullscreen) {
          this.videoElement.webkitRequestFullscreen();
      }else if(this.videoElement.msRequestFullscreen) {
          this.videoElement.msRequestFullscreen();
      }
  };

}
