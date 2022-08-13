import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  private waterGoal = 0;
  private waterConsumed = 0;

  private consumptionHistory = [
    {
      description: 'Delicioso copo de água',
      quantity: 200
    },
    {
      description: 'Delicioso copo de água',
      quantity: 200
    },
    {
      description: 'Delicioso copo de água',
      quantity: 200
    },
    {
      description: 'Delicioso copo de água',
      quantity: 200
    },
    {
      description: 'Delicioso copo de água',
      quantity: 200
    },
    {
      description: 'Delicioso copo de água',
      quantity: 200
    },
    {
      description: 'Delicioso copo de água',
      quantity: 200
    }
  ];

  constructor() {
    this.waterGoal = 4000;
    this.consumptionHistory.forEach(
      ( item ) => this.waterConsumed += item.quantity
    );
  }

  public getConsumtionPercentage(){
    const percentage = `${(this.waterConsumed * 100 ) / this.waterGoal}`;
    return parseInt( percentage, 10 );
  }

  public addCupOfWater() {
    const newConsumptionHistory = {
      description: 'Delicioso copo de água',
      quantity: 200
    };
    this.consumptionHistory.push( newConsumptionHistory );
    this.waterConsumed += 200;
    if ( this.waterConsumed > this.waterGoal ) {
      this.waterConsumed = this.waterGoal;
    }
  }

  public removeConsumption( item ) {
    const index = this.consumptionHistory.indexOf(item);
    if(index > -1){
      this.consumptionHistory.splice(index, 1);
      this.waterConsumed -= item.quantity;
    }
  }

  public saveNewGoal( newGoal ) {
      this.waterGoal = newGoal != null ? newGoal : 2000;
  }

}
