const data = [
  {
    id: 1,
    name: "Nabooru",
    imgUrl: "",
    clicked: 0,
    origin: "Gerudo",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis et vulputate augue. Phasellus iaculis molestie libero nec ullamcorper. Donec turpis ligula, placerat quis dui nec, tempor tincidunt lacus. Sed ac dui non ex lobortis lobortis ac id ligula."
  },
  {
    id: 2,
    name: "Impa",
    imgUrl: "",
    clicked: 10,
    origin: "Sheikah",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis et vulputate augue. Phasellus iaculis molestie libero nec ullamcorper. Donec turpis ligula, placerat quis dui nec, tempor tincidunt lacus. Sed ac dui non ex lobortis lobortis ac id ligula."
  },
  {
    id: 3,
    name: "Ruto",
    imgUrl: "",
    clicked: 15,
    origin: "Zora",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis et vulputate augue. Phasellus iaculis molestie libero nec ullamcorper. Donec turpis ligula, placerat quis dui nec, tempor tincidunt lacus. Sed ac dui non ex lobortis lobortis ac id ligula."
  },
  {
    id: 4,
    name: "Link",
    imgUrl: "",
    clicked: 40,
    origin: "Hylians",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis et vulputate augue. Phasellus iaculis molestie libero nec ullamcorper. Donec turpis ligula, placerat quis dui nec, tempor tincidunt lacus. Sed ac dui non ex lobortis lobortis ac id ligula."    
  },
  {
    id: 5,
    name: "Zelda",
    imgUrl: "",
    clicked: 10,
    origin: "Hylians",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis et vulputate augue. Phasellus iaculis molestie libero nec ullamcorper. Donec turpis ligula, placerat quis dui nec, tempor tincidunt lacus. Sed ac dui non ex lobortis lobortis ac id ligula."    
  },
  {
    id: 6,
    name: "Darunia",
    imgUrl: "",
    clicked: 50,
    origin: "Gorons",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis et vulputate augue. Phasellus iaculis molestie libero nec ullamcorper. Donec turpis ligula, placerat quis dui nec, tempor tincidunt lacus. Sed ac dui non ex lobortis lobortis ac id ligula."
  },
  {
    id: 7,
    name: "Ganondorf",
    imgUrl: "",
    clicked: 20,
    origin: "Gerudo",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis et vulputate augue. Phasellus iaculis molestie libero nec ullamcorper. Donec turpis ligula, placerat quis dui nec, tempor tincidunt lacus. Sed ac dui non ex lobortis lobortis ac id ligula."
  },
  {
    id: 8,
    name: "Sheik",
    imgUrl: "",
    clicked: 2,
    origin: "Hylians",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis et vulputate augue. Phasellus iaculis molestie libero nec ullamcorper. Donec turpis ligula, placerat quis dui nec, tempor tincidunt lacus. Sed ac dui non ex lobortis lobortis ac id ligula."
  },
  {
    id: 9,
    name: "Navi",
    imgUrl: "",
    clicked: 15,
    origin: "Fairy",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis et vulputate augue. Phasellus iaculis molestie libero nec ullamcorper. Donec turpis ligula, placerat quis dui nec, tempor tincidunt lacus. Sed ac dui non ex lobortis lobortis ac id ligula."
  },
]

const initialState = {
  isLoading: false,
  heroes: data,
  hero: {},
  heroesFound: [],
  searchword: "",
};

const getters = {
  getStateLoading: (state) => state.isLoading,
  getHeroes: (state) => state.heroes,
  getHero: (state) => state.hero,
  getheroesFound: (state) => state.heroesFound,
};

const actions = {

  deleteHero({ commit }, id) {
    commit('setStateLoading', true);
    commit('setDeleteHero', id);
    commit('setStateLoading', false);
  },

  addHero({ commit }, hero) {
    commit('setStateLoading', true);
    commit('setAddHero', hero);
    commit('setStateLoading', false);
  },

  selectHero({ commit }, id) {
    commit('setStateLoading', true);
    commit('setHero', id);
    commit('setStateLoading', false);
  },

  searchForheroes({ commit }, searchword) {
    commit('setStateLoading', true);
    commit("setHeroesFound", searchword);
    commit('setStateLoading', false);
  },

};

const mutations = {
  setStateLoading: (state, loading) =>
    (state.isLoading = loading),
  setHero: (state, id) => {
    let result = state.heroes.filter(hero => hero.id == id)
    state.hero = result[0];
  },
  setDeleteHero: (state, id) => {
    state.heroes = state.heroes.filter((hero) => hero.id !== id);
  },
  setAddHero: (state, hero) => (state.heroes.push([hero])),
  setHeroesFound: (state, searchword) => {
    if (!searchword || searchword.length < 2) {
      state.searchword = '';
      state.heroesFound = [];
    } else {
      state.searchword = searchword;
      searchword = searchword.trim().toLowerCase();
      state.heroesFound = state.heroes.filter(hero => {
        return (
          hero.name.toLowerCase().includes(searchword) ||
          hero.item_sku.toLowerCase().includes(searchword)
        );
      });
    };
  },
};

export const heroesStore = {
  namespaced: true,
  state: initialState,
  getters,
  actions,
  mutations,
};