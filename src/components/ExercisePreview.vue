<template>
  <md-card md-with-hover class="exercise preview">
    <md-ripple>
      <md-card-header>{{title}}</md-card-header>
      <md-card-content>{{summary}}</md-card-content>
      <md-card-actions>
        <md-button>Solve it</md-button>
      </md-card-actions>
    </md-ripple>
  </md-card>
</template>

<script>
export default {
  name: 'exercise-preview',
  props: {
    id: String,
    title: String,
    description: String
  },
  computed: {
    summary: function () {
      if (this.description.length > 135) {
        return `${this.description.substring(0, 135)} (...)`
      }
      return this.description
    }
  }
}
</script>