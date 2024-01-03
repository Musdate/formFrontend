import { Component, Input } from '@angular/core';
import { ComercialRequest } from 'src/app/reactive/interfaces/comercial-req.interface';
import * as pdfMake from 'pdfmake/build/pdfmake';
import * as pdfFonts from 'pdfmake/build/vfs_fonts';

(pdfMake.vfs as any) = pdfFonts.pdfMake.vfs;

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent {

  @Input()
  public comercial!: ComercialRequest;

  public cardExpanded: boolean = true;

  constructor () { }

  toggleData():void {
    this.cardExpanded = !this.cardExpanded;
  }

  generatePdf() {
    let contentPDF = [];

    contentPDF.push( {text: `${this.comercial.nombreSolicitud}\n\n`, style: 'header'} )

    for (let i = 0; i < this.comercial.productos.length; i++) {

      contentPDF.push(
        {
          text: [
            { text: 'Producto / Marca: ', style: 'subTitle' },
            { text: `${this.comercial.productos[i].producto}\n` },
            { text: 'Cantidad: ', style: 'subTitle' },
            { text: `${this.comercial.productos[i].cantidad}\n` },
            { text: 'Formato de Botella: ', style: 'subTitle' },
            { text: `${this.comercial.productos[i].formatoBotella}\n` },
            { text: 'Tipo de Vino: ', style: 'subTitle' },
            { text: `${this.comercial.productos[i].tipoVino}\n` },
            { text: 'Año Cosecha: ', style: 'subTitle' },
            { text: `${this.comercial.productos[i].anioCosecha}\n` },
            { text: 'Cepa: ', style: 'subTitle' },
            { text: `${this.comercial.productos[i].cepa}\n` },
            { text: 'Tipo de Cierre: ', style: 'subTitle' },
            { text: `${this.comercial.productos[i].tipoCierre}\n` },
            { text: 'Etiqueta / Contra etiqueta: ', style: 'subTitle' },
            { text: `${this.comercial.productos[i].etiqueta}\n\n` }
          ]
        }
      );

    }

    contentPDF.push(
      {
        text: [
          { text: 'Fecha de envío: ', style: 'subTitle' },
          { text: `${this.comercial.fechaEnvio}\n` },
          { text: 'Centro de costo (C.C): ', style: 'subTitle' },
          { text: `${this.comercial.centroCosto}\n` },
          { text: 'Cuenta Contable (CTA): ', style: 'subTitle' },
          { text: `${this.comercial.cuentaContable}\n` },
          { text: 'Conceptos: ', style: 'subTitle' },
          { text: `${this.comercial.conceptos}\n` },
          { text: 'Tipo de Embalaje: ', style: 'subTitle' },
          { text: `${this.comercial.tipoEmbalaje}\n` },
          { text: 'Nombre / Razón Social: ', style: 'subTitle' },
          { text: `${this.comercial.clienteNombre}\n` },
          { text: 'Fono: ', style: 'subTitle' },
          { text: `${this.comercial.clienteFono}\n` },
          { text: 'Email: ', style: 'subTitle' },
          { text: `${this.comercial.clienteEmail}\n` },
          { text: 'País: ', style: 'subTitle' },
          { text: `${this.comercial.clientePais}\n` },
          { text: 'Dirección: ', style: 'subTitle' },
          { text: `${this.comercial.clienteDireccion}\n` },
          { text: 'Transporte / Despacho: ', style: 'subTitle' },
          { text: `${this.comercial.despachoTransporte}\n` },
          { text: 'Despachador: ', style: 'subTitle' },
          { text: `${this.comercial.despachoRetira}\n` },
          { text: 'AWB#: ', style: 'subTitle' },
          { text: `${this.comercial.despachoAwb}\n` },
          { text: 'Costo de Envío: ', style: 'subTitle' },
          { text: `${this.comercial.despachoCosto}\n\n` }
        ]
      }
    )

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

    pdfMake.createPdf(docDefinition).download(this.comercial.nombreSolicitud);
    // pdfMake.createPdf(docDefinition).open();

  }

}
