import api from './api';
class App {
    constructor()
    {
        this.pokemons = [];
        this.btnEl = document.getElementById('newPokemon');
        this.removeEl = document.getElementById('remove');
        this.btnAddEl = document.getElementById('add');
        this.inputEl = document.getElementById('name');
        this.elems = document.getElementById('modal1');
        this.modalTitle = document.getElementById('modal_title');
        this.modalBody = document.getElementById('modal_body');
        this.listEl = document.getElementById('pokemon-list');
        this.registerHandlers();
        this.registerRemoveAll();
    }

    registerHandlers() {
        this.btnEl.onclick = (event) => {
            this.searchPokemon(event,this.inputEl.value)
        } 
    }


    registerRemoveAll() {
        this.removeEl.onclick = (event) => {
            this.remove()
        } 
    }
    
    async searchPokemon(e,input) {
        e.preventDefault();
        try{        
            const response = await api.get(`${input}`);
            const { id, name, weight } = response.data;
            this.pokemons.push({
                id,
                name,
                weight
              });
            this.render();
            
        }catch(e)
        {
            M.toast({html: 'Error! Pokemon not found!', classes: 'rounded red darken-3'})
        }
    }

    render()
    {
        this.pokemons.forEach(pokemon => {
            let imgEl = document.createElement('img');
            imgEl.className= "circle";
            imgEl.setAttribute('src', `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/female/${pokemon.id}.png`);

            let titleEl = document.createElement('span');
            titleEl.className = "title";
            titleEl.appendChild(document.createTextNode(`${pokemon.name.toUpperCase()}`));
            
            let weightEl = document.createElement('p');
            weightEl.appendChild(document.createTextNode(`Weight: ${pokemon.weight}`));

            let liEl = document.createElement('li');
            liEl.className = "collection-item avatar";
            liEl.appendChild(imgEl);
            liEl.appendChild(titleEl);
            liEl.appendChild(weightEl);
            this.listEl.appendChild(liEl);
        });
        M.toast({html: `You've got a new Pokemon!`, classes: 'rounded green darken-3'})
    }

    remove()
    {
        let list = document.querySelector(".collection-item");
        list.remove();
        M.toast({html: `Pokemons have been deleted!`, classes: 'rounded red darken-3'})
    }
}

new App();