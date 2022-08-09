import { Injectable } from '@angular/core';
import { FaceSnap } from '../models/face-snap.model';
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class FaceSnapsService {
  constructor(private http : HttpClient) {
  }
    myFaceSnaps  : FaceSnap [] = [];
    getAllFaceSnaps(): Observable <FaceSnap[]>{
        /*return this.myFaceSnaps;*/
      return this.http.get <FaceSnap[]>('http://localhost:3000/facesnaps');
    }

    getFaceSnapById(faceSnapId: number): Observable <FaceSnap> {
      /*const faceSnap = this.myFaceSnaps.find(faceSnap => faceSnap.id === faceSnapId);
      if (!faceSnap) {
          throw new Error('FaceSnap not found!');
      } else {
          return faceSnap;
      }*/
      return this.http.get <FaceSnap>(`http://localhost:3000/facesnaps/${faceSnapId}`);

    }


    Onsnap(faceSnapId: number, snapType: 'like' | 'unlike') : void
        {
          /*if(snapType == "like")
          this.getFaceSnapById(faceSnapId).snaps ++ ;
          else
          this.getFaceSnapById(faceSnapId).snaps -- ;*/
        }

    addFaceSnap(formValue: { title: string, description: string, imageUrl: string, location?: string }) {
    const faceSnap: FaceSnap = {
      ...formValue,
      snaps: 0,
      createdDate: new Date(),
      id: this.myFaceSnaps[this.myFaceSnaps.length - 1].id + 1
    };
    this.myFaceSnaps.push(faceSnap);
  }


}
