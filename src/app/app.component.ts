import { Component, OnInit } from '@angular/core';
import { PlayersService } from './services/players.service';
import { IPlayer } from './interfaces/player.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  title = 'PlayersWebApp';
  players : IPlayer[]
  
  constructor(
    private playersService: PlayersService) {
  }

  ngOnInit(): void {
    this.playersService.getValues().subscribe(r=> console.log(r))
    this.playersService.getPlayers2().subscribe(r=> {
      this.players = r;
      console.log(this.players)
    })
  }
}
