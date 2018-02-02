import { Component, OnInit, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';
import { SettingsService } from '../../services/service.index';

@Component({
  selector: 'app-account-settings',
  templateUrl: './account-settings.component.html',
  styles: []
})
export class AccountSettingsComponent implements OnInit {

  constructor(@Inject(DOCUMENT) private _document, public _ajustes: SettingsService) { }

  ngOnInit() {this._ajustes.aplicarCheckAlCargarPagina(); }

  cambiarColor( tema: string, event ) {
    console.log(tema);
    this._ajustes.setTema(tema, event);
  }
}
