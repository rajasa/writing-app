<template>
  <!-- <q-item
    clickable
    tag="a"
    target="_blank"
    :href="link"
  >
    <q-item-section
      v-if="icon"
      avatar
    >
      <q-icon :name="icon" />
    </q-item-section>

    <q-item-section>
      <q-item-label>{{ title }}</q-item-label>
      <q-item-label caption>{{ caption }}</q-item-label>
    </q-item-section>
  </q-item> -->
  <pre>{{ content }}</pre>
</template>

<script setup>
import { useContentStore } from "stores/content";
import { storeToRefs } from "pinia";

const contentStore = useContentStore();
const { content } = storeToRefs(contentStore);
</script>
