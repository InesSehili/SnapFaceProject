import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';
import { FaceSnap } from '../models/face-snap.model';

@Component({
  
  selector: 'app-face-snap',
  templateUrl: './face-snap.component.html',
  styleUrls: ['./face-snap.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class FaceSnapComponent implements OnInit {

    @Input() faceSnap!: FaceSnap;
 
    button!: string;
    
  

    ngOnInit()
    {
      this.button = "like";
    }

    onSnap(){
      if (this.button == 'like') {
        this.faceSnap.snaps++;
  
        this.button = 'unlike';
      }else
      {this.faceSnap.snaps--;

      this.button = 'like';}
      
    }

  

}
