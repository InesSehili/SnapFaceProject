import { Injectable } from '@angular/core';
import { FaceSnap } from '../models/face-snap.model';
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {Observable, switchMap} from "rxjs";
import {map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class FaceSnapsService {
  constructor(private http: HttpClient) {
  }

  getAllFaceSnaps(): Observable<FaceSnap[]> {
    /*return this.myFaceSnaps;*/
    return this.http.get <FaceSnap[]>('http://localhost:3000/facesnaps');
  }

  getFaceSnapById(faceSnapId: number): Observable<FaceSnap> {

    return this.http.get <FaceSnap>(`http://localhost:3000/facesnaps/${faceSnapId}`);

  }


  snapFaceSnapById(faceSnapId: number, snapeType: 'like' | 'unlike'): Observable<FaceSnap> {
    return this.getFaceSnapById(faceSnapId).pipe(

      map(faceSnap => ({

        ...faceSnap,
        snaps : faceSnap.snaps + (snapeType ==="like" ? 1 : -1)
      })),
      switchMap(faceSnaoUpdated => this.http.put<FaceSnap>(`http://localhost:3000/facesnaps/${faceSnapId}`, faceSnaoUpdated))


    )


  }

  addFaceSnap(formValue : {title:string, description : string, imageUrl: string, location?: string}): Observable<FaceSnap>
  {
    return this.getAllFaceSnaps().pipe(
      map( facesnaps => [...facesnaps].sort((a, b) => a.id - b.id)),
      map(sortedFaceSnaps => sortedFaceSnaps[sortedFaceSnaps.length-1]),
      map(previousSnap=>
        ({
          ...formValue,
          snaps : 0,
          createdDate: new Date(),
          id : previousSnap.id+1

        })),
      switchMap(newFaceSnap =>
        this.http.post<FaceSnap>('http://localhost:3000/facesnaps', newFaceSnap)
        )
    );

  }
}
