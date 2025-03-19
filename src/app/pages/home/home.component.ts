import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  images = [
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
    {
      imageSrc:
        'https://uop.scene7.com/is/image/phoenixedu/computer-programmers-using-computer-970x580.webp?fmt=webp-alpha&qlt=70&fit=constrain,1&wid=970',
      imageAlt: 'person2',
    },
    {
      imageSrc:
        'https://res.cloudinary.com/highereducation/images/f_auto,q_auto/v1670878027/ComputerScience.org/how-to-become-a-comp-programmer/how-to-become-a-comp-programmer.jpg?_i=AA',
      imageAlt: 'person2',
    },
  ]
}
