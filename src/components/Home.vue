<template>
  <div class="md-layout home">
    <div 
      v-for="exercise in exercises" 
      v-bind:key="exercise.id" 
      class="md-layout-item"
    >
      <exercise-preview v-bind="exercise" class="md-elevation-2" />
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
        description
      }
    }`
  },
  components: {
    ExercisePreview
  }
}
</script>