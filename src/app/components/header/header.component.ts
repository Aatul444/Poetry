import { Component } from '@angular/core';
import { HelperService } from 'src/app/services/user/helper.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
constructor(public helper:HelperService){}
toggle(){
  this.helper.littleNav=!this.helper.littleNav
  console.log('header',this.helper.littleNav)
}
}
