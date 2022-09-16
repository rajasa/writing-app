<template>
  <q-page class="flex justify-center q-pa-md bg-grey-2">
    <div class="editor-placeholder bg-white shadow-4 q-py-lg">
      <div class id="editor-body" />
    </div>
  </q-page>
</template>

<script>
import { defineComponent } from "vue";
import { useContentStore } from "stores/content";
import EditorJS from "@editorjs/editorjs";
import Header from "@editorjs/header";
import Paragraph from "@editorjs/paragraph";
import List from "@editorjs/list";

const content = useContentStore();

export default defineComponent({
  name: "IndexPage",

  data() {
    return {
      value: null,
      titles: [],
    };
  },

  mounted: function () {
    this.myEditor();
  },

  methods: {
    save: async function () {
      await editor.save().then((savedData) => {
        this.value = savedData;

        // Save to store
        content.save(this.value);
      });

      // this.count();
    },

    count() {
      // list all titles
      if (this.value) {
        const list = this.value.blocks;
        const data = list.filter((row) => row.type == "header");
        this.titles = data;
      }
    },

    myEditor: function () {
      let parent = this;

      window.editor = new EditorJS({
        holder: "editor-body",
        autofocus: true,
        placeholder: "Let`s write an awesome story!",

        // Default tools
        initialBlock: "paragraph",
        tools: {
          header: {
            class: Header,
            shortcut: "CMD+SHIFT+H",
          },
          list: {
            class: List,
          },
          paragraph: {
            class: Paragraph,
          },
        },

        onReady: function () {
          console.log("ready");
        },

        onChange: function () {
          console.log("change");
          parent.save();
        },
      });
    },
  },
});
</script>

<style lang="scss" scoped>
.editor-placeholder {
  width: 100%;
  max-width: 800px;
}
</style>
