import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  output,
} from '@angular/core';
import { LongTermGoalsHeaderAnimations } from './long-term-goals-header.animations';
import { endOfWeek, startOfWeek } from 'src/app/core/utils/time.utils';

@Component({
  selector: 'app-long-term-goals-header',
  templateUrl: './long-term-goals-header.component.html',
  styleUrls: ['./long-term-goals-header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: LongTermGoalsHeaderAnimations,
  standalone: true,
  imports: [],
})
export class LongTermGoalsHeaderComponent implements OnInit {
  // --------------- INPUTS AND OUTPUTS ------------------

  editClicked = output<boolean>();

  // --------------- LOCAL UI STATE ----------------------

  // --------------- COMPUTED DATA -----------------------
  endOfWeek = endOfWeek; // import from time.utils.ts

  startOfWeek = startOfWeek; // import from time.utils.ts
  // --------------- EVENT HANDLING ----------------------
  editGoals() {
    this.editClicked.emit(true);
  }
  // --------------- OTHER -------------------------------

  constructor() {}

  // --------------- LOAD AND CLEANUP --------------------

  ngOnInit(): void {}
}
