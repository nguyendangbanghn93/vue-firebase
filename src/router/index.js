  import { createRouter, createWebHistory } from 'vue-router' //import của router
  // import 2 cái file view của mình vào
  import Home from '@/views/Home.vue' 
  import Edit from '@/views/Edit.vue'

  const routes = [
    {
      path: '/',      //Đường dẫn này sẽ chạy vào            
      name: 'Home',    
      component: Home // component này, component này tương ứng với view đowcj import ở trren
    },
    {
      path: '/edit/:id', //Khai báo lấy id từ đường dẫn :id
      name: 'Edit', // có thể chuyển link bằng cái tên này
      component: Edit
    }
  ]

  const router = createRouter({ //Tạo router bằng thư viện router khi tạo project mình đã thêm vào
    history: createWebHistory(),
    routes
  })

  export default router