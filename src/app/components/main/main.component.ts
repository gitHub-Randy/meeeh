import { Component } from '@angular/core';
import {  bounceAnimation } from 'angular-animations';
import { Router } from '@angular/router'
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
  animations: [
    bounceAnimation()
  ]
})
export class MainComponent {

  animationState = false;
  loading = true;

  constructor(private router: Router) {

  }

  unwrap() {
    window.location.href = "https://www.amazon.de/s?k=maehrobotor&__mk_nl_NL=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=394KAASGBOBD5&sprefix=mahroboter%2Caps%2C247&ref=nb_sb_noss_2"
  }
}
