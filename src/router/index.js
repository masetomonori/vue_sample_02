
import Vue from 'vue'
import Router from 'vue-router';
import TaskListComponent from '../components/TaskListComponent'
import TaskShowComponent from '../components/TaskShowComponent'
import TaskCreateComponent from '../components/TaskCreateComponent'
import TaskEditComponent from '../components/TaskEditComponent'

const routes = [
  {
    path: '/',
    name: 'task.list',
    component: TaskListComponent
  },
  
  {
    path: '/:taskId',
    name: 'task.show',
    component: TaskShowComponent,
    props: true
  },

  {
    path: '/create',
    name: 'task.create',
    component: TaskCreateComponent,
    props: true
  },

  {
    path: '/:taskId/edit',
    name: 'task.edit',
    component: TaskEditComponent,
    props: true
  },

]

Vue.use(Router);

const router = new Router({
  routes,
  mode: 'history'
});

export default router
