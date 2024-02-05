import { Component, Input } from '@angular/core';
import * as pdfMake from 'pdfmake/build/pdfmake';
import * as pdfFonts from 'pdfmake/build/vfs_fonts';
import {
  ComercialRequest,
  InternalRequest,
  GenericRequest
} from 'src/app/reactive/interfaces';

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

  constructor () { }

  toggleData():void {
    this.cardExpanded = !this.cardExpanded;
  }

  generatePdf() {
    let contentPDF = [];
    let text = [];

    contentPDF.push( {text: `${this.solicitud.nombreSolicitud}\n\n`, style: 'header'} )

    for (let i = 0; i < this.solicitud.productos.length; i++) {

      contentPDF.push(
        {
          text: [
            { text: 'Producto / Marca: ', style: 'subTitle' },
            { text: `${this.solicitud.productos[i].producto}\n` },
            { text: 'Cantidad: ', style: 'subTitle' },
            { text: `${this.solicitud.productos[i].cantidad}\n` },
            { text: 'Formato de Botella: ', style: 'subTitle' },
            { text: `${this.solicitud.productos[i].formatoBotella}\n` },
            { text: 'Tipo de Vino: ', style: 'subTitle' },
            { text: `${this.solicitud.productos[i].tipoVino}\n` },
            { text: 'Año Cosecha: ', style: 'subTitle' },
            { text: `${this.solicitud.productos[i].anioCosecha}\n` },
            { text: 'Cepa: ', style: 'subTitle' },
            { text: `${this.solicitud.productos[i].cepa}\n` },
            { text: 'Tipo de Cierre: ', style: 'subTitle' },
            { text: `${this.solicitud.productos[i].tipoCierre}\n` },
            { text: 'Etiqueta / Contra etiqueta: ', style: 'subTitle' },
            { text: `${this.solicitud.productos[i].etiqueta}\n\n` }
          ]
        }
      );

    }

    text.push({ text: 'Fecha de envío: ', style: 'subTitle' });
    text.push({ text: `${this.solicitud.fechaEnvio}\n` });
    text.push({ text: 'Centro de costo (C.C): ', style: 'subTitle' });
    text.push({ text: `${this.solicitud.centroCosto}\n` });
    text.push({ text: 'Cuenta Contable (CTA): ', style: 'subTitle' });
    text.push({ text: `${this.solicitud.cuentaContable}\n` });
    text.push({ text: 'Conceptos: ', style: 'subTitle' });
    text.push({ text: `${this.solicitud.conceptos}\n` });
    this.tipo == 'SC' && text.push({ text: 'Tipo de Embalaje: ', style: 'subTitle' });
    this.tipo == 'SC' && text.push({ text: `${this.solicitud.tipoEmbalaje}\n` });
    text.push({ text: 'Nombre / Razón Social: ', style: 'subTitle' });
    text.push({ text: `${this.solicitud.clienteNombre}\n` });
    text.push({ text: 'Fono: ', style: 'subTitle' });
    text.push({ text: `${this.solicitud.clienteFono}\n` });
    text.push({ text: 'Email: ', style: 'subTitle' });
    text.push({ text: `${this.solicitud.clienteEmail}\n` });
    this.tipo == 'SC' && text.push({ text: 'País: ', style: 'subTitle' });
    this.tipo == 'SC' && text.push({ text: `${this.solicitud.clientePais}\n` });
    text.push({ text: 'Dirección: ', style: 'subTitle' });
    text.push({ text: `${this.solicitud.clienteDireccion}\n` });
    text.push({ text: 'Transporte / Despacho: ', style: 'subTitle' });
    text.push({ text: `${this.solicitud.despachoTransporte}\n` });
    text.push({ text: 'Despachador: ', style: 'subTitle' });
    text.push({ text: `${this.solicitud.despachoRetira}\n` });
    text.push({ text: 'AWB#: ', style: 'subTitle' });
    text.push({ text: `${this.solicitud.despachoAwb}\n` });
    text.push({ text: 'Costo de Envío: ', style: 'subTitle' });
    text.push({ text: `${this.solicitud.despachoCosto}\n\n` });

    contentPDF.push({ text: text });

    const docDefinition = {
      content: [ contentPDF ],
      styles: {
        header: {
          fontSize: 18,
          bold: true
        },
        subTitle: {
          bold: true
        }
      }
    };

    pdfMake.createPdf(docDefinition).download(this.solicitud.nombreSolicitud);
    // pdfMake.createPdf(docDefinition).open();

  }

}
