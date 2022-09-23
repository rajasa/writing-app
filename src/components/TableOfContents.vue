<template>
  <div class="q-pa-md">
    <h2>Outlines</h2>

    <!-- Empty Design -->
    <p v-if="!titles || titles.length == 0">Your outline will show up here</p>

    <!-- Outline list -->
    <q-list dense v-if="titles && titles.length > 0">
      <q-item v-for="(row, index) in titles" :key="index">
        <q-item-label v-if="row.content">
          {{ row.content[0].text }}
        </q-item-label>
      </q-item>
    </q-list>

    <!-- <div class="content">
      <h2>Content</h2>
      <pre><code>{{ content }}</code></pre>
    </div> -->
  </div>
</template>

<script setup>
import { useContentStore } from "stores/content";
import { storeToRefs } from "pinia";

const contentStore = useContentStore();
const { content, titles } = storeToRefs(contentStore);
</script>
