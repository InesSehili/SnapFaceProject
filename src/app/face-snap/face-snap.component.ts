import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';
import { FaceSnap } from '../models/face-snap.model';
import { FaceSnapsService } from "../services/face-snaps.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({

  selector: 'app-face-snap',
  templateUrl: './face-snap.component.html',
  styleUrls: ['./face-snap.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class FaceSnapComponent implements OnInit {


  constructor( private faceSnapService : FaceSnapsService ,
               private router: Router,
               private route: ActivatedRoute)
  {}

    @Input() faceSnap!: FaceSnap;

    button!: string;



    ngOnInit()
    {
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


  onViewFaceSnap() {
    this.router.navigateByUrl(`facesnap/${this.faceSnap.id}`);
  }
}
