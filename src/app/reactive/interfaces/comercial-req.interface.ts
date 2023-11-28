export interface ComercialRequest {
    _id:                string;
    producto:           string;
    cantidad:           number;
    formatoBotella:     string;
    tipoVino:           string;
    anioCosecha:        string;
    cepa:               string;
    tipoCierre:         string;
    etiqueta:           string;
    fechaEnvio:         string;
    centroCosto:        string;
    cuentaContable:     string;
    conceptos:          string;
    tipoEmbalaje:       string;
    clienteNombre:      string;
    clienteFono:        string;
    clienteEmail:       string;
    clientePais:        string;
    clienteDireccion:   string;
    despachoTransporte: string;
    despachoRetira:     string;
    despachoAwb:        string;
    despachoCosto:      number;
}