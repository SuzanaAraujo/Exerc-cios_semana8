import { Component } from '@angular/core';

@Component({
  selector: 'card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent {
  personagem: any = {
    nome: 'Rachel Green em Friends',
    imagem:
      'https://lumiere-a.akamaihd.net/v1/images/jennifer_aniston_1_b65c7145.png?region=0,75,1920,1078    ims=704x264',
    nomeAtor: 'Jennifer Aniston',
    descricao:
      'Atriz norte-americana conhecida pelos seus aclamados papéis como Rachel Green em Friends, Jennifer Grogan em Marley & Eu e, mais recentemente, Alex Levy em The Morning Show. Ela nasceu em Los Angeles, na Califórnia, e se formou na Escola LaGuardia, um espaço especializado em artes performáticas.',
  };
}
