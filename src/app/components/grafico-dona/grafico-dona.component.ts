import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-grafico-dona',
  templateUrl: './grafico-dona.component.html',
  styles: []
})
export class GraficoDonaComponent implements OnInit {


    // Doughnut
    @Input() labels: string[] = ['Download Sales', 'In-Store Sales', 'Mail-Order Sales'];
    @Input() data: number[] = [350, 450, 100];
    @Input() chartType: string = 'doughnut';
    @Input() legend: string = 'Leyenda';

  constructor() { }

  ngOnInit() {
  }

}
