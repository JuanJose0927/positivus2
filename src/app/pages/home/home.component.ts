import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  images = [
    {
      imageSrc: 'https://usa.bootcampcdn.com/wp-content/uploads/sites/108/2021/12/tes_gen_blog_post_071921_1233182206-1-800x412.jpg',
      imageAlt: 'nature1',
    },
    {
      imageSrc:
        'https://bairesdev.mo.cloudinary.net/blog/2021/09/software-developer-1.jpg?tx=w_1920,q_auto',
      imageAlt: 'nature2',
    },
    {
      imageSrc:
      'https://www.theforage.com/blog/wp-content/uploads/2022/09/what-is-a-web-developer.jpg',
      imageAlt: 'person1',
    },
    {
      imageSrc:
        'https://www.holycode.com/wp-content/uploads/2023/07/developer-looking-at-code-1.jpg',
      imageAlt: 'person2',
    },
  ]
}
