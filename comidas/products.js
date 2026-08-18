window.STORES=['Mercadona','Carrefour Express','Eroski'];
const FRESH={
  'Pechuga de pollo':{label:'Pechuga de pollo fileteada',img:'https://loremflickr.com/360/360/chicken,breast,raw?lock=2101'},
  'Pechuga de pollo/pavo':{label:'Pechuga de pollo fileteada',img:'https://loremflickr.com/360/360/chicken,breast,raw?lock=2101'},
  'Ternera magra':{label:'Filetes de ternera magra',img:'https://loremflickr.com/360/360/beef,steak,raw?lock=2102'},
  'Merluza':{label:'Filetes de merluza',img:'https://loremflickr.com/360/360/hake,fish,fillet?lock=2103'},
  'Salmón':{label:'Lomos de salmón',img:'https://loremflickr.com/360/360/salmon,fillet,raw?lock=2104'},
  'Gambas':{label:'Gambas peladas',img:'https://loremflickr.com/360/360/shrimp,prawns?lock=2105'},
  'Patatas':{label:'Patatas para cocer',img:'https://loremflickr.com/360/360/potatoes?lock=2106'},
  'Pan':{label:'Pan integral',img:'https://loremflickr.com/360/360/wholegrain,bread?lock=2107'},
  'Verdura variada':{label:'Verdura fresca variada',img:'https://loremflickr.com/360/360/fresh,vegetables?lock=2108'},
  'Fruta variada':{label:'Fruta fresca variada',img:'https://loremflickr.com/360/360/fresh,fruit?lock=2109'},
  'Plátano':{label:'Plátano de Canarias',img:'https://loremflickr.com/360/360/bananas?lock=2110'},
  'Ensalada':{label:'Bolsa de ensalada mezcla',img:'https://loremflickr.com/360/360/salad,leaves?lock=2111'}
};
const P={
  'Atún al natural':{
    'Mercadona':{name:'Atún claro al natural Hacendado',product:'Pack 6 latas',images:['https://a2.soysuper.com/58ba938a49f25ba52a1296f5a5e49c2e.1500.0.0.0.wmark.2a90d33a.jpg','https://dx7csy7aghu7b.cloudfront.net/prods/37046.webp']},
    'Carrefour Express':{name:'Atún claro al natural Classic Carrefour',product:'Pack 6 latas de 56 g',images:['https://a0.soysuper.com/4ff102192bb165a1a218f9555b989c95.1500.0.0.0.wmark.76b3ed80.jpg']},
    'Eroski':{name:'Atún claro al natural EROSKI',product:'Pack 6 x 56 g',images:['https://supermercado.eroski.es/images/21789656_x.jpg']}
  },
  'Arroz':{
    'Mercadona':{name:'Arroz redondo Hacendado 1 kg',product:'Bolsa 1 kg',images:['https://mareni.com/wp-content/uploads/rundkornreis-arro9103.jpg']},
    'Carrefour Express':{name:'Arroz redondo Carrefour Bio 1 kg',product:'Bolsa 1 kg',images:['https://static.carrefour.es/hd_1500x_/img_pim_food/718627_00_1.jpg']},
    'Eroski':{name:'Arroz redondo SOS 1 kg',product:'Bolsa 1 kg',images:['https://www.yopongoelhielo.com/3142/round-rice-sos.jpg','https://d2j6dbq0eux0bg.cloudfront.net/images/44275241/3704115805.jpg']}
  },
  'Pasta':{
    'Mercadona':{name:'Spaghetti Hacendado 500 g',product:'Paquete 500 g',images:['https://dx7csy7aghu7b.cloudfront.net/prods/35421.webp','https://prod-mercadona.imgix.net/images/12cb042a1db2a965e3a7b1be7b01bd62.jpg?fit=crop&h=600&w=600']},
    'Carrefour Express':{name:'Spaghetti Carrefour Classic 500 g',product:'Paquete 500 g',images:['https://static.carrefour.es/hd_510x_/img_pim_food/446545_00_1.jpg','https://www.carrefour.pl/images/product/org/carrefour-classic-spaghetti-500-g-qrj49a.jpg']},
    'Eroski':{name:'Spaghetti cocción rápida EROSKI 500 g',product:'Paquete 500 g',images:['https://dx7csy7aghu7b.cloudfront.net/prods/70264.webp']}
  },
  'Pasta + láminas de lasaña':{
    'Mercadona':{name:'Spaghetti Hacendado + placas de lasaña',product:'Ambos de Mercadona',images:['https://dx7csy7aghu7b.cloudfront.net/prods/35421.webp']},
    'Carrefour Express':{name:'Spaghetti Carrefour + placas de lasaña',product:'Ambos de Carrefour',images:['https://static.carrefour.es/hd_510x_/img_pim_food/446545_00_1.jpg']},
    'Eroski':{name:'Spaghetti EROSKI + placas de lasaña',product:'Ambos de Eroski',images:['https://dx7csy7aghu7b.cloudfront.net/prods/70264.webp','https://supermercado.eroski.es/images/19640317_x.jpg']}
  },
  'Garbanzos cocidos':{
    'Mercadona':{name:'Garbanzo cocido Hacendado',product:'Tarro 570 g · 400 g escurrido',images:['https://a2.soysuper.com/4832c49acb32b274273722865f82ecaa.1500.0.0.0.wmark.0b50319d.jpg']},
    'Carrefour Express':{name:'Garbanzos cocidos Classic Carrefour',product:'Tarro 570 g · 400 g escurrido',images:['https://static.carrefour.es/hd_510x_/img_pim_food/709626_00_1.jpg','https://static.carrefour.es/hd_1500x_/img_pim_food/686220_00_1.jpg']},
    'Eroski':{name:'Garbanzo cocido EROSKI',product:'Frasco 400 g escurrido',images:['https://dx7csy7aghu7b.cloudfront.net/prods/7466372.webp']}
  },
  'Lentejas cocidas':{
    'Mercadona':{name:'Lentejas cocidas Hacendado',product:'Tarro de lentejas cocidas',images:['https://loremflickr.com/360/360/lentils,jar?lock=2120']},
    'Carrefour Express':{name:'Lentejas cocidas Classic Carrefour',product:'Tarro 400 g escurrido',images:['https://static.carrefour.es/hd_510x_/img_pim_food/709624_00_1.jpg']},
    'Eroski':{name:'Lentejas cocidas EROSKI',product:'Frasco 400 g',images:['https://loremflickr.com/360/360/lentils,jar?lock=2121']}
  },
  'Yogur natural':{
    'Mercadona':{name:'Yogur natural Hacendado',product:'Pack 6 unidades',images:['https://prod-mercadona.imgix.net/images/2808dcefb83f2873d66fcd3d3bb45cc3.jpg?fit=crop&h=600&w=600']},
    'Carrefour Express':{name:'Yogur natural Carrefour',product:'Pack 8 x 125 g',images:['https://a1.soysuper.com/1a86cfb9b94ef3fddfdb049f5ca9c117.1500.0.0.0.wmark.67c2fd0f.jpg']},
    'Eroski':{name:'Yogur natural EROSKI basic',product:'Pack 12 x 125 g',images:['https://dx7csy7aghu7b.cloudfront.net/prods/71820.webp','https://dx7csy7aghu7b.cloudfront.net/prods/7521382.webp']}
  },
  'Huevos':{
    'Mercadona':{name:'Huevos medianos M',product:'Pack 12 huevos',images:['https://prod-mercadona.imgix.net/images/96ba986bc89d7298da0a7605824227a9.jpg?fit=crop&h=600&w=600']},
    'Carrefour Express':{name:'Huevos frescos M Carrefour',product:'Pack de huevos M',images:['https://loremflickr.com/360/360/eggs,carton?lock=2130']},
    'Eroski':{name:'Huevos frescos M EROSKI',product:'Pack de huevos M',images:['https://loremflickr.com/360/360/eggs,carton?lock=2131']}
  },
  'Leche':{
    'Mercadona':{name:'Leche entera Hacendado 1 L',product:'Brick 1 L',images:['https://loremflickr.com/360/360/milk,carton?lock=2140']},
    'Carrefour Express':{name:'Leche entera Carrefour 1 L',product:'Brick 1 L',images:['https://loremflickr.com/360/360/milk,carton?lock=2141']},
    'Eroski':{name:'Leche entera EROSKI 1 L',product:'Brick 1 L',images:['https://media2.ocu.org/images/63B3D3D81DFD60E4837058F39CD85827A970B5B0/w600-c4/Leches-enteras-EROSKI-LECHE-ENTERA-UHT.JPG']}
  },
  'Queso':{
    'Mercadona':{name:'Mozzarella rallada Hacendado',product:'Bolsa de queso rallado',images:['https://loremflickr.com/360/360/mozzarella,cheese?lock=2150']},
    'Carrefour Express':{name:'Mozzarella rallada Carrefour',product:'Bolsa 200 g',images:['https://static.carrefour.es/hd_510x_/img_pim_food/710785_00_1.jpg']},
    'Eroski':{name:'Mozzarella rallada EROSKI',product:'Bolsa de queso rallado',images:['https://loremflickr.com/360/360/mozzarella,cheese?lock=2151']}
  },
  'Tomate / salsa de tomate':{
    'Mercadona':{name:'Tomate natural triturado Hacendado',product:'Lata / brick',images:['https://a0.soysuper.com/f12225c6b486fe52f5232c75da13e884.1500.0.0.0.wmark.c10185ae.jpg']},
    'Carrefour Express':{name:'Tomate triturado Carrefour',product:'Brick / lata',images:['https://loremflickr.com/360/360/tomato,sauce,can?lock=2160']},
    'Eroski':{name:'Tomate triturado EROSKI',product:'Brick / lata',images:['https://loremflickr.com/360/360/tomato,sauce,can?lock=2161']}
  },
  'Aceite de oliva':{
    'Mercadona':{name:'Aceite de oliva virgen extra Hacendado',product:'Botella 1 L',images:['https://okdiario.com/img/2025/04/16/mercadona-revienta-los-precios-y-hace-una-rebaja-historica-del-aceite-de-oliva.jpg']},
    'Carrefour Express':{name:'Aceite de oliva virgen extra Carrefour',product:'Botella 1 L',images:['https://loremflickr.com/360/360/olive,oil,bottle?lock=2170']},
    'Eroski':{name:'Aceite de oliva virgen extra EROSKI',product:'Botella 1 L',images:['https://okdiario.com/img/2024/05/22/cuesta-990-euros-y-es-el-mejor-aceite-virgen-extra-de-supermercado.jpg']}
  }
};
window.getProduct=function(key,store){
  const special=P[key]?.[store];
  if(special)return {...special,store};
  const f=FRESH[key];
  if(f)return {name:f.label,product:`Producto fresco · ${store}`,store,images:[f.img]};
  return {name:key,product:`Producto de ${store}`,store,images:[]};
};