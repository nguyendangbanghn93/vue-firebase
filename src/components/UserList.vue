        <template>
  <div class="card mt-4">
    <table class="table m-0">
      <thead>
        <tr>
          <th scope="col">Name</th>
          <th scope="col">Email</th>
          <th scope="col">Action</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="{ id, name, email } in users" :key="id">
          <td>{{ name }}</td>
          <td>{{ email }}</td>
          <td>
            <!-- Click edit sẽ chuyển sang view edit với id của đối tượng -->
            <router-link :to="`/edit/${id}`">
              <button class="btn btn-primary btn-sm me-2">Edit</button>
            </router-link>
            <!-- Click chạy function xóa đối tượng -->
            <button class="btn btn-danger btn-sm" @click="deleteUser(id)">
              Delete
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

        <script>
import { userLoaderUsers, deleteUser } from "@/firebase";
export default {
  setup(props) {
    //setup này sẽ nhận vào props và return các thứ sử dụng trên view
    const users = userLoaderUsers();
    return { users, deleteUser };
  },
};
</script>