import { Injectable } from '@angular/core';
import { delay, Observable, of } from 'rxjs';
import { ActuarialModelResult } from './models/actuarial-model-result.model';
import { ActuarialModelRequest } from './models/actuarial-model-request.model';

const delayInMilliseconds = 3000;
const MockData: ActuarialModelResult[] = [
  {referenceDate: '2022-09-01T00:00:00', benchmark1: 22.01, benchmark2: 22.01},
  {referenceDate: '2022-10-01T00:00:00', benchmark1: 23.00, benchmark2: 23.00},
  {referenceDate: '2022-11-01T00:00:00', benchmark1: 25.00, benchmark2: 25.00},
  {referenceDate: '2022-12-01T00:00:00', benchmark1: 26.00, benchmark2: 26.00},
  {referenceDate: '2023-01-01T00:00:00', benchmark1: 27.00, benchmark2: 27.00},
  {referenceDate: '2023-02-01T00:00:00', benchmark1: 31.01, benchmark2: 31.01},
  {referenceDate: '2023-03-01T00:00:00', benchmark1: 35.00, benchmark2: 35.00},
  {referenceDate: '2023-04-01T00:00:00', benchmark1: 36.50, benchmark2: 36.50},
  {referenceDate: '2023-05-01T00:00:00', benchmark1: 38.00, benchmark2: 38.00},
  {referenceDate: '2023-06-01T00:00:00', benchmark1: 39.50, benchmark2: 39.50},
];

@Injectable({
  providedIn: 'root'
})
export class ActuarialModelService {

  constructor() { }

  calculate(model: ActuarialModelRequest): Observable<ActuarialModelResult[]> {
    return of(MockData).pipe(delay(delayInMilliseconds));
  }
}
