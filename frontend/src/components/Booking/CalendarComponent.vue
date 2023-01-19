<template>
  <div class="wrapper">
    <div class="mt-4" id="visualization"></div>
  </div>
</template>

<script>
import { Timeline } from 'vis-timeline/standalone'

export default {
    data() {
        return {
            store: this.$store,
            options: {
                orientation: 'top',
                timeAxis: {scale: 'day', step: 1},
                zoomMax: 500000000,
                start: '2023-01-02'
            }
        }
    },
    methods: {
    },
    mounted() {
        let timeline = new Timeline(document.getElementById('visualization'))
        timeline.setOptions(this.options)
        timeline.setGroups(this.$store.state.groups)
        timeline.setItems(this.$store.state.bookings)
        timeline.on('select', (properties) => {
            this.$router.push({name: 'singleBooking', params: {id: properties.items[0]}})
        })
    }

}
</script>

<style scoped>

</style>