import { createWebHistory, createRouter } from "vue-router"; // 경로가 아니라 라이브러리 이름을 적으면 해당 라이브러리를 가져옴.
import ListList from "./components/ListList.vue"
import HomeHome from "./components/HomeHome.vue"
import DetailsPage from "./components/DetailsPage.vue"
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
    path: "/details", // 
    component: DetailsPage,
  },

];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router; 