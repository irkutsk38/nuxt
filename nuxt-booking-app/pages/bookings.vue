<template>
  <div>
    <h2>Новое бронирование</h2>
    <v-select :items="store.resources" item-title="name" item-value="id" v-model="resourceId" label="Ресурс" />
    <v-text-field type="datetime-local" v-model="start" label="Начало" />
    <v-text-field type="datetime-local" v-model="end" label="Конец" />
    <v-btn color="primary" @click="book">Забронировать</v-btn>

    <v-divider class="my-4" />

    <h3>Список бронирований</h3>
    <v-list>
      <v-list-item v-for="b in store.bookings" :key="b.id">
        <v-list-item-title>
          {{ getResourceName(b.resourceId) }} — {{ format(b.start) }} до {{ format(b.end) }}
        </v-list-item-title>
        <v-btn icon @click="store.removeBooking(b.id)">
          <v-icon>mdi-delete</v-icon>
        </v-btn>
      </v-list-item>
    </v-list>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useResourceStore } from '@/stores/resources'
const store = useResourceStore()

const resourceId = ref(null)
const start = ref('')
const end = ref('')

function book() {
  try {
    store.addBooking({
      resourceId: Number(resourceId.value),
      start: start.value,
      end: end.value
    })
    start.value = end.value = ''
  } catch (e) {
    alert(e.message)
  }
}

function getResourceName(id) {
  const r = store.resources.find(r => r.id === id)
  return r?.name || 'неизвестно'
}

function format(s) {
  return s?.replace('T', ' ')
}
</script>