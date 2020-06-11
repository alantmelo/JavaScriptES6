import axios from 'axios';
class App {
    constructor()
    {
        this.pokemons = [];
        this.btnEl = document.getElementById('newPokemon');
        this.btnAddEl = document.getElementById('add');
        this.inputEl = document.getElementById('name');
        this.elems = document.getElementById('modal1');
        this.modalTitle = document.getElementById('modal_title');
        this.modalBody = document.getElementById('modal_body');
        this.registerHandlers();
        this.registerAdd();
    }

    registerHandlers() {
        this.btnEl.onclick = (event) => {
            this.searchPokemon(event,this.inputEl.value)
        } 
    }
    registerAdd() {
        this.btnAddEl.onclick = () => {
            this.addPokemon()
        } 
    }
    
    async searchPokemon(e,name) {
        e.preventDefault();
        try{        
            const pokemon = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`);
            this.modalTitle.innerHTML = pokemon.data.name.toUpperCase();
            this.modalBody.innerHTML =  pokemon.data.types[0].type.name.toUpperCase();
            var instances = M.Modal.init(this.elems);
            console.log(pokemon.data.types[0].type.name)
            instances.open();
            
        }catch(e) {
            M.toast({html: 'Error! Pokemon not found!', classes: 'rounded red darken-3'})
            console.log(e)
        }
    }

    addPokemon()
    {
        M.toast({html: `You've got a new Pokemon!`, classes: 'rounded green darken-3'})
    }
}

new App();