import { Component, Input, OnInit } from '@angular/core';
declare var Plyr: any;
@Component({
  selector: 'app-voice-player',
  templateUrl: './voice-player.component.html',
  styleUrls: ['./voice-player.component.css']
})
export class VoicePlayerComponent implements OnInit {
  ngOnInit(): void {
    const audioPlayer = new Plyr('#plyr-audio-player');
  }
}
