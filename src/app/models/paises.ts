export class Paises {

    id?:Id;
    nome?: Nome;
    area?: Area;
    linguas?:Linguas;
    unidadesMonetarias?:UnidadeMonetaria;
    historico?:string;

    constructor(obj: Partial<Paises>){
        Object.assign(this, obj);
    }
}

export class Id{
    M49?: string;
    ISO_3166_1_ALPHA_2?: string;
    ISO_3166_1_ALPHA_3?: string;

    constructor(obj: Partial<Id>){
        Object.assign(this, obj);
    }
}

export class Area{
    total?:string;
    unidade?:Unidade;
    constructor(obj: Partial<Area>){
        Object.assign(this, obj);
    }
}

export class Unidade{
    nome?: string;
    símbolo?: string;
    multiplicador?: number;

    constructor(obj: Partial<Unidade>){
        Object.assign(this, obj);
    }
}

export class UnidadeMonetaria{
    nome?: string;
    constructor(obj: Partial<Linguas>){
        Object.assign(this, obj);
    }
}

export class Linguas{
    nome?: string;
    constructor(obj: Partial<Linguas>){
        Object.assign(this, obj);
    }
}

export class Nome{

    abreviado?: string;
    abreviado_EN?: string;
    abreviado_ES?: string;

    constructor(obj: Partial<Nome>){
     Object.assign(this, obj);
    }
}
