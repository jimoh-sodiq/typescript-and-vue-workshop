<script setup lang="ts">
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'
import LocaleSelect from './LocaleSelect.vue'

const { t } = useI18n({ useScope: 'global' })

// props: ['tagline']
defineProps({
  tagline: {
    type: String,
    required: true,
  },
})

const navList = ref([
  {
    name: 'Home',
    path: '/',
    translation: 'theNavbar.Home',
  },
  {
    name: 'Restaurants',
    path: '/restaurants',
    translation: 'theNavbar.Restaurants',
  },
  {
    name: 'Dishes',
    path: '/dishes',
    translation: 'theNavbar.Dishes',
  },
])
</script>

<template>
  <nav class="navbar has-shadow">
    <div class="navbar-brand">
      <RouterLink to="/" class="navbar-item">
        <img src="@/assets/to-eat-logo.svg" alt="" width="100" />
      </RouterLink>
    </div>
    <div class="navbar-menu">
      <div class="navbar-start">
        <div class="navbar-item">
          <small>{{ tagline }}</small>
        </div>
      </div>
      <div class="navbar-end">
        <!-- <select v-model="currentLocale">
          <option default disabled>Select Language</option>
          <option v-for="locale in localeOptions" :value="locale.code">{{ locale.label }}</option>
        </select> -->
        <LocaleSelect />
        <div v-for="navItem in navList" class="navbar-item" :key="`nav-${navItem.name}`">
          <RouterLink :to="navItem.path">{{ $t(navItem.translation) }}</RouterLink>
        </div>
      </div>
    </div>
  </nav>
</template>

<style></style>
