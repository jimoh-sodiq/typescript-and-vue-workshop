<script setup lang="ts">
import { computed, ref } from 'vue'
import { useI18n } from 'vue-i18n'
import type { Dish } from '@/types'

type Props = {
  dish: Dish
}

const money = ref(1000)

const { t, n } = useI18n({
  locale: 'en',
  fallbackLocale: 'en',
  messages: {
    en: {
      delete: 'delete',
      try: 'Want to Try',
      notReccommended: 'Do Not Recommend',
      recommended: 'Recommended',
      money: 'Money'
    },
    ja: {
      delete: '消去',
      try: '試してみたい',
      notReccommended: 'お勧めしません',
      recommended: 'おすすめされた',
    },
  },
  numberFormats: {
    en: {
      currency: {
        style: 'currency',
        currency: 'USD',
      },
    },
    ja: {
      currency: {
        style: 'currency',
        currency: 'JPY',
      },
    },
  },
})
const props = defineProps<Props>()
const emit = defineEmits<{
  (e: 'delete-dish', dish: Dish): void
}>()

const statusColor = computed(() => {
  switch (props.dish.status) {
    case 'Want to Try':
      return 'is-warning'
    case 'Recommended':
      return 'is-success'
    case 'Do Not Recommend':
      return 'is-danger'
    default:
      return ''
  }
})
const deleteDish = () => {
  emit('delete-dish', props.dish)
}
</script>

<template>
  <article class="box">
    <div class="media">
      <aside class="media-left">
        <img src="https://placehold.jp/150x150.png" alt="" />
      </aside>
      <div class="media-content">
        <p class="title is-4 is-spaced mb-1">
          {{ dish.name }}
        </p>
        <p>{{ t('money') }}: {{ n(money, 'currency') }}</p>
        <p class="subtitle mb-2">
          <span class="tag" :class="statusColor" v-if="dish.status === 'Want to Try'">{{ t('try') }}</span>
          <span class="tag" :class="statusColor" v-if="dish.status === 'Recommended'">{{ t('recommended') }}</span>
          <span class="tag" :class="statusColor" v-if="dish.status === 'Do Not Recommend'">{{
            t('notReccommended')
          }}</span>
        </p>
        <div>
          <button @click="deleteDish" class="button is-small is-danger is-light">{{ t('delete') }}</button>
        </div>
      </div>
    </div>
  </article>
</template>

<style></style>
