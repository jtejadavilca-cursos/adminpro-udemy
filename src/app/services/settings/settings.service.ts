import { Injectable, OnInit, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';

@Injectable()
export class SettingsService implements OnInit {
  ajustes: Ajustes = {
    temaUrl: 'assets/css/colors/default-dark.css',
    tema: 'default-dark'
  };

  constructor(@Inject(DOCUMENT) private _document) {
    this.cargarAjustes();
  }

  ngOnInit() {}


  setTema(tema: string, event) {
    this.ajustes.temaUrl = `assets/css/colors/${tema}.css`;
    this.ajustes.tema = tema;
    this.guardarAjustes();
    this.aplicarTema( event );
  }

  aplicarTema( event ) {
    document.getElementById('tema').setAttribute('href', this.ajustes.temaUrl);

    if ( event != null ) {
      this.aplicarCheckOnClick(event);
    }
  }

  aplicarCheckOnClick( event: any ) {
    let selectores = this._document.getElementsByClassName('selector');

    for ( let ref of selectores ) {
      ref.classList.remove('working');
    }

    event.target.classList.add('working');
  }

  aplicarCheckAlCargarPagina() {
    let selectores: any = document.getElementsByClassName('selector');
    let tema = this.ajustes.tema;


    for ( let ref of selectores ) {
      if ( ref.getAttribute('data-theme') === tema ) {
        ref.classList.add('working');
        break;
      }
    }
  }

  guardarAjustes() {
    localStorage.setItem('ajustes', JSON.stringify(this.ajustes));
  }

  cargarAjustes() {
    if ( localStorage.getItem('ajustes') ) {
      this.ajustes = JSON.parse(localStorage.getItem('ajustes'));
    }
    this.aplicarTema( null );
  }
}

interface Ajustes {
  temaUrl: string;
  tema: string;
}
