import { Component, OnInit } from '@angular/core';
import { PlayersService } from './services/players.service';
import { IPlayer } from './interfaces/player.interface';
import { PaginationInfo } from './models/paginationInfo.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  title = 'PlayersWebApp';
  players : IPlayer[]

  private page = 1;
  public pageSize = 10;
  public keyword = "";
  
  constructor(
    private playersService: PlayersService) {
  }

  ngOnInit(): void {
    this.playersService.getValues().subscribe(r => console.log(r))
    
    let paginationInfo = {page:1, pageSize: 10, keyword:""};  
    this.playersService.getPlayers(paginationInfo).subscribe(r=> {
      this.players = r.players;
      console.log(r.size)
    })
  }

  search(){
    let paginationInfo = {page:this.page, pageSize: this.pageSize, keyword: this.keyword};  
    this.playersService.getPlayers(paginationInfo).subscribe(r=> {
      this.players = r.players;
    })
  }
}
