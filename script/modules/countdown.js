export default class Contagem {
  constructor(dataFuturo) {
    this.dataFuturo = dataFuturo;
  }
  get _dataAtual() {
    return new Date();
  }
  get _dataFuturo() {
    return new Date(this.dataFuturo);
  }
  get _timeStampDiff() {
    return this._dataFuturo.getTime() - this._dataAtual.getTime();
    //pega a diferença entre a data do Natal menos a data atual para saber quanto tempo falta
  }
  get days() {
    return Math.floor(this._timeStampDiff / (24 * 60 * 60 * 1000)); //converte em dias
  }
  get hours() {
    return Math.floor(this._timeStampDiff / (60 * 60 * 1000)); //converte em horas
  }
  get minutes() {
    return Math.floor(this._timeStampDiff / (60 * 1000)); //converte em minutos
  }
  get seconds() {
    return Math.floor(this._timeStampDiff / 1000); //converte em segundos
  }
  get total() {
    const days = this.days;
    const hours = this.hours % 24;
    const minutes = this.minutes % 60;
    const seconds = this.seconds % 60;
    return {
      days,
      hours,
      minutes,
      seconds
    }
  }
}