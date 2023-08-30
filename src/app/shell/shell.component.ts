import { Component, OnInit } from '@angular/core';
import { TruckLoadService } from '../services/truck-load.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-shell',
  templateUrl: './shell.component.html',
  styleUrls: ['./shell.component.scss']
})
export class ShellComponent implements OnInit {

  observ!: Observable<any>
  
  constructor(public messageService: TruckLoadService){}

  ngOnInit(): void {
    debugger
    this.observ = this.messageService.getAllMessage();
    this.getMessages();
  }

  getMessages(): void {
    this.messageService.getAllMessage().subscribe((res)=>{
      // console.log(mess)
    })
  }
}
