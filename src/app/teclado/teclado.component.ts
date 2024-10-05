import { Component } from '@angular/core';

@Component({
  selector: 'app-teclado',
  templateUrl: './teclado.component.html',
  styleUrls: ['./teclado.component.css'] // Corrigi de styleUrl para styleUrls
})
export class TecladoComponent {
  public resultado: string = "";

  clicar(valor: string) {
    if (valor === 'CE') {
      this.limpar();
    } else if (valor === '=') {
      this.finalizar();
    } else {
      this.resultado += valor; // Adiciona o valor à expressão
    }
  }

  limpar() {
    this.resultado = ""; // Limpa a expressão
  }

  finalizar() {
    try {
      // Avalia a expressão usando eval (use com cautela em produção)
      this.resultado = eval(this.resultado).toString();
    } catch (error) {
      this.resultado = 'Erro'; // Se houver erro na avaliação, exibe 'Erro'
    }
  }
}
