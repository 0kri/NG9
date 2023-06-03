import { Injectable } from '@angular/core';
import { MembersInterface } from '../interfaces/members-interface';

@Injectable({
  providedIn: 'root'
})
export class MembersService {

  public members: MembersInterface[] = [
    {
      id: 1,
      name: 'Saba',
      surname: 'Okriashvili',
      img: 'https://64.media.tumblr.com/384cd23a78a2086b60f94d2ad61e4e13/tumblr_inline_oqxx2t9FBJ1ukhmto_500.jpg'
    },
    {
      id: 2,
      name: 'Shako',
      surname: 'Metonidze',
      img:'https://upload.wikimedia.org/wikipedia/en/e/e8/SawyerABC.jpg'
    },
    {
      id: 3,
      name: 'Mariami',
      surname: 'Amonashvili',
      img:'https://upload.wikimedia.org/wikipedia/en/1/19/Kate_Austen_%28Lost%29.jpg'
    },
    {
      id: 4,
      name: 'Daviti',
      surname: 'Beridze',
      img:'https://alchetron.com/cdn/charlie-pace-4682b6b8-6513-4fa0-8095-9a56524ff26-resize-750.jpeg'
    },
    {
      id: 5,
      name: 'Goga',
      surname: 'Danelia',
      img:'https://upload.wikimedia.org/wikipedia/en/d/d5/Boonelost.PNG'
    },
    {
      id: 6,
      name: 'Ioane',
      surname: 'Aslamazashvili',
      img:'https://www.microoci.com/wp-content/uploads/2014/03/john-locke.jpg'
    },
    {
      id: 7,
      name: 'Val',
      surname: 'Do',
      img:'https://losttheseries.files.wordpress.com/2015/03/frank.jpg'
    },
  ]

  constructor() { }
}
