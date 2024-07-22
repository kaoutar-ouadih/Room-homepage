import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, NavbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'room-home-page';
  articles: any[] =[{title: "Discover innovative ways to decorate", content: "We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love.", imgSrc: "../assets/desktop-image-hero-1.jpg"},
    {title: "We are available all across the globe", content: "With stores all over the world, it's easy for you to find furniture for your home or place of business. Locally, we’re in most major cities throughout the country. Find the branch nearest you using our store locator. Any questions? Don't hesitate to contact us today.", imgSrc: "../assets/desktop-image-hero-2.jpg"}, 
    {title: "Manufactured with the best materials", content: "Our modern furniture store provide a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades of experience in this industry, we understand what customers want for their home and office.", imgSrc: "../assets/desktop-image-hero-3.jpg"}]
  index: number = 0;
  currentActicle = this.articles[this.index];
  isSliderBtnClicked: boolean = false;

  onNextBtnClick(){
    this.isSliderBtnClicked = true;
    //to remove the animation class and readd it again 
    setTimeout(() => {
      this.isSliderBtnClicked = false;
    }, 1000);

    if(this.index < this.articles.length-1){
      this.index++;
      this.currentActicle = this.articles[this.index];
    }
    else{
      this.index = 0;
    }
  }
  onPreviousBtnClick(){
    this.isSliderBtnClicked = true;
    //to remove the animation class and readd it again 
    setTimeout(() => {
      this.isSliderBtnClicked = false;
    }, 1000);

    if(this.index>0){
      this.index--;
      this.currentActicle = this.articles[this.index];
    }
    else{
      this.index = this.articles.length-1;
    }
  }

}
