import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  
  selector: 'app-face-snap',
  templateUrl: './face-snap.component.html',
  styleUrls: ['./face-snap.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class FaceSnapComponent implements OnInit {

  title!:string;
    description!:string;
    createdDate!:Date;
    snaps!: number;
    urlImage!: string;
    snap!: boolean;
    button!: string;
    
  

    ngOnInit()
    {
      this.title = 'my snaps';
      this.description = 'my descriptions';
      this.createdDate= new Date();
      this.snaps = 20;
      this.urlImage= 'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg'; 
      this.snap = false;
      this.button = "like"; }

    onSnap(){
      if (this.snap == false) {
        this.snaps++;
        this.snap = true;
        this.button = 'unlike';
      }else
      {this.snaps--;
        this.snap = false;
      this.button = 'like';}
      
    }

  

}
