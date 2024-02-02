
import { Component, OnInit } from '@angular/core';
import { concatMap, delay, of, repeat } from 'rxjs';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})


export class NavbarComponent implements OnInit {
  src$: any;
  showSecondContent: boolean = false;
  showSecondContent2: boolean = false;
  showSecondContent3: boolean = false;
  showSecondContent4: boolean = false;
  imageUrls: string[] = ['../../assets/Property 1=1 1.png', '../../assets/Property 1=2 1.png', '../../assets/Property 1=3 1.png', '../../assets/Property 1=9 1.png'];
  ngOnInit(): void {
    this.preloadImages();
    this.src$ = of(...this.imageUrls).pipe(
      concatMap(url => of(url).pipe(delay(3000))),
      repeat()
    );
  }

  preloadImages() {
    this.imageUrls.forEach(url => {
      const img = new Image();
      img.src = url;
    });
  }

  toggleSecondContent() {
    this.showSecondContent = !this.showSecondContent
  }

  toggleSecondContent2() {
    this.showSecondContent2 = !this.showSecondContent2
  }

  toggleSecondContent3() {
    this.showSecondContent3 = !this.showSecondContent3
  }

  toggleSecondContent4() {
    this.showSecondContent4 = !this.showSecondContent4
  }

}
