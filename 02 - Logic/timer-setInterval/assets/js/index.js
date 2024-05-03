function relogio() {
    function criaHoraDosSegundos(segundos) { // Recebe os segundos, multiplica por mil e retorna.
      const data = new Date(segundos * 1000);
      return data.toLocaleTimeString('pt-BR', {
        hour12: false,
        timeZone: 'UTC'
      });
    }
    const relogio = document.querySelector('.watch');
    let segundos = 0;
    let timer;
  
    function iniciaRelogio() {
    // Inicia o contador, incrementando a cada chamada da função (que acontece a cada 1 segundo)
      timer = setInterval(function() {
        segundos++;
        relogio.innerHTML = criaHoraDosSegundos(segundos);
      }, 1000);
    }
  
    document.addEventListener('click', function(e) {
      const el = e.target; // Pega todo elemento que está sendo clicado
      console.log(e.target)
  
      if (el.classList.contains('reset')) { // Zera o relógio
        clearInterval(timer);
        relogio.innerHTML = '00:00:00';
        relogio.classList.remove('pausado');
        segundos = 0;
      }
  
      if (el.classList.contains('start')) { // Inicia o relógio
        relogio.classList.remove('pausado');
        clearInterval(timer);
        iniciaRelogio();
      }
  
      if (el.classList.contains('stop')) { // Para o relógio
        clearInterval(timer);
        relogio.classList.add('pausado');
      }
    });
  }
relogio();