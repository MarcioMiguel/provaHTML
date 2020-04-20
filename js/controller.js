class Controller{

    constructor(){
        this._locale = 'pt-BR';
        this._date  = document.querySelector("#datahora");
        this._hora = document.querySelector("#hora");
        this._dataAtual;
        this.initialize();
    }

    initialize(){

        this.setDisplayDataHora();

        setInterval(()=>{

            this.setDisplayDataHora();

        }, 1000);

    }

    setDisplayDataHora(){

        this.displayData = this.dataAtual.toLocaleDateString(this._locale, {
            day: "2-digit",
            month: "long",
            year: "numeric"
        });

        this.displayHora = this.dataAtual.toLocaleTimeString(this._locale, {
            hour: '2-digit', 
            minute:'2-digit',
            second:'2-digit'
        });
    }

    get displayData(){
        return this._date.innerHTML;
    }

    set displayData(value){
        this._date.innerHTML = value;
    }

    get displayHora(){
        return this._hora.innerHTML;
    }

    set displayHora(value){
        this._hora.innerHTML = value;
    }

    get dataAtual(){
        return new Date();
    }

    set dataAtual(value){
        this._dataAtual = value;
    }   
}