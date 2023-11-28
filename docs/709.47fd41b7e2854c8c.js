"use strict";(self.webpackChunkform_frontend=self.webpackChunkform_frontend||[]).push([[709],{3709:(le,d,c)=>{c.r(d),c.d(d,{ReactiveModule:()=>ce});var l=c(6814),p=c(7664),t=c(95),e=c(4946);function _(o,a){if(1&o&&(e.TgZ(0,"span",23),e._uU(1),e.qZA()),2&o){const n=e.oxw();e.xp6(1),e.hij(" ",n.getFieldError("producto")," ")}}function C(o,a){if(1&o&&(e.TgZ(0,"span",23),e._uU(1),e.qZA()),2&o){const n=e.oxw();e.xp6(1),e.hij(" ",n.getFieldError("cosecha")," ")}}function h(o,a){if(1&o&&(e.TgZ(0,"span",23),e._uU(1),e.qZA()),2&o){const n=e.oxw();e.xp6(1),e.hij(" ",n.getFieldError("formato")," ")}}function Z(o,a){if(1&o&&(e.TgZ(0,"span",23),e._uU(1),e.qZA()),2&o){const n=e.oxw();e.xp6(1),e.hij(" ",n.getFieldError("tipoBotella")," ")}}function x(o,a){if(1&o&&(e.TgZ(0,"span",23),e._uU(1),e.qZA()),2&o){const n=e.oxw();e.xp6(1),e.hij(" ",n.getFieldError("tipoCierre")," ")}}function q(o,a){if(1&o&&(e.TgZ(0,"span",23),e._uU(1),e.qZA()),2&o){const n=e.oxw();e.xp6(1),e.hij(" ",n.getFieldError("contraEtiquetas")," ")}}function T(o,a){1&o&&(e.TgZ(0,"span",23),e._uU(1," La Cantidad debe ser mayor a cero "),e.qZA())}function b(o,a){if(1&o&&(e.TgZ(0,"span",23),e._uU(1),e.qZA()),2&o){const n=e.oxw();e.xp6(1),e.hij(" ",n.getFieldError("observaciones")," ")}}const s={producto:"",cosecha:"",formato:"",tipoBotella:"",tipoCierre:"",etiqueta:"",contraEtiquetas:"",cantidad:0,observaciones:""};let v=(()=>{class o{constructor(n){this.fb=n,this.internalForm=this.fb.group({producto:["",[t.kI.required,t.kI.minLength(3)],[]],cosecha:["",[t.kI.required,t.kI.minLength(3)],[]],formato:["",[t.kI.required,t.kI.minLength(3)],[]],tipoBotella:["",[t.kI.required,t.kI.minLength(3)],[]],tipoCierre:["",[t.kI.required,t.kI.minLength(3)],[]],etiqueta:["",[t.kI.required,t.kI.minLength(3)],[]],contraEtiquetas:["",[t.kI.required,t.kI.minLength(3)],[]],cantidad:[0,[t.kI.min(0)],[]],observaciones:["",[t.kI.required,t.kI.minLength(3)],[]]})}ngOnInit(){this.internalForm.reset(s)}isValidField(n){return this.internalForm.controls[n].errors&&this.internalForm.controls[n].touched}getFieldError(n){if(!this.internalForm.controls[n])return null;const r=this.internalForm.controls[n].errors||{};for(const i of Object.keys(r))switch(i){case"required":return"Este campo es requerido.";case"minlength":return`Este campo requiere un m\xednimo de ${r.minlength.requiredLength} caracteres.`}return null}onSave(){this.internalForm.invalid?this.internalForm.markAllAsTouched():(console.log(this.internalForm.value),this.internalForm.reset(s))}static#e=this.\u0275fac=function(r){return new(r||o)(e.Y36(t.qu))};static#o=this.\u0275cmp=e.Xpm({type:o,selectors:[["ng-component"]],decls:59,vars:9,consts:[[1,"form-banner"],[1,"container"],["autocomplete","off",1,"formulario","container",3,"formGroup","ngSubmit"],[1,"campo"],["for","producto"],[1,"campo-interno"],["id","producto","type","text","formControlName","producto","placeholder","Nombre del producto"],["class","text-danger",4,"ngIf"],["for","cosecha"],["id","cosecha","type","text","formControlName","cosecha","placeholder","Cosecha del producto"],["for","formato"],["id","formato","type","text","formControlName","formato","placeholder","Formato del producto"],["for","tipoBotella"],["id","tipoBotella","type","text","formControlName","tipoBotella","placeholder","Tipo Botella"],["for","tipoCierre"],["id","tipoCierre","type","text","formControlName","tipoCierre","placeholder","Tipo de Cierre"],["for","contraEtiquetas"],["id","contraEtiquetas","type","text","formControlName","contraEtiquetas","placeholder","Contra Etiquetas"],["for","cantidad"],["id","cantidad","type","number","formControlName","cantidad","placeholder","Cantidad"],["for","observaciones"],["id","observaciones","type","text","formControlName","observaciones","placeholder","Observaciones","cols","20","rows","10"],["type","submit","value","Enviar",1,"btn","btn-form"],[1,"text-danger"]],template:function(r,i){1&r&&(e.TgZ(0,"div",0)(1,"div",1)(2,"h2"),e._uU(3,"Solicitud Interna"),e.qZA(),e.TgZ(4,"p"),e._uU(5," Esta Solicitud Entregara un vino que se encuentre en Stock. En observaciones puede incluir informaci\xf3n para seleccionar alguna alternativa disponible. "),e.qZA()()(),e.TgZ(6,"form",2),e.NdJ("ngSubmit",function(){return i.onSave()}),e.TgZ(7,"fieldset")(8,"legend"),e._uU(9,"Datos"),e.qZA(),e.TgZ(10,"div",3)(11,"label",4),e._uU(12,"Producto / Marca: "),e.qZA(),e.TgZ(13,"div",5),e._UZ(14,"input",6),e.YNc(15,_,2,1,"span",7),e.qZA()(),e.TgZ(16,"div",3)(17,"label",8),e._uU(18,"Cosecha: "),e.qZA(),e.TgZ(19,"div",5),e._UZ(20,"input",9),e.YNc(21,C,2,1,"span",7),e.qZA()(),e.TgZ(22,"div",3)(23,"label",10),e._uU(24,"Formato: "),e.qZA(),e.TgZ(25,"div",5),e._UZ(26,"input",11),e.YNc(27,h,2,1,"span",7),e.qZA()(),e.TgZ(28,"div",3)(29,"label",12),e._uU(30,"Tipo Botella: "),e.qZA(),e.TgZ(31,"div",5),e._UZ(32,"input",13),e.YNc(33,Z,2,1,"span",7),e.qZA()(),e.TgZ(34,"div",3)(35,"label",14),e._uU(36,"Tipo de Cierre: "),e.qZA(),e.TgZ(37,"div",5),e._UZ(38,"input",15),e.YNc(39,x,2,1,"span",7),e.qZA()(),e.TgZ(40,"div",3)(41,"label",16),e._uU(42,"Contra Etiquetas: "),e.qZA(),e.TgZ(43,"div",5),e._UZ(44,"input",17),e.YNc(45,q,2,1,"span",7),e.qZA()(),e.TgZ(46,"div",3)(47,"label",18),e._uU(48,"Cantidad: "),e.qZA(),e.TgZ(49,"div",5),e._UZ(50,"input",19),e.YNc(51,T,2,0,"span",7),e.qZA()(),e.TgZ(52,"div",3)(53,"label",20),e._uU(54,"Observaciones: "),e.qZA(),e.TgZ(55,"div",5),e._UZ(56,"textarea",21),e.YNc(57,b,2,1,"span",7),e.qZA()()(),e._UZ(58,"input",22),e.qZA()),2&r&&(e.xp6(6),e.Q6J("formGroup",i.internalForm),e.xp6(9),e.Q6J("ngIf",i.isValidField("producto")),e.xp6(6),e.Q6J("ngIf",i.isValidField("cosecha")),e.xp6(6),e.Q6J("ngIf",i.isValidField("formato")),e.xp6(6),e.Q6J("ngIf",i.isValidField("tipoBotella")),e.xp6(6),e.Q6J("ngIf",i.isValidField("tipoCierre")),e.xp6(6),e.Q6J("ngIf",i.isValidField("contraEtiquetas")),e.xp6(6),e.Q6J("ngIf",i.isValidField("cantidad")),e.xp6(6),e.Q6J("ngIf",i.isValidField("observaciones")))},dependencies:[l.O5,t._Y,t.Fj,t.wV,t.JJ,t.JL,t.sg,t.u],styles:["h2[_ngcontent-%COMP%]{margin-bottom:1rem}.contenido-principal[_ngcontent-%COMP%]{display:grid;padding:5rem 0 0}.form-banner[_ngcontent-%COMP%]{display:flex;background-color:#e8e3d9;min-height:25rem;align-items:center;margin:0 0 2rem}.formulario[_ngcontent-%COMP%]{max-width:60rem;margin:0 auto}.formulario[_ngcontent-%COMP%]   legend[_ngcontent-%COMP%]{background-color:#675145;color:#fff;width:100%;text-align:center;font-weight:700;padding:1rem;margin:0 0 1rem}.formulario[_ngcontent-%COMP%]   fieldset[_ngcontent-%COMP%]{border:1px solid #000000;margin:0 0 2rem;padding-top:2rem;padding-bottom:0}.campo[_ngcontent-%COMP%]{display:flex;flex-direction:column;margin:0 0 2rem}.campo[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:not([type=radio]), .campo[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%], .campo[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]{flex:1;border:1px solid #e1e1e1;padding:1rem}.campo-interno[_ngcontent-%COMP%]{display:flex;flex-direction:column;flex-grow:1}.campo-radio[_ngcontent-%COMP%]{margin:0 2rem 0 0}.campo-radio-input[_ngcontent-%COMP%]{margin:0 1rem 0 0}.text-danger[_ngcontent-%COMP%]{color:#dc3545}.btn-form[_ngcontent-%COMP%]{margin:2rem 0}@media (min-width: 768px){.formulario[_ngcontent-%COMP%]{max-width:120rem}.campo[_ngcontent-%COMP%]{flex-direction:row}.campo[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{flex-basis:12rem}}"]})}return o})();var F=c(9413),A=c(9862);let U=(()=>{class o{constructor(){this.baseUrl=F.N.baseUrl,this.http=(0,e.f3M)(A.eN)}onSave(n){return console.log("asdasdasd"),this.http.post(`${this.baseUrl}/comercial-req`,n)}static#e=this.\u0275fac=function(r){return new(r||o)};static#o=this.\u0275prov=e.Yz7({token:o,factory:o.\u0275fac,providedIn:"root"})}return o})();var P=c(3519),m=c.n(P);function O(o,a){if(1&o&&(e.TgZ(0,"span",39),e._uU(1),e.qZA()),2&o){const n=e.oxw();e.xp6(1),e.hij(" ",n.getFieldError("producto")," ")}}function E(o,a){if(1&o&&(e.TgZ(0,"span",39),e._uU(1),e.qZA()),2&o){const n=e.oxw();e.xp6(1),e.hij(" ",n.getFieldError("cantidad")," ")}}function M(o,a){if(1&o&&(e.TgZ(0,"span",39),e._uU(1),e.qZA()),2&o){const n=e.oxw();e.xp6(1),e.hij(" ",n.getFieldError("formatoBotella")," ")}}function y(o,a){if(1&o&&(e.TgZ(0,"span",39),e._uU(1),e.qZA()),2&o){const n=e.oxw();e.xp6(1),e.hij(" ",n.getFieldError("tipoVino")," ")}}function I(o,a){if(1&o&&(e.TgZ(0,"span",39),e._uU(1),e.qZA()),2&o){const n=e.oxw();e.xp6(1),e.hij(" ",n.getFieldError("anioCosecha")," ")}}function N(o,a){if(1&o&&(e.TgZ(0,"span",39),e._uU(1),e.qZA()),2&o){const n=e.oxw();e.xp6(1),e.hij(" ",n.getFieldError("cepa")," ")}}function w(o,a){if(1&o&&(e.TgZ(0,"span",39),e._uU(1),e.qZA()),2&o){const n=e.oxw();e.xp6(1),e.hij(" ",n.getFieldError("etiqueta")," ")}}function R(o,a){if(1&o&&(e.TgZ(0,"span",39),e._uU(1),e.qZA()),2&o){const n=e.oxw();e.xp6(1),e.hij(" ",n.getFieldError("fechaEnvio")," ")}}function J(o,a){if(1&o&&(e.TgZ(0,"span",39),e._uU(1),e.qZA()),2&o){const n=e.oxw();e.xp6(1),e.hij(" ",n.getFieldError("centroCosto")," ")}}function V(o,a){if(1&o&&(e.TgZ(0,"span",39),e._uU(1),e.qZA()),2&o){const n=e.oxw();e.xp6(1),e.hij(" ",n.getFieldError("cuentaContable")," ")}}function j(o,a){if(1&o&&(e.TgZ(0,"span",39),e._uU(1),e.qZA()),2&o){const n=e.oxw();e.xp6(1),e.hij(" ",n.getFieldError("conceptos")," ")}}function k(o,a){if(1&o&&(e.TgZ(0,"span",39),e._uU(1),e.qZA()),2&o){const n=e.oxw();e.xp6(1),e.hij(" ",n.getFieldError("tipoEmbalaje")," ")}}function Y(o,a){if(1&o&&(e.TgZ(0,"span",39),e._uU(1),e.qZA()),2&o){const n=e.oxw();e.xp6(1),e.hij(" ",n.getFieldError("clienteNombre")," ")}}function Q(o,a){if(1&o&&(e.TgZ(0,"span",39),e._uU(1),e.qZA()),2&o){const n=e.oxw();e.xp6(1),e.hij(" ",n.getFieldError("clienteFono")," ")}}function S(o,a){if(1&o&&(e.TgZ(0,"span",39),e._uU(1),e.qZA()),2&o){const n=e.oxw();e.xp6(1),e.hij(" ",n.getFieldError("clienteEmail")," ")}}function B(o,a){if(1&o&&(e.TgZ(0,"span",39),e._uU(1),e.qZA()),2&o){const n=e.oxw();e.xp6(1),e.hij(" ",n.getFieldError("clientePais")," ")}}function D(o,a){if(1&o&&(e.TgZ(0,"span",39),e._uU(1),e.qZA()),2&o){const n=e.oxw();e.xp6(1),e.hij(" ",n.getFieldError("clienteDireccion")," ")}}function L(o,a){if(1&o&&(e.TgZ(0,"span",39),e._uU(1),e.qZA()),2&o){const n=e.oxw();e.xp6(1),e.hij(" ",n.getFieldError("despachoTransporte")," ")}}function G(o,a){if(1&o&&(e.TgZ(0,"span",39),e._uU(1),e.qZA()),2&o){const n=e.oxw();e.xp6(1),e.hij(" ",n.getFieldError("despachoRetira")," ")}}function z(o,a){if(1&o&&(e.TgZ(0,"span",39),e._uU(1),e.qZA()),2&o){const n=e.oxw();e.xp6(1),e.hij(" ",n.getFieldError("despachoAwb")," ")}}function X(o,a){if(1&o&&(e.TgZ(0,"span",39),e._uU(1),e.qZA()),2&o){const n=e.oxw();e.xp6(1),e.hij(" ",n.getFieldError("despachoCosto")," ")}}const g={producto:"",cantidad:0,formatoBotella:"",tipoVino:"",anioCosecha:"",cepa:"",tipoCierre:"",etiqueta:"",fechaEnvio:"",centroCosto:"",cuentaContable:"",conceptos:"",tipoEmbalaje:"",clienteNombre:"",clienteFono:"",clienteEmail:"",clientePais:"",clienteDireccion:"",despachoTransporte:"",despachoRetira:"",despachoAwb:"",despachoCosto:0};let $=(()=>{class o{constructor(n){this.fb=n,this.comercialForm=this.fb.group({producto:["",[t.kI.required],[]],cantidad:[0,[t.kI.required],[]],formatoBotella:["",[],[]],tipoVino:["",[],[]],anioCosecha:["",[],[]],cepa:["",[],[]],tipoCierre:["",[],[]],etiqueta:["",[],[]],fechaEnvio:["",[],[]],centroCosto:["",[],[]],cuentaContable:["",[],[]],conceptos:["",[],[]],tipoEmbalaje:["",[],[]],clienteNombre:["",[],[]],clienteFono:["",[],[]],clienteEmail:["",[t.kI.email],[]],clientePais:["",[],[]],clienteDireccion:["",[],[]],despachoTransporte:["",[],[]],despachoRetira:["",[],[]],despachoAwb:["",[],[]],despachoCosto:[0,[],[]]}),this.ComercialService=(0,e.f3M)(U)}ngOnInit(){this.comercialForm.reset(g)}isValidField(n){return this.comercialForm.controls[n].errors&&this.comercialForm.controls[n].touched}getFieldError(n){if(!this.comercialForm.controls[n])return null;const r=this.comercialForm.controls[n].errors||{};document.getElementById(n)?.scrollIntoView({behavior:"smooth"});for(const i of Object.keys(r))switch(i){case"required":return"Este campo es requerido.";case"minlength":return`Este campo requiere un m\xednimo de ${r.minlength.requiredLength} caracteres.`}return null}onSave(){this.comercialForm.invalid?this.comercialForm.markAllAsTouched():(this.ComercialService.onSave(this.comercialForm.value).subscribe({next:()=>{m().fire({position:"top-end",title:"Solicitud Enviada",showConfirmButton:!1,icon:"success",timerProgressBar:!0,timer:1500,didClose:()=>window.scrollTo({top:0})})},error:n=>{m().fire({title:"Error",text:n,icon:"error"})}}),this.comercialForm.reset(g))}static#e=this.\u0275fac=function(r){return new(r||o)(e.Y36(t.qu))};static#o=this.\u0275cmp=e.Xpm({type:o,selectors:[["ng-component"]],decls:154,vars:22,consts:[[1,"form-banner"],[1,"container"],["autocomplete","off",1,"formulario","container",3,"formGroup","ngSubmit"],[1,"campo"],["for","nombre"],[1,"campo-interno"],["id","producto","type","text","formControlName","producto","placeholder","Nombre del producto"],["class","text-danger",4,"ngIf"],["id","cantidad","type","number","formControlName","cantidad","placeholder","Cantidad"],["id","formatoBotella","type","text","formControlName","formatoBotella","placeholder","Formato de Botella"],["id","tipoVino","type","text","formControlName","tipoVino","placeholder","Tipo de Vino"],["id","anioCosecha","type","text","formControlName","anioCosecha","placeholder","A\xf1o Cosecha"],["id","cepa","type","text","formControlName","cepa","placeholder","Cepa"],["for","tipoCierre"],[1,"campo-radio"],["id","corcho","type","radio","name","tipoCierre","formControlName","tipoCierre","value","corcho","checked","checked",1,"campo-radio-input"],["for","corcho"],["id","rosca","type","radio","name","tipoCierre","formControlName","tipoCierre","value","rosca",1,"campo-radio-input"],["for","rosca"],["id","etiqueta","type","text","formControlName","etiqueta","placeholder","Etiqueta / Contra etiqueta"],["id","fechaEnvio","type","text","formControlName","fechaEnvio","placeholder","Fecha de env\xedo"],["id","centroCosto","type","text","formControlName","centroCosto","placeholder","Centro de costo (C.C)"],["id","cuentaContable","type","text","formControlName","cuentaContable","placeholder","Cuenta Contable (CTA)"],["id","conceptos","type","text","formControlName","conceptos","placeholder","Conceptos"],["id","tipoEmbalaje","type","text","formControlName","tipoEmbalaje","placeholder","Tipo de Embalaje"],["id","clienteNombre","type","text","formControlName","clienteNombre","placeholder","Nombre o Raz\xf3n Social"],["for","fono"],["id","clienteFono","type","tel","formControlName","clienteFono","placeholder","Fono del Cliente"],["for","email"],["id","clienteEmail","type","email","formControlName","clienteEmail","placeholder","Email del Cliente"],["for","pais"],["id","clientePais","type","text","formControlName","clientePais","placeholder","Pa\xeds del Cliente"],["for","direccion"],["id","clienteDireccion","type","text","formControlName","clienteDireccion","placeholder","Direcci\xf3n del Cliente"],["id","despachoTransporte","type","text","formControlName","despachoTransporte","placeholder","Medio de Transporte / Despacho"],["id","despachoRetira","type","text","formControlName","despachoRetira","placeholder","Nombre de la Persona que Retira"],["id","despachoAwb","type","text","formControlName","despachoAwb","placeholder","AWB#"],["id","despachoCosto","type","number","formControlName","despachoCosto","placeholder","Costo de Env\xedo"],["type","submit","value","Enviar",1,"btn","btn-form"],[1,"text-danger"]],template:function(r,i){1&r&&(e.TgZ(0,"div",0)(1,"div",1)(2,"h2"),e._uU(3,"Solicitud Comercial"),e.qZA(),e.TgZ(4,"p"),e._uU(5," Esta Solicitud Entregara un vino que se encuentre en Stock. En observaciones puede incluir informaci\xf3n para seleccionar alguna alternativa disponible. "),e.qZA()()(),e.TgZ(6,"form",2),e.NdJ("ngSubmit",function(){return i.onSave()}),e.TgZ(7,"fieldset")(8,"legend"),e._uU(9,"Datos del Producto"),e.qZA(),e.TgZ(10,"div",3)(11,"label",4),e._uU(12,"Producto / Marca: "),e.qZA(),e.TgZ(13,"div",5),e._UZ(14,"input",6),e.YNc(15,O,2,1,"span",7),e.qZA()(),e.TgZ(16,"div",3)(17,"label",4),e._uU(18,"Cantidad: "),e.qZA(),e.TgZ(19,"div",5),e._UZ(20,"input",8),e.YNc(21,E,2,1,"span",7),e.qZA()(),e.TgZ(22,"div",3)(23,"label",4),e._uU(24,"Formato de Botella: "),e.qZA(),e.TgZ(25,"div",5),e._UZ(26,"input",9),e.YNc(27,M,2,1,"span",7),e.qZA()(),e.TgZ(28,"div",3)(29,"label",4),e._uU(30,"Tipo de Vino: "),e.qZA(),e.TgZ(31,"div",5),e._UZ(32,"input",10),e.YNc(33,y,2,1,"span",7),e.qZA()(),e.TgZ(34,"div",3)(35,"label",4),e._uU(36,"A\xf1o Cosecha: "),e.qZA(),e.TgZ(37,"div",5),e._UZ(38,"input",11),e.YNc(39,I,2,1,"span",7),e.qZA()(),e.TgZ(40,"div",3)(41,"label",4),e._uU(42,"Cepa: "),e.qZA(),e.TgZ(43,"div",5),e._UZ(44,"input",12),e.YNc(45,N,2,1,"span",7),e.qZA()(),e.TgZ(46,"div",3)(47,"label",13),e._uU(48,"Tipo de Cierre: "),e.qZA(),e.TgZ(49,"div",14),e._UZ(50,"input",15),e.TgZ(51,"label",16),e._uU(52,"Corcho "),e.qZA()(),e.TgZ(53,"div",14),e._UZ(54,"input",17),e.TgZ(55,"label",18),e._uU(56,"Rosca "),e.qZA()()(),e.TgZ(57,"div",3)(58,"label",4),e._uU(59,"Etiqueta / Contra etiqueta: "),e.qZA(),e.TgZ(60,"div",5),e._UZ(61,"input",19),e.YNc(62,w,2,1,"span",7),e.qZA()(),e.TgZ(63,"div",3)(64,"label",4),e._uU(65,"Fecha de env\xedo: "),e.qZA(),e.TgZ(66,"div",5),e._UZ(67,"input",20),e.YNc(68,R,2,1,"span",7),e.qZA()(),e.TgZ(69,"div",3)(70,"label",4),e._uU(71,"Centro de costo (C.C): "),e.qZA(),e.TgZ(72,"div",5),e._UZ(73,"input",21),e.YNc(74,J,2,1,"span",7),e.qZA()(),e.TgZ(75,"div",3)(76,"label",4),e._uU(77,"Cuenta Contable (CTA): "),e.qZA(),e.TgZ(78,"div",5),e._UZ(79,"input",22),e.YNc(80,V,2,1,"span",7),e.qZA()(),e.TgZ(81,"div",3)(82,"label",4),e._uU(83,"Conceptos: "),e.qZA(),e.TgZ(84,"div",5),e._UZ(85,"input",23),e.YNc(86,j,2,1,"span",7),e.qZA()(),e.TgZ(87,"div",3)(88,"label",4),e._uU(89,"Tipo de Embalaje: "),e.qZA(),e.TgZ(90,"div",5),e._UZ(91,"input",24),e.YNc(92,k,2,1,"span",7),e.qZA()()(),e.TgZ(93,"fieldset")(94,"legend"),e._uU(95,"Datos del Cliente"),e.qZA(),e.TgZ(96,"div",3)(97,"label",4),e._uU(98,"Nombre / Raz\xf3n Social: "),e.qZA(),e.TgZ(99,"div",5),e._UZ(100,"input",25),e.YNc(101,Y,2,1,"span",7),e.qZA()(),e.TgZ(102,"div",3)(103,"label",26),e._uU(104,"Fono: "),e.qZA(),e.TgZ(105,"div",5),e._UZ(106,"input",27),e.YNc(107,Q,2,1,"span",7),e.qZA()(),e.TgZ(108,"div",3)(109,"label",28),e._uU(110,"Email: "),e.qZA(),e.TgZ(111,"div",5),e._UZ(112,"input",29),e.YNc(113,S,2,1,"span",7),e.qZA()(),e.TgZ(114,"div",3)(115,"label",30),e._uU(116,"Pa\xeds: "),e.qZA(),e.TgZ(117,"div",5),e._UZ(118,"input",31),e.YNc(119,B,2,1,"span",7),e.qZA()(),e.TgZ(120,"div",3)(121,"label",32),e._uU(122,"Direcci\xf3n: "),e.qZA(),e.TgZ(123,"div",5),e._UZ(124,"input",33),e.YNc(125,D,2,1,"span",7),e.qZA()()(),e.TgZ(126,"fieldset")(127,"legend"),e._uU(128,"Datos del Despacho"),e.qZA(),e.TgZ(129,"div",3)(130,"label",32),e._uU(131,"Transporte / Despacho: "),e.qZA(),e.TgZ(132,"div",5),e._UZ(133,"input",34),e.YNc(134,L,2,1,"span",7),e.qZA()(),e.TgZ(135,"div",3)(136,"label",32),e._uU(137,"Despachador: "),e.qZA(),e.TgZ(138,"div",5),e._UZ(139,"input",35),e.YNc(140,G,2,1,"span",7),e.qZA()(),e.TgZ(141,"div",3)(142,"label",32),e._uU(143,"AWB#: "),e.qZA(),e.TgZ(144,"div",5),e._UZ(145,"input",36),e.YNc(146,z,2,1,"span",7),e.qZA()(),e.TgZ(147,"div",3)(148,"label",32),e._uU(149,"Costo de Env\xedo: "),e.qZA(),e.TgZ(150,"div",5),e._UZ(151,"input",37),e.YNc(152,X,2,1,"span",7),e.qZA()()(),e._UZ(153,"input",38),e.qZA()),2&r&&(e.xp6(6),e.Q6J("formGroup",i.comercialForm),e.xp6(9),e.Q6J("ngIf",i.isValidField("producto")),e.xp6(6),e.Q6J("ngIf",i.isValidField("cantidad")),e.xp6(6),e.Q6J("ngIf",i.isValidField("formatoBotella")),e.xp6(6),e.Q6J("ngIf",i.isValidField("tipoVino")),e.xp6(6),e.Q6J("ngIf",i.isValidField("anioCosecha")),e.xp6(6),e.Q6J("ngIf",i.isValidField("cepa")),e.xp6(17),e.Q6J("ngIf",i.isValidField("etiqueta")),e.xp6(6),e.Q6J("ngIf",i.isValidField("fechaEnvio")),e.xp6(6),e.Q6J("ngIf",i.isValidField("centroCosto")),e.xp6(6),e.Q6J("ngIf",i.isValidField("cuentaContable")),e.xp6(6),e.Q6J("ngIf",i.isValidField("conceptos")),e.xp6(6),e.Q6J("ngIf",i.isValidField("tipoEmbalaje")),e.xp6(9),e.Q6J("ngIf",i.isValidField("clienteNombre")),e.xp6(6),e.Q6J("ngIf",i.isValidField("clienteFono")),e.xp6(6),e.Q6J("ngIf",i.isValidField("clienteEmail")),e.xp6(6),e.Q6J("ngIf",i.isValidField("clientePais")),e.xp6(6),e.Q6J("ngIf",i.isValidField("clienteDireccion")),e.xp6(9),e.Q6J("ngIf",i.isValidField("despachoTransporte")),e.xp6(6),e.Q6J("ngIf",i.isValidField("despachoRetira")),e.xp6(6),e.Q6J("ngIf",i.isValidField("despachoAwb")),e.xp6(6),e.Q6J("ngIf",i.isValidField("despachoCosto")))},dependencies:[l.O5,t._Y,t.Fj,t.wV,t._,t.JJ,t.JL,t.sg,t.u],styles:["h2[_ngcontent-%COMP%]{margin-bottom:1rem}.contenido-principal[_ngcontent-%COMP%]{display:grid;padding:5rem 0 0}.form-banner[_ngcontent-%COMP%]{display:flex;background-color:#e8e3d9;min-height:25rem;align-items:center;margin:0 0 2rem}.formulario[_ngcontent-%COMP%]{max-width:60rem;margin:0 auto}.formulario[_ngcontent-%COMP%]   legend[_ngcontent-%COMP%]{background-color:#675145;color:#fff;width:100%;text-align:center;font-weight:700;padding:1rem;margin:0 0 1rem}.formulario[_ngcontent-%COMP%]   fieldset[_ngcontent-%COMP%]{border:1px solid #000000;margin:0 0 2rem;padding-top:2rem;padding-bottom:0}.campo[_ngcontent-%COMP%]{display:flex;flex-direction:column;margin:0 0 2rem}.campo[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:not([type=radio]), .campo[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%], .campo[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]{flex:1;border:1px solid #e1e1e1;padding:1rem}.campo-interno[_ngcontent-%COMP%]{display:flex;flex-direction:column;flex-grow:1}.campo-radio[_ngcontent-%COMP%]{margin:0 2rem 0 0}.campo-radio-input[_ngcontent-%COMP%]{margin:0 1rem 0 0}.text-danger[_ngcontent-%COMP%]{color:#dc3545}.btn-form[_ngcontent-%COMP%]{margin:2rem 0}@media (min-width: 768px){.formulario[_ngcontent-%COMP%]{max-width:120rem}.campo[_ngcontent-%COMP%]{flex-direction:row}.campo[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{flex-basis:12rem}}"]})}return o})();function W(o,a){if(1&o&&(e.TgZ(0,"span",15),e._uU(1),e.qZA()),2&o){const n=e.oxw();e.xp6(1),e.hij(" ",n.getFieldError("solicitante")," ")}}function H(o,a){if(1&o&&(e.TgZ(0,"span",15),e._uU(1),e.qZA()),2&o){const n=e.oxw();e.xp6(1),e.hij(" ",n.getFieldError("producto")," ")}}function K(o,a){if(1&o&&(e.TgZ(0,"span",15),e._uU(1),e.qZA()),2&o){const n=e.oxw();e.xp6(1),e.hij(" ",n.getFieldError("fechaEntrega")," ")}}function ee(o,a){if(1&o&&(e.TgZ(0,"span",15),e._uU(1),e.qZA()),2&o){const n=e.oxw();e.xp6(1),e.hij(" ",n.getFieldError("observaciones")," ")}}const u={solicitante:"",producto:"",cubaMezcla:"",fechaEntrega:"",observaciones:""};let oe=(()=>{class o{constructor(n){this.fb=n,this.genericForm=this.fb.group({solicitante:["",[t.kI.required,t.kI.minLength(3)],[]],producto:["",[t.kI.required,t.kI.minLength(3)],[]],cubaMezcla:["",[t.kI.required,t.kI.minLength(3)],[]],fechaEntrega:["",[t.kI.required,t.kI.minLength(3)],[]],observaciones:["",[t.kI.required,t.kI.minLength(3)],[]]})}ngOnInit(){this.genericForm.reset(u)}isValidField(n){return this.genericForm.controls[n].errors&&this.genericForm.controls[n].touched}getFieldError(n){if(!this.genericForm.controls[n])return null;const r=this.genericForm.controls[n].errors||{};for(const i of Object.keys(r))switch(i){case"required":return"Este campo es requerido.";case"minlength":return`Este campo requiere un m\xednimo de ${r.minlength.requiredLength} caracteres.`}return null}onSave(){this.genericForm.invalid?this.genericForm.markAllAsTouched():(console.log(this.genericForm.value),this.genericForm.reset(u))}static#e=this.\u0275fac=function(r){return new(r||o)(e.Y36(t.qu))};static#o=this.\u0275cmp=e.Xpm({type:o,selectors:[["ng-component"]],decls:35,vars:5,consts:[[1,"form-banner"],[1,"container"],["autocomplete","off",1,"formulario","container",3,"formGroup","ngSubmit"],[1,"campo"],["for","solicitante"],[1,"campo-interno"],["id","solicitante","type","text","formControlName","solicitante","placeholder","Solicitante"],["class","text-danger",4,"ngIf"],["for","producto"],["id","producto","type","text","formControlName","producto","placeholder","Producto / Vino"],["for","fechaEntrega"],["id","fechaEntrega","type","date","formControlName","fechaEntrega","placeholder","Fecha de Entrega"],["for","observaciones"],["id","observaciones","type","text","formControlName","observaciones","placeholder","Observaciones","cols","20","rows","10"],["type","submit","value","Enviar",1,"btn","btn-form"],[1,"text-danger"]],template:function(r,i){1&r&&(e.TgZ(0,"div",0)(1,"div",1)(2,"h2"),e._uU(3,"Solicitud Gen\xe9rica"),e.qZA(),e.TgZ(4,"p"),e._uU(5," Esta Solicitud Entregara un vino que se encuentre en Stock. En observaciones puede incluir informaci\xf3n para seleccionar alguna alternativa disponible. "),e.qZA()()(),e.TgZ(6,"form",2),e.NdJ("ngSubmit",function(){return i.onSave()}),e.TgZ(7,"fieldset")(8,"legend"),e._uU(9,"Datos"),e.qZA(),e.TgZ(10,"div",3)(11,"label",4),e._uU(12,"Solicitante: "),e.qZA(),e.TgZ(13,"div",5),e._UZ(14,"input",6),e.YNc(15,W,2,1,"span",7),e.qZA()(),e.TgZ(16,"div",3)(17,"label",8),e._uU(18,"Producto / Vino: "),e.qZA(),e.TgZ(19,"div",5),e._UZ(20,"input",9),e.YNc(21,H,2,1,"span",7),e.qZA()(),e.TgZ(22,"div",3)(23,"label",10),e._uU(24,"Fecha de Entrega: "),e.qZA(),e.TgZ(25,"div",5),e._UZ(26,"input",11),e.YNc(27,K,2,1,"span",7),e.qZA()(),e.TgZ(28,"div",3)(29,"label",12),e._uU(30,"Observaciones: "),e.qZA(),e.TgZ(31,"div",5),e._UZ(32,"textarea",13),e.YNc(33,ee,2,1,"span",7),e.qZA()()(),e._UZ(34,"input",14),e.qZA()),2&r&&(e.xp6(6),e.Q6J("formGroup",i.genericForm),e.xp6(9),e.Q6J("ngIf",i.isValidField("solicitante")),e.xp6(6),e.Q6J("ngIf",i.isValidField("producto")),e.xp6(6),e.Q6J("ngIf",i.isValidField("fechaEntrega")),e.xp6(6),e.Q6J("ngIf",i.isValidField("observaciones")))},dependencies:[l.O5,t._Y,t.Fj,t.JJ,t.JL,t.sg,t.u],styles:["h2[_ngcontent-%COMP%]{margin-bottom:1rem}.contenido-principal[_ngcontent-%COMP%]{display:grid;padding:5rem 0 0}.form-banner[_ngcontent-%COMP%]{display:flex;background-color:#e8e3d9;min-height:25rem;align-items:center;margin:0 0 2rem}.formulario[_ngcontent-%COMP%]{max-width:60rem;margin:0 auto}.formulario[_ngcontent-%COMP%]   legend[_ngcontent-%COMP%]{background-color:#675145;color:#fff;width:100%;text-align:center;font-weight:700;padding:1rem;margin:0 0 1rem}.formulario[_ngcontent-%COMP%]   fieldset[_ngcontent-%COMP%]{border:1px solid #000000;margin:0 0 2rem;padding-top:2rem;padding-bottom:0}.campo[_ngcontent-%COMP%]{display:flex;flex-direction:column;margin:0 0 2rem}.campo[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:not([type=radio]), .campo[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%], .campo[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]{flex:1;border:1px solid #e1e1e1;padding:1rem}.campo-interno[_ngcontent-%COMP%]{display:flex;flex-direction:column;flex-grow:1}.campo-radio[_ngcontent-%COMP%]{margin:0 2rem 0 0}.campo-radio-input[_ngcontent-%COMP%]{margin:0 1rem 0 0}.text-danger[_ngcontent-%COMP%]{color:#dc3545}.btn-form[_ngcontent-%COMP%]{margin:2rem 0}@media (min-width: 768px){.formulario[_ngcontent-%COMP%]{max-width:120rem}.campo[_ngcontent-%COMP%]{flex-direction:row}.campo[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{flex-basis:12rem}}"]})}return o})();var ne=c(4270),te=c(8014);const ie=[{path:"",component:(()=>{class o{static#e=this.\u0275fac=function(r){return new(r||o)};static#o=this.\u0275cmp=e.Xpm({type:o,selectors:[["ng-component"]],decls:3,vars:0,template:function(r,i){1&r&&e._UZ(0,"app-nav-bar")(1,"router-outlet")(2,"app-footer")},dependencies:[p.lC,ne.w,te.c],styles:["h2[_ngcontent-%COMP%]{margin-bottom:1rem}.contenido-principal[_ngcontent-%COMP%]{display:grid;padding:5rem 0 0}.form-banner[_ngcontent-%COMP%]{display:flex;background-color:#e8e3d9;min-height:25rem;align-items:center;margin:0 0 2rem}.formulario[_ngcontent-%COMP%]{max-width:60rem;margin:0 auto}.formulario[_ngcontent-%COMP%]   legend[_ngcontent-%COMP%]{background-color:#675145;color:#fff;width:100%;text-align:center;font-weight:700;padding:1rem;margin:0 0 1rem}.formulario[_ngcontent-%COMP%]   fieldset[_ngcontent-%COMP%]{border:1px solid #000000;margin:0 0 2rem;padding-top:2rem;padding-bottom:0}.campo[_ngcontent-%COMP%]{display:flex;flex-direction:column;margin:0 0 2rem}.campo[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:not([type=radio]), .campo[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%], .campo[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]{flex:1;border:1px solid #e1e1e1;padding:1rem}.campo-interno[_ngcontent-%COMP%]{display:flex;flex-direction:column;flex-grow:1}.campo-radio[_ngcontent-%COMP%]{margin:0 2rem 0 0}.campo-radio-input[_ngcontent-%COMP%]{margin:0 1rem 0 0}.text-danger[_ngcontent-%COMP%]{color:#dc3545}.btn-form[_ngcontent-%COMP%]{margin:2rem 0}@media (min-width: 768px){.formulario[_ngcontent-%COMP%]{max-width:120rem}.campo[_ngcontent-%COMP%]{flex-direction:row}.campo[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{flex-basis:12rem}}"]})}return o})(),children:[{path:"internal",component:v},{path:"comercial",component:$},{path:"generic",component:oe},{path:"**",redirectTo:"internal"}]}];let re=(()=>{class o{static#e=this.\u0275fac=function(r){return new(r||o)};static#o=this.\u0275mod=e.oAB({type:o});static#n=this.\u0275inj=e.cJS({imports:[p.Bz.forChild(ie),p.Bz]})}return o})();var ae=c(6208);let ce=(()=>{class o{static#e=this.\u0275fac=function(r){return new(r||o)};static#o=this.\u0275mod=e.oAB({type:o});static#n=this.\u0275inj=e.cJS({imports:[l.ez,re,t.UX,ae.m]})}return o})()}}]);