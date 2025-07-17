import { defineStore } from 'pinia'

export const useResourceStore = defineStore('resources', {
  state: () => ({
    resources: [],
    bookings: []
  }),
  actions: {
    addResource(name) {
      const id = Date.now()
      this.resources.push({ id, name })
    },
    removeResource(id) {
      this.resources = this.resources.filter(r => r.id !== id)
      this.bookings = this.bookings.filter(b => b.resourceId !== id)
    },
    addBooking(booking) {
      const conflict = this.bookings.find(b =>
        b.resourceId === booking.resourceId &&
        !(booking.end <= b.start || booking.start >= b.end)
      )
      if (conflict) throw new Error('Конфликт бронирования')
      this.bookings.push({ ...booking, id: Date.now() })
    },
    removeBooking(id) {
      this.bookings = this.bookings.filter(b => b.id !== id)
    }
  },
  persist: true
})