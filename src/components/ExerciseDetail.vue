<template>
  <md-card class="exercise detail">
    <md-card-header>{{exercise.title}}</md-card-header>
    <md-card-content>{{exercise.description}}</md-card-content>
    <md-card-actions>
      <md-button>Solve it</md-button>
    </md-card-actions>
  </md-card>
</template>

<script>
import gql from 'graphql-tag'

export default {
  name: 'exercise-detail',
  apollo: {
    exercise: {
      query: gql`
      query ($id: ID!){
        exercise(id: $id) {
          id
          name
          title
          description
        }
      }`,
      variables: {
        id: "1"
      }
    }
  },
}
</script>