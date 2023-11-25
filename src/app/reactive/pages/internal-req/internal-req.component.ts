import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

const defaultForm = {
  producto: '',
  cosecha: '',
  formato: '',
  tipoBotella: '',
  tipoCierre: '',
  etiqueta: '',
  contraEtiquetas: '',
  cantidad: 0,
  observaciones: ''
};

@Component({
  templateUrl: './internal-req.component.html',
  styleUrls: ['../../layouts/request-layout/request-layout.component.scss']
})
export class InternalReqComponent implements OnInit {

  public internalForm: FormGroup = this.fb.group({
    producto:         ['', [ Validators.required, Validators.minLength(3) ], []],
    cosecha:          ['', [ Validators.required, Validators.minLength(3) ], []],
    formato:          ['', [ Validators.required, Validators.minLength(3) ], []],
    tipoBotella:      ['', [ Validators.required, Validators.minLength(3) ], []],
    tipoCierre:       ['', [ Validators.required, Validators.minLength(3) ], []],
    etiqueta:         ['', [ Validators.required, Validators.minLength(3) ], []],
    contraEtiquetas:  ['', [ Validators.required, Validators.minLength(3) ], []],
    cantidad:         [0 , [ Validators.min(0) ], []],
    observaciones:    ['', [ Validators.required, Validators.minLength(3) ], []],
  });

  constructor ( private fb: FormBuilder ) { }

  ngOnInit(): void {
    this.internalForm.reset(defaultForm);
  }

  isValidField( field: string ): boolean | null {
    return this.internalForm.controls[field].errors && this.internalForm.controls[field].touched;
  }

  getFieldError( field: string ): string | null {
    if ( !this.internalForm.controls[field] ) return null;

    const errors = this.internalForm.controls[field].errors || {};

    for (const key of Object.keys(errors)) {
      switch(key) {
        case 'required':
          return 'Este campo es requerido.';
        case 'minlength':
          return `Este campo requiere un mínimo de ${ errors['minlength'].requiredLength } caracteres.`;
      }
    }

    return null;
  }

  onSave():void {

    if ( this.internalForm.invalid ) {
      this.internalForm.markAllAsTouched();
      return;
    };

    console.log(this.internalForm.value);

    this.internalForm.reset(defaultForm);
  }

}
