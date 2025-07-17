<template>
  <v-app>
    <v-main class="pa-4">
      <v-container>
        <v-toolbar color="primary" dark>
          <v-toolbar-title>Сервис бронирования</v-toolbar-title>
          <v-spacer />
          <v-btn to="/" text>Главная</v-btn>
          <v-btn to="/bookings" text>Бронирования</v-btn>
          <v-btn to="/resources" text>Ресурсы</v-btn>
        </v-toolbar>
        <NuxtPage />
      </v-container>
    </v-main>
  </v-app>
</template>

<script setup>
import { useVuetify } from 'vuetify'
</script>