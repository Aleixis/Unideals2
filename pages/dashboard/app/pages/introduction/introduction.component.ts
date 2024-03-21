import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-introduction',
  templateUrl: `introduction.component.html`,
  styleUrls: ['introduction.compoenet.css'],
  
})
export class IntroductionComponent implements OnInit {
  images: string[] = [
    'https://assets.bosecreative.com/transform/b8842786-2422-48f6-b24b-2d6e440d42dc/Set_Ultra_Earbuds_Black_with_Black_Fabric_Case?io=width:816,height:667,transform:fit&io=width:816,height:667,transform:fit',
    'https://assets.bosecreative.com/transform/444af565-8460-4068-a8f1-b288613d15e2/SS_CC_007_RGB?io=width:816,height:667,transform:fit&io=width:816,height:667,transform:fit',
    'https://assets.bosecreative.com/transform/4326aee6-22d1-424d-b3d1-0dc72ea3f6cb/FRM_Tempo_008_RGB?io=width:816,height:667,transform:fit&io=width:816,height:667,transform:fit'
    
   
    // Add more image URLs as needed
  ];

  descriptions: string[] = [
    'Not your typical earbuds',
    'Portable Bluetooth® speaker system',
    'Frames Tempo',
    
  ];


  currentImageIndex = 0;

  ngOnInit() {
    setInterval(() => {
      this.showNextImage();
    }, 5000); // Change image every 5 seconds (adjust as needed)
  }

  showNextImage() {
    this.currentImageIndex = (this.currentImageIndex + 1) % this.images.length;
  }
}