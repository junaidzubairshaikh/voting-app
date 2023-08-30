import { Component, inject } from '@angular/core';
import { animationFrameScheduler, asapScheduler, concatMap, delay, exhaustMap, filter, interval, last, map, merge, mergeMap, Observable, observeOn, of, Subject, switchMap, take, tap, timer } from 'rxjs';
import { VotingService } from '../voting.service';

@Component({
  selector: 'app-operator-concat',
  templateUrl: './operator-concat.component.html',
  styleUrls: ['./operator-concat.component.scss']
})
export class OperatorConcatComponent {

  count = interval(2000).pipe(filter(x=>x<10),last(), map(x=>x+2));

  _progress$!: Observable<number>;
  _progress2$!: Observable<number>;
  ob1 = of(1,2,3);
  ob2 = of(4,5,6);

  mySerive:VotingService = inject(VotingService)

  _order = new Subject<{ id: number }>();

  processProgressNow(){
    // this._progress$ = interval(1000 / 60).pipe(
    //   tap(c => console.log(c)),
    //   take(100)
    // );

    // this._progress2$ = interval(100, animationFrameScheduler).pipe(
    //   tap(c => console.log(c)),
    //   tap((c=>this.mySerive.updateSubject(c))),
    //   take(100)
    // );

    const ss = merge(this.ob1,this.ob2);
    ss.subscribe(console.log);
  }
  ngOnInit() {
    // this._progress$ = interval(1000 / 60).pipe(tap(c => console.log(c)), take(100));
    // this._progress2$ = interval(0, animationFrameScheduler).pipe(tap(c => console.log(c)), take(10));

    // let someStr = '5 2 C D +';
    // console.log(this.makeSumOperations([2,2,2,3,3,3,3,1]));
    // console.log(this.makeSumOperations(someStr.split(" ")));

    this._order.pipe(
      tap((c) => console.log(c)),
      observeOn(asapScheduler),
      concatMap((order) => this.durumStream(order.id))
    ).subscribe(console.log)
  }

  makeSumOperations(ops: number[]) {

    let resultedArrary: number[] = [];
    for (let i = 0; i < ops.length; i++) {

      let freq = 0;

      for (let j = 0; j <= ops.length; j++) {
        if (ops[i] === ops[j]) {
          freq++;
        }
      }

      if (ops[i] === freq) {
        let ifIndex = resultedArrary.findIndex(x => x === ops[i]);
        if (ifIndex === -1) {
          resultedArrary.push(ops[i]);
        }
      }




    }


    if (resultedArrary.length === 0) {
      return -1;
    }


    let maxNum = 0;
    for (let k = 0; k <= resultedArrary.length; k++) {
      if (resultedArrary[k] > maxNum) {
        maxNum = resultedArrary[k];
      }
    }

    return maxNum;

    // let result = [];

    // for(let i=0; i<ops.length; i++) {

    //   if(result.length ===0){
    //     result.push(ops[i]);
    //     continue;
    //   }

    //   if(result.length>=1 && ops[i]==='C') {
    //     result.pop();
    //     continue;
    //   }
    //   if(result.length>=1 && ops[i]==='D') {
    //     let temp:number = result[result.length-1];
    //     result.push(Number(temp*2));
    //     continue;
    //   }

    //   if(result.length>1 && ops[i]==='+') {
    //     let temp1:number = result[result.length-1];
    //     let temp2:number = result[result.length-2];
    //     result.push(Number(temp1)+ Number(temp2));
    //     continue;
    //   }

    //   result.push(ops[i]);
    // }

    // return result;
  }

  durumStream(id: number) {

    return of('Order Id' + id).pipe(delay(3000))
    // return timer(3000,'text');
    // return new Promise((resolve)=>{
    //   setTimeout(() => {
    //       of(resolve('Order Id: '+id));
    //   }, 3000);
    // });
  }

}
