<template>
  <div class="hello">
    <h1>The following is a showcase of exercises and solutions from the book
    Structure and interpretation of programming languages</h1>
    <div>
      <h3>Exercise {{exercise.id}}</h3>
      <h4>{{exercise.title}}</h4>
      <p>
        {{exercise.description}}
      </p>
      <h5>Solution</h5>
      <p>{{exercise.solution}}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props:{
    exercise: Object
  },
  data: () => ({
    exercise: {
      id: "1.2",
      title: "Translate expression",
      description: `Translate the following expression into prefix
        form: (5 + 4 + (2 − (3 − (6 + 4/5)))) / 3(6 − 2)(2 − 7)`,
      solution: "(/ (+ 5 4 (- 2 (- 3 (+ 6 (/ 4 5))))) (* 3 (- 6 2) (- 2 7)))"
    }
  })
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
