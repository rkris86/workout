import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-workout',
  templateUrl: './workout.component.html',
  styleUrls: ['./workout.component.css']
})
export class WorkoutComponent implements OnInit {
public viewAll = false;
public create = false;
public track = false;
public category = false;
  constructor() { }

  ngOnInit() {
  }

  loadViewAll() {
    this.enableComponent(true, false, false, false);
  }

  loadCreateWorkout() {
   this.enableComponent(false, true, false, false);
  }

  loadCategory() {
    this.enableComponent(false, false, true, false);
  }

  loadTrack() {
    this.enableComponent(false, false, false, true);
  }

  enableComponent(viewAll, create, category, track) {
    this.create = create;
    this.viewAll = viewAll;
    this.category = category;
    this.track = track;
  }
}
