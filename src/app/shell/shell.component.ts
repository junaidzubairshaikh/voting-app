import { Component, OnInit } from '@angular/core';
import { TruckLoadService } from '../services/truck-load.service';
import { Observable, combineLatestWith, map } from 'rxjs';

@Component({
  selector: 'app-shell',
  templateUrl: './shell.component.html',
  styleUrls: ['./shell.component.scss']
})
export class ShellComponent implements OnInit {

  observ!: Observable<any>

  constructor(public messageService: TruckLoadService) { }

  ngOnInit(): void {
    this.observ = this.messageService.getAllMessage().pipe(
      combineLatestWith(this.messageService.getAllAssets())
    ).pipe(
      map(([x,y]:[any,any])=>x)
    )
    // this.getMessages();
  }

  getMessages(): void {
    this.messageService.getAllMessage().subscribe((res) => {
      // console.log(mess)
    })
  }
}
