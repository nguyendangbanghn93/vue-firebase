<template>
<!-- Sử dụng 2 components UserCreate và UserList import bên dưới -->
  <UserCreate />
  <UserList />
</template>

<script>
import UserCreate from '@/components/UserCreate.vue'
import UserList from '@/components/UserList.vue'

export default {
  name: 'Home',
  components: { UserCreate, UserList }
}
</script>
