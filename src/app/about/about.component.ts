import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { DataService } from '../data.service';
import {
  trigger,
  style,
  transition,
  animate,
  keyframes,
  query,
  stagger
} from '@angular/animations';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
  animations: [trigger('goals', [transition('* => *', [
        query(':enter', style({opacity: 0}), {optional: true}),

        query(':enter', stagger('300ms', [animate('.6s ease-in', keyframes([
            style({opacity: 0, transform: 'translateY(-75%)', offset: 0}),
            style({opacity: .5, transform: 'translateY(35px)', offset: .3}),
            style({opacity: 1, transform: 'translateY(0)', offset: 1})
          ]))]), {optional: true})
            ])])]
})
export class AboutComponent implements OnInit {
  itemCount : number;
goals:any;

  constructor(private route:ActivatedRoute, private router:Router, private _data:DataService) {
  this.route.params.subscribe(res => console.log(res.id));
  }

  ngOnInit() {
 this._data.goal.subscribe(res => this.goals = res);
   this.itemCount = this.goals.length;
  }
   sendMeHome() {
   this.router.navigate([' ']);
   }
}
