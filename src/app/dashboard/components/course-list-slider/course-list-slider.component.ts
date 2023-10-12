import { Component, OnInit } from '@angular/core';
declare var Swiper: any;
@Component({
  selector: 'app-course-list-slider',
  templateUrl: './course-list-slider.component.html',
  styleUrls: ['./course-list-slider.component.css']
})
export class CourseListSliderComponent implements OnInit {
  ngOnInit(): void {
    var swiperMultipleSlides: any = document.querySelector('#swiper-multiple-slides');
    if (swiperMultipleSlides) {
      new Swiper(swiperMultipleSlides, {
        slidesPerView: 3,
        spaceBetween: 30,
        pagination: {
          clickable: true,
          el: '.swiper-pagination'
        }
      });
    }
  }

}
