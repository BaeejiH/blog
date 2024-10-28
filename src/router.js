import { createWebHistory, createRouter } from "vue-router"; // 경로가 아니라 라이브러리 이름을 적으면 해당 라이브러리를 가져옴.
import ListList from './components/ListList.vue'
import HomeHome from './components/HomeHome.vue'
import DetailsPage from './components/DetailsPage.vue'
import AuthorBlog from './components/AuthorBlog.vue'
import CommentBlog from './components/CommentBlog.vue'
const routes = [
  {
    path: "/list", // 페이지 나눌 때 이것만 건드리면 됨.
    component: ListList,
  },
  {
    path: "/Home", // 페이지를 쪼개고 싶으면 일단 컴포넌트부터 만들어야 함.
    component: HomeHome,
  },
  {
    path: "/rewgWGGGWGWG", // 404페이지  , 같은 route가 겹치면 위에 있는 것부터실행됨
    component: HomeHome,
  },
  {
    path: "/details/:id", // url parameter문법
    component: DetailsPage,
    children:[
      {
        path:"author", // router 안에 또 다른 router 만들 수 있음.
        component:AuthorBlog,
      },
      {
        path:"comment",
        component:CommentBlog,
      }
    ]
  },

];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router; 