import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.scss'],
  standalone:true,
  imports:[CommonModule],
})
export class TeamsComponent {
  itemsprof=[
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
  ]
}
