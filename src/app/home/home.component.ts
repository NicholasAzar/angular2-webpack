import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'my-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  config:any = {
    highlight: false,
    create:false,
    persist:true,
    plugins: ['dropdown_direction', 'remove_button'],
    dropdownDirection: 'down',
    labelField: 'label',
    valueField: 'value',
    maxItems: 5
  };

  options:any = [
    {
      label: 'Angular',
      value: 'angular',
      code: 'NG'
    }, {
      label: 'ReactJS',
      value: 'reactjs',
      code: 'RJS'
    }, {
      label: 'Ember JS',
      value: 'emberjs',
      code: 'emjs'
    }, {
      label: 'Ruby on Rails',
      value: 'ruby_on_rails',
      code: 'ROR'
    }
  ];

  constructor() {
    // Do stuff
  }

  ngOnInit() {
    console.log('Hello Home');
  }

}
