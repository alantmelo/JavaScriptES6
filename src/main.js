import axios from 'axios';
class App {
    constructor()
    {
        this.pokemons = [];
        this.btnEl = document.getElementById('newPokemon');
        this.inputEl = document.getElementById('name');
        this.registerHandlers();
    }

    registerHandlers() {
        this.btnEl.onclick = (event) => {
            this.addPokemon(event,this.inputEl.value)
        }
    }

    async addPokemon(e,name) {
        e.preventDefault();
        try{        
            const pokemon = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`); 
            this.pokemons.push(pokemon.data);
            console.log(this.pokemons);
        }catch(e){
            alert(e)
        }

        this.render()
    }

    render()
    {

    }
}

new App();