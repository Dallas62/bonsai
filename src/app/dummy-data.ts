
import { Bonsai } from './models/bonsai';

// http://www.bonsaiempire.fr/especes/identifier-bonsai
const BONSAIS: Bonsai[] = [
  {
    _id: '1',
    name: 'Erable japonais',
    scientific_name: 'Acer palmatum',
    description: 'Très courant et facile d’entretien pour les espèces aux feuilles découpées distinctement comme des mains et des lobes à cinq pointes. Il nécessite une protection contre les gros gels et le soleil intense.',
    sun: 2,
    humidity: 2,
    temperature: 2
  },
  {
    _id: '2',
    name: 'Erable trident',
    scientific_name: 'Acer buergerianum',
    description: 'Une espèce asiatique d’érable avec de petites feuilles à trois lobes, pas totalement rustique, mais sinon très facile d’entretien et robuste.',
    sun: 2,
    humidity: 2,
    temperature: 3
  },
  {
    _id: '3',
    name: 'Grenadier',
    scientific_name: 'Punica granatum',
    description: 'Une espèce à fleurs rouge et fruits ronds, natif des pays méditerranéens. Il ne supporte pas le gel.',
    sun: 2,
    humidity: 3,
    temperature: 2
  },
  {
    _id: '4',
    name: 'Orme de Chine',
    scientific_name: 'Ulmus parviflora',
    description: 'Une espèce robuste et dans la plupart des cas des petites feuilles. Toutes ne sont pas totalement rustiques.',
    sun: 1,
    humidity: 2,
    temperature: 1
  },
  {
    _id: '5',
    name: 'Orme du Japon',
    scientific_name: 'Zelkova',
    description: 'Une espèce classique pour le bonsaï, qui est généralement rencontrée dans un style balai à la ramification délicate. Il fait partie de la famille de l’orme. Le Zelkova est facile d’entretien et réagit très bien à une taille régulière.',
    sun: 3,
    humidity: 3,
    temperature: 2
  },
  {
    _id: '6',
    name: 'Hêtre commun',
    scientific_name: 'Fagus sylvatica',
    description: 'L’hêtre de nos forêts convient bien au bonsaï, mais nécessite une protection contre les gros gels quand il est planté en pot.',
    sun: 2,
    humidity: 2,
    temperature: 2
  },
  {
    _id: '7',
    name: 'Hêtre crénelé',
    scientific_name: 'Fagus crenata',
    description: 'Il ressemble beaucoup à l’hêtre commun, mais ces feuilles sont plus fines et son écorce lisse, spécialement appréciée est presque blanche.',
    sun: 2,
    humidity: 3,
    temperature: 2
  },
  {
    _id: '8',
    name: 'Charme',
    scientific_name: 'Carpinus betula',
    description: 'Ce n’est pas un hêtre au sens stricte et il fait partie de la famille du bouleau. Néanmoins, il ressemble beaucoup au hêtre. Les fleurs et fruits sont différents et les bourgeons (plus petits, plus ronds) ne sont pas semblables aux bourgeons très pointus et bruns des hêtres. Planté dans une pot plat, le charme nécessite une protection contre le froid.',
    sun: 3,
    humidity: 2,
    temperature: 3
  },
  {
    _id: '9',
    name: 'Charme de Corée',
    scientific_name: 'Carpinus turczaninowii',
    description: 'Une espèce asiatique de charme, qui produit des feuilles plus petites, une ramification plus fine, d’intéressants troncs noueux et une magnifique couleur d’automne rouge et jaune.',
    sun: 3,
    humidity: 2,
    temperature: 1
  },
  {
    _id: '10',
    name: 'Glycine',
    scientific_name: 'Wisteria',
    description: 'Une vigne volubile et vigoureuse aux feuilles composées, qui produit de longues vrilles et des fleurs en grappes bleues, violettes ou blanches (selon la variété). C’est une espèce robuste qui demande beaucoup d’eau en été et ne supporte pas les gels tardifs au printemps.',
    sun: 2,
    humidity: 3,
    temperature: 2
  },
  {
    _id: '11',
    name: 'Pommier',
    scientific_name: 'Malus',
    description: 'Une espèce qui fleurit et fructifie joliment. Les fruits peuvent être jaune ou rouge, selon les cultivars. Les arbres sont assez robustes, mais doivent être fréquemment auscultés pour repérer les parasites et les maladies.',
    sun: 1,
    humidity: 2,
    temperature: 1
  },
  {
    _id: '12',
    name: 'Cerisier du Japon',
    scientific_name: 'Prunus serrulata',
    description: 'Un arbre avec une tronc rugueux et sombre et une sublime floraison rose au printemps. Les fleurs s’épanouissent en grappes. Les vieux cerisiers japonais ne doivent pas être taillés trop brusquement au niveau des racines car elles peuvent être sujettes aux maladies fongiques. La beauté des fleurs de cerisier est unique.',
    sun: 2,
    humidity: 3,
    temperature: 2
  },
  {
    _id: '13',
    name: 'Abricotier du Japon',
    scientific_name: 'Prunus mume',
    description: 'Un héraut classique du printemps japonais, avec des fleurs simples blanches, roses ou rouges, très odorantes, qui apparaissent individuellement sur un arbre sans feuilles, et contrastent joliment avec les troncs noirs et noueux. L’entretien de l’abricotier est assez difficile, en particulier la taille, à cause des branches intérieures qui tendent à sécher, et parce que les rameaux et les branches sont délicat à ligaturer car très cassants.',
    sun: 2,
    humidity: 3,
    temperature: 2
  },
  {
    _id: '14',
    name: 'Cognassier du Japon',
    scientific_name: 'Chaenomeles japonica',
    description: 'En général il pousse en buisson ou avec de multiples troncs, ces espèces produisent des fleurs au tout début du printemps. Les fleurs sont oranges ou rouges mais certains cultivars peuvent aussi faire des fleurs blanches ou multicolores. Les feuilles sont petites et les fruits plus ou moins ronds, et deviennent jaunes en mûrissant en automne.',
    sun: 2,
    humidity: 2,
    temperature: 3
  },
  {
    _id: '15',
    name: 'Cognassier de Chine',
    scientific_name: 'Pseudocydonia sinensis',
    description: 'Une espèce robuste avec une écorce magnifique qui desquame par plaques, feuilles brillantes, fleurs roses et de grands fruits ovoïdes, jaunes et lisses. Comme la ramification est assez grossière et les feuilles grandes, il convient mieux aux grands bonsaïs. Le cognassier est d’entretien facile mais nécessite une protection en hiver.',
    sun: 3,
    humidity: 2,
    temperature: 1
  },
  {
    _id: '16',
    name: 'Chêne',
    scientific_name: 'Quercus',
    description: 'Un genre avec plusieurs espèces différentes (y compris quelques espèces persistantes méditerranéenne), dont les lobes des feuilles sont tout à fait caractéristiques. Les chênes produisent des noix appelées glands qui sont sertis dans une cupule en forme de coupe. Ce sont des arbres très robustes qui deviennent très grands et très vieux dans la nature. En pot à bonsaï, les chênes doivent être protégés des forts gels (les chênes méditerranéens doivent être hivernés hors-gel).',
    sun: 2,
    humidity: 3,
    temperature: 2
  },
  {
    _id: '17',
    name: 'Micocoulier',
    scientific_name: 'Celtis',
    description: 'Arbre à l’écorce grise et drupes rondes, qui développe une ramification fine et des feuilles dentelées. Toutes les variétés de Micocoulier ne sont pas résistantes au gel.',
    sun: 1,
    humidity: 3,
    temperature: 2
  },
  {
    _id: '18',
    name: 'Stewartia',
    scientific_name: 'Stewartia monadelpha',
    description: 'Le Stewartia est originaire de l\'est de l\'Asie et est facile à identifier de par son écorce à écailles orange.',
    sun: 2,
    humidity: 1,
    temperature: 2
  },
  {
    _id: '19',
    name: 'Troène',
    scientific_name: 'Ligustrum',
    description: 'Un genre produisant des feuilles très variées, généralement persistantes et parfois panachées. Le troène se ramifie très bien, est facile d’entretien et robuste. Des fleurs blanches et des baies noires peuvent apparaître si l’arbre n’est pas taillé continuellement.',
    sun: 1,
    humidity: 2,
    temperature: 3
  },
  {
    _id: '20',
    name: 'Buis',
    scientific_name: 'Buxus sempervirens',
    description: 'Souvent utilisé pour des petites haies, topiaires et plantes en pot. Le buis porte des petites feuilles rondes, vertes et brillantes, et une écorce beige claire. La plante est toxique, mais peut néanmoins être infectée par divers parasites.',
    sun: 1,
    humidity: 3,
    temperature: 2
  },
  {
    _id: '21',
    name: 'Chèvrefeuille',
    scientific_name: 'Lonicera nitida',
    description: 'Cette espèce est souvent confondue avec le buis et montre en effet quelques similitudes. Les fleurs et les fruits sont néanmoins différents et le chèvrefeuille porte des feuilles plus étroites et une écorce qui desquame en bandes. Comme les feuilles sont petites et que la ramification peut-être affinée, le chèvrefeuille est bien adapté pour des très petits bonsaïs.',
    sun: 3,
    humidity: 1,
    temperature: 2
  },
  {
    _id: '22',
    name: 'Neige de juin',
    scientific_name: 'Serissa foetida',
    description: 'Un petit arbuste de l’Asie du Sud-Est, aux très petites feuilles, petites fleurs blanches et troncs d’une écorce claire. Certains cultivars portent des feuilles panachées. Quant la plante est taillée, elle dégage une odeur désagréable. La Neige de Juin ne supporte pas le gel et nécessite une température chaude et constante. Elle est très sensible à tout changement de conditions, au déplacement, et souffre du manque de lumière et d’humidité. Pour toutes ces raisons, elle n’est pas un bon choix pour des débutants en climat tempéré.',
    sun: 2,
    humidity: 2,
    temperature: 1
  },
  {
    _id: '23',
    name: 'Olivier',
    scientific_name: 'Olea europaea',
    description: 'Un arbre méditerranéen de taille moyenne qui est cultivé par l’humain depuis des milliers d’années. Son tronc s’épaissit très lentement mais l’arbre peut devenir très vieux. Les feuilles sont lancéolées, et d’un vert-gris sur la face supérieure et un gris argenté avec de petits poils sur la face inférieure. Au printemps, des grappes de fleurs blanc-jaunes peuvent apparaitre, suivies de fruits verts ou noirs. L’olivier est facile d’entretien, tolère des sécheresses passagères, mais ne supporte pas le gel. En climat tempéré, il nécessite un endroit hors-gel avec autant de lumière que possible.',
    sun: 1,
    humidity: 1,
    temperature: 3
  },
  {
    _id: '24',
    name: 'Arbre de Jade',
    scientific_name: 'Crassula',
    description: 'Un arbuste ou petit arbre succulent originaire d’Afrique aux épaisses feuilles brillantes et gros troncs. Il peut produire de petites fleurs blanches. Le Crassula demande beaucoup de lumière et aime l’exposition au plein soleil. Il peut vivre dehors l’été mais ne supporte aucun gel.',
    sun: 3,
    humidity: 2,
    temperature: 2
  },
  {
    _id: '25',
    name: 'Poivrier de Chine',
    scientific_name: 'Xanthoxylum piperitum',
    description: 'Un arbuste originaire d’Asie avec de feuilles opposées et composées. Ces graines sont utilisées comme une forte épice en Asie. Le poivrier porte des épines et son tronc est lisse et de couleur beige.',
    sun: 2,
    humidity: 3,
    temperature: 2
  }
];

export default BONSAIS;
