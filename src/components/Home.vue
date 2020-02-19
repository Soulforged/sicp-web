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

export default {
  name: 'home',
  components: {
    ExercisePreview
  },
  data () {
    return {
      exercises: [{
        id: '1',
        name: 'exercise12',
        description: `Exercise 1.2: Translate the following expression into prefix form: 
          (5 + 4 + (2 − (3 − (6 + 4/5)))) / 3(6 − 2)(2 − 7)`,
        title: 'Exercise 1.2'
      }, {
        id: '2',
        name: 'exercise13',
        description: `Exercise 1.3: Define a procedure that takes three numbers
          as arguments and returns the sum of the squares of the two
          larger numbers.`,
        title: 'Exercise 1.3'
      }]
    }
  }
}
</script>