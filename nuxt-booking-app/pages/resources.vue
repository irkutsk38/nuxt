<template>
  <div>
    <h2>Управление ресурсами</h2>
    <v-text-field v-model="name" label="Название ресурса" />
    <v-btn @click="add" color="primary">Добавить</v-btn>

    <v-list>
      <v-list-item v-for="res in store.resources" :key="res.id">
        <v-list-item-title>{{ res.name }}</v-list-item-title>
        <v-btn icon @click="store.removeResource(res.id)">
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
const name = ref('')
function add() {
  if (name.value.trim()) {
    store.addResource(name.value)
    name.value = ''
  }
}
</script>