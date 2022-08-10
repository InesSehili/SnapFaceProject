import {Component, Input, OnInit} from '@angular/core';
import {FaceSnapsService} from "../../../core/services/face-snaps.service";
import {FaceSnap} from "../../../core/models/face-snap.model";
import {ActivatedRoute, Router} from "@angular/router";
import {AppRoutingModule} from "../../../app-routing.module";
import {Observable, tap} from "rxjs";

@Component({
  selector: 'app-single-face-snap',
  templateUrl: './single-face-snap.component.html',
  styleUrls: ['./single-face-snap.component.scss']
})
export class SingleFaceSnapComponent implements OnInit {

  constructor(
    private faceSnapService : FaceSnapsService , private route: ActivatedRoute) {
  }


  faceSnap$! : Observable<FaceSnap>;
  button!: string;



  ngOnInit()
  { const snapId = +this.route.snapshot.params['id'];
    this.faceSnap$ = this.faceSnapService.getFaceSnapById(snapId);
    this.button = "like";
  }

  onSnap(faceSnapId: number) {
    if (this.button === 'like') {
      this.faceSnap$ = this.faceSnapService.snapFaceSnapById(faceSnapId, 'like').pipe(
        tap(() =>
          this.button = 'unlike'


        ));



    } else {

      this.faceSnap$ = this.faceSnapService.snapFaceSnapById(faceSnapId, 'unlike').pipe
      (
        tap( () =>
          this.button = 'like'
        )
      )


    }
  }



}
