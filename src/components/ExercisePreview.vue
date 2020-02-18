<template>
  <div class="exercise preview">
    <h4>{{title}}</h4>
    <p>{{description}}</p>
  </div>
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