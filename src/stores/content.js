import { defineStore } from "pinia";

export const useContentStore = defineStore("content", {
  state: () => ({
    text: null,
  }),
  getters: {
    content: (state) => state.text,
    titles: function (state) {
      if (!state.text || !state.text.content) return null;
      return state.text.content.filter((row) => row.type == "heading");
    },
  },
  actions: {
    save(text) {
      this.text = text;
    },
  },
});
