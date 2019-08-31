import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { Workout } from '../workout';

@Component({
  selector: 'app-addworkout',
  templateUrl: './addworkout.component.html',
  styleUrls: ['./addworkout.component.css']
})
export class AddworkoutComponent implements OnInit {

  @Output() categoryNew = new EventEmitter<string>();
  categories = ['walking', 'running', 'yoga'];
  model = new Workout('evening walk', 'Walking in the evening ', 1, this.categories[0]);
  addworkout = false;
  onSubmit() {
    this.addworkout = true;
  }

  constructor() { }

  ngOnInit() {
  }
  get diagnostic() { return JSON.stringify(this.model); }

  openCategory() {
    this.categoryNew.emit('newCategory');
  }

  addCaloriesBurned() {
    this.model.calorieBurnt =  this.model.calorieBurnt +  0.1;
  }

  subCaloriesBurned() {
    if ( this.model.calorieBurnt > 0.2) {
      this.model.calorieBurnt = this.model.calorieBurnt - 0.1;
    }
  }
}
