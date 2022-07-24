import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';
import { FaceSnap } from '../models/face-snap.model';
import { FaceSnapsService } from "../services/face-snaps.service";

@Component({
  
  selector: 'app-face-snap',
  templateUrl: './face-snap.component.html',
  styleUrls: ['./face-snap.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class FaceSnapComponent implements OnInit {


  constructor( private facesnapservice : FaceSnapsService) 
  {}

    @Input() faceSnap!: FaceSnap;
 
    button!: string;
    
  

    ngOnInit()
    {
      this.button = "like";
    }

    onSnap(){
      if (this.button == 'like') {
        this.facesnapservice.Onsnap(this.faceSnap.id, 'like');
  
        this.button = 'unlike';
      }else
      { this.facesnapservice.Onsnap(this.faceSnap.id, 'unlike');

      this.button = 'like';}
      
    }

  

}
