import { Component } from '@angular/core';

@Component({
  selector: 'app-sobre',
  templateUrl: './sobre.component.html',
  styleUrls: ['./sobre.component.scss'],
})
export class SobreComponent {
  img = 'src/app/sobre/Felipe.jpg.png'; // Novo caminho da imagem
  turma = 'ADS';
  turno = 'Manhã';
  unidade = 'Unidade Bosucesso';
  alunoNome = 'Felipe José Araújo da Silva';
}



