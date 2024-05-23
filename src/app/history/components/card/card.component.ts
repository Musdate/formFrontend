import { Component, Input } from '@angular/core';
import * as pdfMake from 'pdfmake/build/pdfmake';
import * as pdfFonts from 'pdfmake/build/vfs_fonts';
import {
  ComercialRequest,
  InternalRequest,
  GenericRequest
} from 'src/app/reactive/interfaces';
import { HistoryService } from '../../services/history.service';
import { saveAs } from 'file-saver';

(pdfMake.vfs as any) = pdfFonts.pdfMake.vfs;

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent {

  @Input()
  public solicitud!: ComercialRequest | InternalRequest | GenericRequest;

  @Input()
  public tipo!: String;

  public cardExpanded: boolean = true;

  constructor (private historyService: HistoryService) { }

  toggleData():void {
    this.cardExpanded = !this.cardExpanded;
  }

  generatePdf() {

    this.historyService.generatePDF(this.solicitud).subscribe({
      next: (response: Blob) => {
        saveAs(response, `${this.solicitud.nombreSolicitud}.pdf`);
      },
      error: (error) => {
        console.error('Error al generar el PDF:', error);
      }
    });

  }

}
