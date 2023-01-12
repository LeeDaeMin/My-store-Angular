import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-img',
  templateUrl: './img.component.html',
  styleUrls: ['./img.component.scss']
})
export class ImgComponent  implements OnInit {

  imageDefault = 'https://raw.githubusercontent.com/platzi/angular-componentes/2-step/src/assets/images/default.png';

  @Input() img: string = 'Valor inicial';
  @Output() loaded = new EventEmitter<string>();

  ngOnInit(): void{
  }

  imgError(){
    this.img = this.imageDefault
  }

  loadLoaded(){
    console.log('log from child');
    this.loaded.emit(this.img);
  }
}
