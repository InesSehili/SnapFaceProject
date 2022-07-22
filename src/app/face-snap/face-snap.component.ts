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
    title!:string;
    description!:string;
    createdDate!:Date;
    snaps!: number;
    urlImage!: string;
    button!: string;
    
  

    ngOnInit()
    {
    }

    onSnap(){
      if (this.button == 'like') {
        this.snaps++;
  
        this.button = 'unlike';
      }else
      {this.snaps--;

      this.button = 'like';}
      
    }

  

}
