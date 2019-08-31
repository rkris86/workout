import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { WorkoutComponent } from './workout/workout.component';
import { AddworkoutComponent } from './addworkout/addworkout.component';
import { CategoryComponent } from './category/category.component';
import { TrackComponent } from './track/track.component';
import { FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    WorkoutComponent,
    AddworkoutComponent,
    CategoryComponent,
    TrackComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
