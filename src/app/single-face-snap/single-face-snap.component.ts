import {Component, Input, OnInit} from '@angular/core';
import {FaceSnapsService} from "../services/face-snaps.service";
import {FaceSnap} from "../models/face-snap.model";
import {ActivatedRoute, Router} from "@angular/router";
import {AppRoutingModule} from "../app-routing.module";

@Component({
  selector: 'app-single-face-snap',
  templateUrl: './single-face-snap.component.html',
  styleUrls: ['./single-face-snap.component.scss']
})
export class SingleFaceSnapComponent implements OnInit {

  constructor(
    private faceSnapService : FaceSnapsService , private route: ActivatedRoute) {
  }


  @Input() faceSnap!: FaceSnap;

  button!: string;



  ngOnInit()
  { const snapId = +this.route.snapshot.params['id'];
    this.faceSnap = this.faceSnapService.getFaceSnapById(snapId);
    this.button = "like";
  }

  onSnap(){
    if (this.button == 'like') {
      this.faceSnapService.Onsnap(this.faceSnap.id, 'like');

      this.button = 'unlike';
    }else
    { this.faceSnapService.Onsnap(this.faceSnap.id, 'unlike');

      this.button = 'like';}

  }



}
