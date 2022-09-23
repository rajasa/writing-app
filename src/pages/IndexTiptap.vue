<template>
  <q-page class="flex justify-center q-pa-md bg-grey-2">
    <editor class="bg-white shadow-1" v-model="content" />
  </q-page>
</template>

<script>
import Editor from "components/EditorTiptap.vue";
import { useContentStore } from "stores/content";

const content = useContentStore();

export default {
  components: {
    Editor,
  },

  data() {
    return {
      content:
        "<p>A Vue.js wrapper component for tiptap to use <code>v-model</code>.</p>",
    };
  },

  watch: {
    content(val) {
      content.save(val);
    },
  },
};
</script>
