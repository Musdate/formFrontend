export interface Product {
    _id:                string;
    producto:           string;
    cantidad:           number;
    formatoBotella:     string;
    tipoVino:           string;
    anioCosecha:        string;
    cepa:               string;
    tipoCierre:         string;
    etiqueta:           string;
}

export enum Vino {
    ER_Icone         = 'Escudo Rojo Icone',
    ER_Origine       = 'Escudo Rojo Origine',
    ER_Grande_R      = 'Escudo Rojo Grande Réserve',
    ER_Reserve       = 'Escudo Rojo Réserve',
    Mapu_GR          = 'Mapu Gran Reserva',
    Mapu_R           = 'Mapu Reserva',
    Mapu             = 'Mapu',
    Andes_GR         = 'Mas Andes Gran Reserva',
    Andes_R          = 'Mas Andes Reserva < Cambio',
    Andes            = 'Mas Andes',
    Anderra          = 'Anderra',
    Reserva          = 'Reserva',
    Reserva_E        = 'Reserva Especial',
    Mapa_R           = 'Mapa Reserva',
    Mapa             = 'Mapa',
    Varietal_B       = 'Varietal Beige',
    ND_Andes         = 'ND23 Mas Andes',
    ND_Andes_R       = 'ND23 Mas Andes Reserva',
    ND_Andes_GR      = 'ND23 Mas Andes Gran Reserva',
    ND_Andes_PLTO    = 'ND23 Mas Andes PLTO'
}