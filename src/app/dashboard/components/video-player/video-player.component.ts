import { Component, OnInit } from '@angular/core';
declare var Plyr: any;
@Component({
  selector: 'app-video-player',
  templateUrl: './video-player.component.html',
  styleUrls: ['./video-player.component.css']
})
export class VideoPlayerComponent implements OnInit {
  ngOnInit(): void {
    const videoPlayer = new Plyr('#plyr-video-player');
  }

}
