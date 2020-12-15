export const state = () => ({
  slides: [],
  siblings: [],
})

export const mutations = {
  setSlides(state, slides) {
    state.slides = slides
  },
  setSiblings(state, siblings) {
    state.siblings = siblings
  },
}
