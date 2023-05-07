import { Component } from '@angular/core';

@Component({
  selector: 'app-fullteam',
  templateUrl: './fullteam.component.html',
  styleUrls: ['./fullteam.component.scss']
})
export class FullteamComponent {
members=[
  { image: '../../assets/teams/1.jpeg', name: 'Dr. Asad Karimi' },
    { image: '../../assets/teams/2.jpeg', name: 'Er Danish Albela' },
    { image: '../../assets/teams/3.jpeg', name: 'Khalid Parwana' },
    { image: '../../assets/teams/4.jpeg', name: 'Ehsan Dilkash' },
    { image: '../../assets/teams/5.jpeg', name: 'Mahboob Chanchal' },
    { image: '../../assets/teams/6.jpeg', name: 'Nadeem Iqbal' },
    { image: '../../assets/teams/7.jpeg', name: 'Danish Daultabadi' },
    { image: '../../assets/teams/8.jpeg', name: 'Irshad Janab khalili' },
]
}
