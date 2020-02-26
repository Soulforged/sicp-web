<template>
  <div class="md-layout home">
    <div 
      v-for="exercise in exercises" 
      v-bind:key="exercise.id" 
      class="md-layout-item md-medium-size-33 md-small-size-50 md-xsmall-size-100"
    >
      <router-link to="/exercises/1" exact>
        <exercise-preview v-bind="exercise" />
      </router-link>
    </div>
  </div>
</template>

<script>
import ExercisePreview from './ExercisePreview.vue'
import gql from 'graphql-tag'

export default {
  name: 'home',
  apollo: {
    exercises: gql`{
      exercises {
        id
        name
        title
        description
      }
    }`
  },
  components: {
    ExercisePreview
  }
}
</script>

<style scoped lang="scss">
@import "~vue-material/dist/theme/engine";
.md-layout-item {
  margin-bottom: 1rem;
  .md-card {
    height: 12rem;
  }
}
</style>