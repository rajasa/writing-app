import { defineStore } from "pinia";

export const useContentStore = defineStore("content", {
  state: () => ({
    text: null,
  }),
  getters: {
    content: (state) => state.text,
    titles: function (state) {
      if (!state.text || !state.text.blocks) return null;
      return state.text.blocks.filter((row) => row.type == "header");
    },
  },
  actions: {
    save(text) {
      this.text = text;
    },
  },
});
