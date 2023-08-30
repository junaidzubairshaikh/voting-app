import { CommonModule } from '@angular/common';
import { Component, Input, ViewChild } from '@angular/core';

@Component({
  selector: 'app-child-recursive',
  templateUrl: './child-recursive.component.html',
  styleUrls: ['./child-recursive.component.scss'],
  // standalone:true,
  // imports: [CommonModule],
  exportAs:'app-child-recursive'
})
export class ChildRecursiveComponent {


  @Input() depth!:number;
  @Input() adV!:number;

  // @ViewChild('addHost',{static:true}) addHost!: ViewChild
}
