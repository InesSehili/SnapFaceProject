import { Component, OnInit } from '@angular/core';
import {interval,  Observable, of, } from "rxjs";
import {filter} from "rxjs/operators";
import { concatMap, mergeMap, delay, exhaustMap, map, switchMap, take, tap } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  interval$!: Observable<string>;
  redTrainsCalled = 0;
  yellowTrainsCalled = 0;
  ngOnInit()
  {

  }



}
