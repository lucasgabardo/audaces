import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sequence-target',
  templateUrl: './sequence-target.component.html',
  styleUrls: ['./sequence-target.component.scss']
})
export class SequenceTargetComponent implements OnInit {
  value = 0;
  sequence: any[] = [null, null, null, null];
  aditionalFields: number[] = [];
  target: any = null;
  combinations: number[] = [];
   
  constructor() { }

  ngOnInit(): void {
  }

  addField(){
    this.aditionalFields.push(0);
  }

  clearFields(){
    this.sequence = [null, null, null, null];
    this.aditionalFields = [];
    this.combinations = []
  }

  subsetSum(sequence: any[], target: number, partial: any[] | number[]){
    let sumPartial, n, remaining;

    sumPartial = partial.reduce(function (a, b) {
      return a + b;
    }, 0);

    if (sumPartial === target) {
      console.log(partial, 'sumPartial')
      this.combinations = partial;
    }

    if (sumPartial >= target) {
      return;      
    }

    for (let i = 0; i < sequence.length; i++) {
      n = sequence[i];
      remaining = sequence.slice(i + 1);
      this.subsetSum(remaining, target, partial.concat([n]));
    }
  }

  combine(){
    this.combinations = []

    this.sequence = this.sequence.map((item) => {
      return parseInt(item);
    });

    this.subsetSum(this.sequence, parseInt(this.target), []);
  }
}
