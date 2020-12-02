import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
interface Animal {
  name: string;
  sound: string;
}
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  
  title:string = '';
  constructor() { 
    
  }
  openImage(data:string) {  
    this.title=data;
    }
  animalControl = new FormControl('', Validators.required);
  selectFormControl = new FormControl('', Validators.required);
  animals: Animal[] = [
    {name: 'Lion', sound: 'https://static.nationalgeographic.co.uk/files/styles/image_3200/public/01-lion-populations-nationalgeographic_1777804.webp?w=1600&h=900'},
    {name: 'Tiger', sound: 'https://cdn.vox-cdn.com/thumbor/bcz_df2g76PuoMeaSt6JOjlE-Fo=/0x0:3000x2225/920x613/filters:focal(1082x339:1562x819):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/66609943/GettyImages_137497593.0.jpg'},
    {name: 'Elephant', sound: 'https://www.onegreenplanet.org/wp-content/uploads/2019/11/david-clode-bj0xftabquo-unsplash-1-1536x1015.jpg'}
  ];
  
  ngOnInit(): void {
  }

}
