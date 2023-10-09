import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

const defaultForm = {
  nombre: '',
  direccion: '',
  pais: '',
  ciudadComuna: '',
  atencion: '',
  fono: '',
  email: '',
  despachadoPor: ''
};

@Component({
  templateUrl: './comercial-req.component.html'
})
export class ComercialReqComponent {

  public comercialForm: FormGroup = this.fb.group({
    nombre:         ['', [ Validators.required, Validators.minLength(3) ], []],
    direccion:      ['', [ Validators.required, Validators.minLength(3) ], []],
    pais:           ['', [ Validators.required, Validators.minLength(3) ], []],
    ciudadComuna:   ['', [ Validators.required, Validators.minLength(3) ], []],
    atencion:       ['', [ Validators.required, Validators.minLength(3) ], []],
    fono:           ['', [ Validators.required, Validators.minLength(3) ], []],
    email:          ['', [ Validators.required, Validators.minLength(3) ], []],
    despachadoPor:  ['', [ Validators.required, Validators.minLength(3) ], []]
  });

  constructor ( private fb: FormBuilder ) { }

  ngOnInit(): void {
    this.comercialForm.reset(defaultForm);
  }

  isValidField( field: string ): boolean | null {
    return this.comercialForm.controls[field].errors && this.comercialForm.controls[field].touched;
  }

  getFieldError( field: string ): string | null {
    if ( !this.comercialForm.controls[field] ) return null;

    const errors = this.comercialForm.controls[field].errors || {};

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

    if ( this.comercialForm.invalid ) {
      this.comercialForm.markAllAsTouched();
      return;
    };

    console.log(this.comercialForm.value);

    this.comercialForm.reset(defaultForm);
  }
  
}
