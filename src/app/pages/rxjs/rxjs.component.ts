import { Component, OnInit, OnDestroy } from '@angular/core';
// tslint:disable-next-line:import-blacklist
import { Observable, Subscription } from 'rxjs/Rx';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styles: []
})
export class RxjsComponent implements OnInit, OnDestroy {

  subscripcion: Subscription;

  constructor() {

    this.subscripcion = this.regresaObservable()
    .subscribe(
      num   =>  console.log('Subs', num),
      error =>  console.error( 'Error en el observable', error ),
      () => console.log('El observador terminó!')
    );
  }

  ngOnInit() {
  }

  ngOnDestroy() {
    this.subscripcion.unsubscribe();
  }

  regresaObservable(): Observable<number> {
    return new Observable( observer => {
      let contador = 0;
      let intervalo = setInterval( () => {

        contador += 1;
        observer.next( contador );

        if ( contador === 3 ) {
          clearInterval(intervalo);
          observer.complete();
        }

        if (contador === 2) {
          // clearInterval(intervalo);
          observer.error('Servidor caído.');
        }

      }, 1000);
    });
  }

}
