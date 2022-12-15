<script setup>
import { ref } from 'vue'

const currentLocale = ref('en')
const localeOptions = ref([
  {
    code: 'en',
    name: 'English',
  },
  {
    code: 'ja',
    name: 'Japanese',
  },
])
</script>
<template>
  <label for="locale">Locale: </label>
  <!-- <select v-model="$i18n.locale" id="locale">
    <option v-for="locale in $i18n.availableLocales" :value="locale">{{ locale }}</option>
  </select> -->
  <select v-model="$i18n.locale" id="locale">
    <option v-for="locale in localeOptions" :value="locale.code">{{ locale.name }}</option>
  </select>
</template>

<style scoped>
label,
select {
  width: 100%;
  margin: auto 0;
}
select {
  height: 25px;
  margin: auto 0;
}
</style>
