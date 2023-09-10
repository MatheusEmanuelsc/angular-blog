import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent {
  @Input()
  photoCover:string="https://assets.xfinity.com/assets/dotcom/learn/Images/Hub/Articles/house-dragon.jpeg";
  @Input()
  title:string='Nova História';
  @Input()
  description:string='Lorem ipsum, dolor sit amet consectetur adipisicing elit. Exercitationem sed odit repudiandae autem quas error nulla aliquid ducimus, ipsa asperiores aspernatur esse molestias voluptatibus labore quos, pariatur minima at vero!';


}
