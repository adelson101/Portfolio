import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  isMouseScroll:boolean = false;
  isHeaderMobile: boolean = false;
  isHeaderMobileInitial: boolean = false;

  @HostListener('window:scroll',['$event']) onScroll() {
    if(window.scrollY >= 60){
      this.isMouseScroll = true;
    } else {
      this.isMouseScroll = false;
    }
  }

  onActiveMobileNav() {
    this.isHeaderMobile = !this.isHeaderMobile;
    this.isHeaderMobileInitial = true;
  }

}
