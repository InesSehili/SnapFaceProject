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
  { //on a utiliser cette methode pour créer un observable qui emet des nombres croissants, en passant le nombre de
    // milliseconde qui doit separer les emissions
    //const interval$ = interval(1000);
    //interval$.subscribe(value => console.log(value));
    //setTimeout(() => {interval$.subscribe(value => console.log(value));}, 5000);

    //this.interval$ = interval(1000);

   /* this.interval$ = interval(1000).pipe(
      filter(value => value % 3 === 0),
      map(value => value % 2 === 0 ?
        `Je suis ${value} et je suis pair` :
        `Je suis ${value} et je suis impair`
      ),
      tap(text => this.logger(text))
<<<<<<< HEAD
    );*/

  }
  logger(text: string): void {
=======
    );
*/
   /* interval(500).pipe(
      take(10),
      map(value => value % 2 === 0 ? 'rouge' : 'jaune'),
      tap(color => console.log(`La lumière s'allume en %c${color}`, `color: ${this.translateColor(color)}`)),
      mergeMap(color => this.getTrainObservable$(color)),*/
      /*
      * mergeMap :   assure la mise en parallèle : l'Observable extérieur peut souscrire aux Observables intérieurs suivants sans attendre que les précédents soient complétés.

      * concatMap :   assure la mise en série : il attend que les Observables intérieurs complètent avant de souscrire aux suivants– même si l'Observable extérieur émet plusieurs fois. Les Observables intérieurs seront traités en séquence à la suite.

      * exhaustMap :   assure le traitement complet d'une souscription avant d'observer une nouvelle émission de l'Observable extérieur. Si d’autres demandes sont faites entre temps, elles ne seront pas prises en compte.

      * switchMap :   traite la dernière demande de souscription de l’Observable extérieur et annule toute souscription précédente non-complétée.

      */
  /*    tap(train => console.log(`Train %c${train.color} ${train.trainIndex} arrivé !`, `font-weight: bold; color: ${this.translateColor(train.color)}`))
    ).subscribe();*/




  }


  /*logger(text: string): void {
>>>>>>> 0633ddc83b0cc0dac29191b5c836f5e96dc38694
    console.log(`Log: ${text}`);
  }*/
/*  getTrainObservable$(color: 'rouge' | 'jaune') {
    const isRedTrain = color === 'rouge';
    isRedTrain ? this.redTrainsCalled++ : this.yellowTrainsCalled++;
    const trainIndex = isRedTrain ? this.redTrainsCalled : this.yellowTrainsCalled;
    console.log(`Train %c${color} ${trainIndex} appelé !`, `text-decoration: underline; color: ${this.translateColor(color)}`);
    return of({ color, trainIndex }).pipe(
      delay(isRedTrain ? 5000 : 6000)
    );
  }

  translateColor(color: 'rouge' | 'jaune') {
    return color === 'rouge' ? 'red' : 'yellow';
  }*/
}
