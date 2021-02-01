import { Component } from '@angular/core';

@Component({
  selector: 'app-sequence-target',
  templateUrl: './sequence-target.component.html',
  styleUrls: ['./sequence-target.component.scss']
})
export class SequenceTargetComponent {
  value = 0;
  sequence: any[] = [null, null, null, null];
  aditionalFields: any[] = [];
  target: any = null;
  combinations: any = null;


  addField() {
    this.aditionalFields.push(null);
  }

  clearFields() {
    this.sequence = [null, null, null, null];
    this.aditionalFields = [];
    this.combinations = null
    this.target = null;
  }

  subsetSum(sequence: any[], target: number, r = [], s = target) {
    if (s == 0)
      return [r];


    let result: any[] = [];

    for (let a of sequence) {
      if (a <= s) {
        if (result.length < 10) {
          result = result.concat(
            this.subsetSum(sequence, target, r.slice().concat(a), s - a));
        }
      }
    }

    return result;
  }

  combine() {
    this.combinations = []

    let sequenceDesc = this.sequence.concat(this.aditionalFields).map((item) => {
      return parseInt(item);
    })
      .filter(s => typeof s !== "undefined" && s !== 0 && !isNaN(s))
      .sort((a: any, b: any) => { return b - a });

    let result = this.subsetSum(sequenceDesc, parseInt(this.target));
    this.combinations = result ? this.getSumArray(result) : [];
  }
  // teste 8
  getSumArray(result: any[]) {
    let sumArray: any[] = [];

    result.forEach((arrayNumbers) => {
      let sumItem = '';

      arrayNumbers.forEach((item: number) => {
        sumItem += `${item} + `;
      })

      sumArray.push(sumItem.slice(0, -2));
    });

    return sumArray;
  }

  customTrackBy(index: number, obj: any): any {
    return index;
  }
}
