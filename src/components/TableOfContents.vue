<template>
  <div class="q-pa-md">
    <h2>Outline</h2>

    <!-- Empty Design -->
    <p v-if="!titles || titles.length == 0">Your outline will show up here</p>

    <!-- Outline list -->
    <q-list dense v-if="titles && titles.length > 0">
      <q-item v-for="(row, index) in titles" :key="index">
        <q-item-label>{{ row.data.text }}</q-item-label>
      </q-item>
    </q-list>
  </div>
</template>

<script setup>
import { useContentStore } from "stores/content";
import { storeToRefs } from "pinia";

const contentStore = useContentStore();
const { titles } = storeToRefs(contentStore);
</script>
