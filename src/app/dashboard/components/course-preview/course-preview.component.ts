import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-course-preview',
  templateUrl: './course-preview.component.html',
  styleUrls: ['./course-preview.component.css']
})


export class CoursePreviewComponent {
  @Input() picUrl!: string;

}
