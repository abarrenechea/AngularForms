import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { BehaviorSubject } from 'rxjs';
import { ActuarialModelService } from './actuarial-model.service';
import { ActuarialModelRequest } from './models/actuarial-model-request.model';
import { ActuarialModelResult } from './models/actuarial-model-result.model';

const enum CalculateBtnEnum {
  Calculating = 'calculating',
  Ready = 'ready'
}

@Component({
  selector: 'app-actuarial-model',
  templateUrl: './actuarial-model.component.html',
  styleUrls: ['./actuarial-model.component.scss']
})
export class ActuarialModelComponent implements OnInit {

  // State
  dataSource: ActuarialModelResult[] = [];
  status$ = new BehaviorSubject<CalculateBtnEnum>(CalculateBtnEnum.Ready);
  calculateBtn = {
    label: 'Calculate',
    icon: '',
    disabled: true,
  };

  // Acturial Model form
  actuarialModelForm = new FormGroup({
    mainLimit: new FormControl(null, [ Validators.required, Validators.min(0.1) ]),
    mainRetention: new FormControl(null, [ Validators.required, Validators.min(0.1) ]),
    executionType: new FormControl('', [ Validators.required ])
  });

  // Readonly properties
  readonly executionTypes: string[] = ['Simple', 'Complex'];
  readonly displayedColumns: string[] = ['referenceDate', 'benchmark1', 'benchmark2'];

  constructor(private actuarialModelService: ActuarialModelService) { }

  ngOnInit(): void {
    this.status$.subscribe((status) => {

      switch (status) {
        case CalculateBtnEnum.Calculating:
          this.calculateBtn = {
            label: 'Calculating...',
            icon: '',
            disabled: true,
          };
          break;
        case CalculateBtnEnum.Ready:
          this.calculateBtn = {
            label: 'Calculate',
            icon: '',
            disabled: false,
          };
          break;
      }
    });
  }

  calculate(): void {

    if (!this.actuarialModelForm.valid) {
      return;
    }

    this.dataSource = [];

    this.status$.next(CalculateBtnEnum.Calculating);

    const modelParams = {...new ActuarialModelRequest(), ...this.actuarialModelForm.value};
    this.actuarialModelService.calculate(modelParams)
      .subscribe((results: ActuarialModelResult[]) => {
        this.dataSource = results;
        this.status$.next(CalculateBtnEnum.Ready);
      });
  }

}
