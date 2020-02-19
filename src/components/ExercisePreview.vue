<template>
  <md-card class="exercise preview">
    <md-card-header>{{title}}</md-card-header>
    <md-card-content>{{description}}</md-card-content>
    <md-card-actions>
      <md-button>Try it</md-button>
      <md-button>Solve it</md-button>
    </md-card-actions>
  </md-card>
</template>

<script>
export default {
  name: 'exercise-preview',
  props: {
    title: String,
    description: String
  }
}
</script>