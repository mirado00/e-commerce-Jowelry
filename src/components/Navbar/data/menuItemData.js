import imgWBag from './../../../assets/image-acceuil/img-header/bagWoman.webp'
import imgMBag from './../../../assets/image-acceuil/img-header/bagMan.webp'
import imgBOWoman from './../../../assets/image-acceuil/img-header/BOFemme.webp'
import imgBOKids from './../../../assets/image-acceuil/img-header/BOEnfant.webp'
import imgBCMan from './../../../assets/image-acceuil/img-header/BCMan.webp'
import imgBCWoman from './../../../assets/image-acceuil/img-header/BCWoman.webp'
import imgCKinds from './../../../assets/image-acceuil/img-header/CKinds.webp'
import imgCWoman from './../../../assets/image-acceuil/img-header/CWoman.webp'
import imgMMan from './../../../assets/image-acceuil/img-header/MMan.webp'
import imgMWoman from './../../../assets/image-acceuil/img-header/MWoman.webp'

const menu = [
    {
        existing: true,
        nav: {
            name: 'Evenement',
        },
        link: '#',
    },
    {
        id: 2,
        nav: {
            name: 'bagues',
            img: [
                {
                    name: imgWBag,
                    link: '#imageBagFemme',
                    desc: 'bagues pour femmes',
                },
                {
                    name: imgMBag,
                    link: '#imageBagMan',
                    desc: 'bagues pour hommes',
                },
            ],
            option: [
                {
                    name: 'par type',
                    optionItem: [
                        { name: 'Alliance', link: '#' },
                        { name: 'Fiançailles', link: '#' },
                        { name: 'Solitaires', link: '#' },
                        { name: 'Fantaisie', link: '#' },
                    ],
                },
                {
                    name: 'par genre',
                    optionItem: [
                        { name: 'hommes', link: '#' },
                        { name: 'femmes', link: '#' },
                        { name: 'Enfants', link: '#' },
                    ],
                },
                {
                    name: 'par prix',
                    optionItem: [
                        { name: 'moins de 50$', link: '#' },
                        { name: 'entre 50$ et 300$', link: '#' },
                        { name: 'entre 300$ et 600$', link: '#' },
                        { name: 'plus de 600$', link: '#' },
                    ],
                },
                {
                    name: 'par matière',
                    optionItem: [
                        { name: 'or', link: '#' },
                        { name: 'argent', link: '#' },
                        { name: 'toutes', link: '#' },
                    ],
                },
                {
                    name: 'par pière',
                    optionItem: [
                        { name: 'diamant', link: '#' },
                        { name: 'emeraude', link: '#' },
                        { name: 'oxyde', link: '#' },
                        { name: 'perle', link: '#' },
                        { name: 'rubis', link: '#' },
                        { name: 'toutes les pière', link: '#' },
                    ],
                },
            ],
        },
        link: '#',
    },
    {
        id: 3,
        nav: {
            name: "boucles d'oreilles",
            img: [
                {
                    name: imgBOWoman,
                    link: '#boucleoreill',
                    desc: "boucles d'oreilles  femmes",
                },
                {
                    name: imgBOKids,
                    link: '#boucleoreillenfant',
                    desc: "boucles d'oreilles enfant",
                },
            ],
            option: [
                {
                    name: 'par type',
                    optionItem: [
                        { name: 'Créoles', link: '#' },
                        { name: 'Boutons / puces', link: '#' },
                        { name: 'Pendantes', link: '#' },
                        { name: 'Fantaisie', link: '#' },
                        { name: 'Dormeuses', link: '#' },
                    ],
                },
                {
                    name: 'par genre',
                    optionItem: [
                        { name: "boucles d'oreilles hommes", link: '#' },
                        { name: "boucles d'oreilles femmes", link: '#' },
                        { name: "boucles d'oreilles Enfants", link: '#' },
                    ],
                },
                {
                    name: 'par prix',
                    optionItem: [
                        { name: 'moins de 50$', link: '#' },
                        { name: 'entre 50$ et 300$', link: '#' },
                        { name: 'entre 300$ et 600$', link: '#' },
                        { name: 'plus de 600$', link: '#' },
                    ],
                },
                {
                    name: 'par matière',
                    optionItem: [
                        { name: 'or', link: '#' },
                        { name: 'argent', link: '#' },
                        { name: 'toutes', link: '#' },
                    ],
                },
                {
                    name: 'par pière',
                    optionItem: [
                        { name: 'diamant', link: '#' },
                        { name: 'emeraude', link: '#' },
                        { name: 'oxyde', link: '#' },
                        { name: 'perle', link: '#' },
                        { name: 'rubis', link: '#' },
                        { name: 'toutes les pière', link: '#' },
                    ],
                },
            ],
        },
        link: '#',
    },
    {
        id: 4,
        nav: {
            name: 'Bracelets',
            img: [
                {
                    name: imgBCWoman,
                    link: '#boucleoreill',
                    desc: 'Bracelets femmes',
                },
                {
                    name: imgBCMan,
                    link: '#boucleoreillenfant',
                    desc: 'Bracelets hommes',
                },
            ],
            option: [
                {
                    name: 'par type',
                    optionItem: [
                        { name: 'Manchette', link: '#' },
                        { name: 'Gourmette', link: '#' },
                        { name: 'Fantaisie', link: '#' },
                        { name: 'Chaine de cheville', link: '#' },
                    ],
                },
                {
                    name: 'par genre',
                    optionItem: [
                        { name: 'Bracelets hommes', link: '#' },
                        { name: 'Bracelets femmes', link: '#' },
                        { name: 'Bracelets Enfants', link: '#' },
                    ],
                },
                {
                    name: 'par prix',
                    optionItem: [
                        { name: 'moins de 50$', link: '#' },
                        { name: 'entre 50$ et 300$', link: '#' },
                        { name: 'entre 300$ et 600$', link: '#' },
                        { name: 'plus de 600$', link: '#' },
                    ],
                },
                {
                    name: 'par matière',
                    optionItem: [
                        { name: 'or', link: '#' },
                        { name: 'argent', link: '#' },
                        { name: 'toutes', link: '#' },
                    ],
                },
                {
                    name: 'par pière',
                    optionItem: [
                        { name: 'diamant', link: '#' },
                        { name: 'emeraude', link: '#' },
                        { name: 'oxyde', link: '#' },
                        { name: 'perle', link: '#' },
                        { name: 'rubis', link: '#' },
                        { name: 'toutes les pière', link: '#' },
                    ],
                },
                {
                    name: 'Gravure',
                    optionItem: [
                        { name: 'recto', link: '#' },
                        { name: 'recto verso', link: '#' },
                    ],
                },
            ],
        },
        link: '#',
    },
    {
        id: 5,
        nav: {
            name: 'coliers',
            img: [
                {
                    name: imgCWoman,
                    link: '#coliersfemmes',
                    desc: 'coliers femmes',
                },
                {
                    name: imgCKinds,
                    link: '#coliersfemmes',
                    desc: 'coliers hommes',
                },
            ],
            option: [
                {
                    name: 'par type',
                    optionItem: [
                        { name: 'Colliers', link: '#' },
                        { name: 'Chaînes', link: '#' },
                        { name: 'Pendentifs', link: '#' },
                        { name: 'Médailles', link: '#' },
                        { name: 'Fantaisie', link: '#' },
                    ],
                },
                {
                    name: 'par genre',
                    optionItem: [
                        { name: 'coliers hommes', link: '#' },
                        { name: 'coliers femmes', link: '#' },
                        { name: 'coliers Enfants', link: '#' },
                    ],
                },
                {
                    name: 'par prix',
                    optionItem: [
                        { name: 'moins de 50$', link: '#' },
                        { name: 'entre 50$ et 300$', link: '#' },
                        { name: 'entre 300$ et 600$', link: '#' },
                        { name: 'plus de 600$', link: '#' },
                    ],
                },
                {
                    name: 'par matière',
                    optionItem: [
                        { name: 'or', link: '#' },
                        { name: 'argent', link: '#' },
                        { name: 'toutes', link: '#' },
                    ],
                },
                {
                    name: 'par pière',
                    optionItem: [
                        { name: 'diamant', link: '#' },
                        { name: 'emeraude', link: '#' },
                        { name: 'oxyde', link: '#' },
                        { name: 'perle', link: '#' },
                        { name: 'rubis', link: '#' },
                        { name: 'toutes les pière', link: '#' },
                    ],
                },
                {
                    name: 'Gravure',
                    optionItem: [
                        { name: 'recto', link: '#' },
                        { name: 'recto verso', link: '#' },
                    ],
                },
            ],
        },
        link: '#',
    },
    {
        id: 6,
        nav: {
            name: 'montres',
            img: [
                {
                    name: imgMMan,
                    link: '#montrefemmes',
                    desc: 'montres hommes',
                },
                {
                    name: imgMWoman,
                    link: '#montrefemmes',
                    desc: 'montres femmes',
                },
            ],
            option: [
                {
                    name: 'par genre',
                    optionItem: [
                        { name: 'montres hommes', link: '#' },
                        { name: 'montres femmes', link: '#' },
                        { name: 'montres Enfants', link: '#' },
                    ],
                },
                {
                    name: 'par prix',
                    optionItem: [
                        { name: 'moins de 50$', link: '#' },
                        { name: 'entre 50$ et 300$', link: '#' },
                        { name: 'entre 300$ et 600$', link: '#' },
                        { name: 'plus de 600$', link: '#' },
                    ],
                },

                {
                    name: 'Par mécanisme',
                    optionItem: [
                        { name: 'Automatique', link: '#' },
                        { name: 'Connectée', link: '#' },
                        { name: 'Quartz', link: '#' },
                    ],
                },
                {
                    name: 'Par bracelet',
                    optionItem: [
                        { name: 'Cuir', link: '#' },
                        { name: 'Acier', link: '#' },
                        { name: 'Silicone', link: '#' },
                        { name: 'Tous les bracelets', link: '#' },
                    ],
                },
                {
                    name: 'Par marque',
                    optionItem: [
                        { name: 'BOSS', link: '#' },
                        { name: 'Casio', link: '#' },
                        { name: 'Cluse', link: '#' },
                        { name: 'Daniel Wellington', link: '#' },
                        { name: 'Diesel', link: '#' },
                    ],
                },
                {
                    name: 'Par marque',
                    optionItem: [
                        { name: 'Diesel', link: '#' },
                        { name: 'Festina', link: '#' },
                        { name: 'Fossil', link: '#' },
                        { name: 'Garmin', link: '#' },
                        { name: 'Guess', link: '#' },
                        { name: 'G-SHOCK', link: '#' },
                    ],
                },
            ],
        },
        link: '#',
    },
]

export default menu
