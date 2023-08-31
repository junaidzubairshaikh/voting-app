import { Component, inject, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { concatMap, filter, first, interval, last, map, timer } from 'rxjs';
import { of } from 'rxjs/internal/observable/of';
import { environment } from 'src/assets/environments/environment';
import { VotingService } from './voting.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'voting-app';
  variableEnv: string = '';

  count = interval(2000).pipe(filter(x => x < 10), last(), map(x => x + 2));
  constructor(@Inject(DOCUMENT) private docuemt: Document) {
    this.title = environment.isAdmin === 'true' ? 'This is an admin app' : ' Client app running';
    this.variableEnv = environment.isAdmin;
    // this.myServie.getData$.subscribe((x)=>{
    //   console.log('value are emitting');
    // });
  }

}
