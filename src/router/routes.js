import Home from '@/components/Home'
import ExerciseDetail from '@/components/ExerciseDetail'

export default [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/exercises/:id',
    name: 'ExerciseDetail',
    component: ExerciseDetail
  }
]