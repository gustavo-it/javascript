const date = new Date();
console.log(date);

console.log(date.toString());

// Maneiras de enviar uma data para o objeto date
// O mês de janeiro começa em 0
// const date = new Date(ano, mês, dia, horas, minutos, segundos);
// const date new Date('ano-mes-dia hora:minuto:segundo');

// Funções importantes
console.log("Dia", date.getDate());;
console.log("Mês", date.getMonth());
console.log("Ano", date.getFullYear());
console.log("Hora", date.getHours());
console.log("Minutes", date.getMinutes());
console.log("seconds", date.getSeconds());
console.log("Milissegundos", date.getMilliseconds());
console.log("Dia da semana", date.getDay()); // dia da semana começa em 0 = domingo