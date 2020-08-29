export default {
  state: {
    title: "test",
    viewMode: 'landscape',
    viewBox: '0 0 700 240',
    viewBoxRocker: '0 0 700 100',
    rotation: 'translate(700, 0) rotate(90)',
    showDeck: 1,
    finSetup: 3
  },
  mutations: {
    setTitle(state, title) {
      state.title = title;
    },
    setId(state, id) {
      state.id = id;
    },
    setOutline(state, outline) {
      state.outline = outline;
    }
  }
};