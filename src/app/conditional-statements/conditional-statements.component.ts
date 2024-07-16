import { Component } from '@angular/core';

@Component({
  selector: 'app-conditional-statements',
  standalone: true,
  imports: [],
  templateUrl: './conditional-statements.component.html',
  styleUrl: './conditional-statements.component.css'
})
export class ConditionalStatementsComponent {
  title : string = "Types of Component Binding";
  type1 = "Interpolation";
  type2 = "Type 2 : Property Binding";
  type3 = "Event";
  changeTitle(){
    this.type3 = "Event Binding";
  }

  conditionalTitle = "Implementation of Conditional Statements";
  isAdmin = true;
  admin = "Remove as Admin";
  text = "Text will change.";
  flipAdmin(){
    this.isAdmin = !this.isAdmin;
    this.admin = (this.isAdmin)?"Remove as Admin":"Make as Admin";
  }
  change(){
    this.text = "New text is displayed";
  }
  nameList = [
    {no : 1, name : 'Bala', age : 21 },
    {no : 2, name : 'Venkata', age : 21 },
    {no : 3, name : 'Rama', age : 21 },
    {no : 4, name : 'Sai', age : 21 },
    {no : 5, name : 'Immadisetty', age : 21 },
  ]
}
