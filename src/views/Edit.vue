    // ! Phần này tương ứng với html sẽ hiển thị ra ngoài web (View)
    <template>
  <div class="card card-body mt-4">
    <h3>Edit users</h3>
    <!-- //!Khi submit không chạy theo luồng mặt định mà chạy function update khai báo bên dưới-->
    <form @submit.prevent="update">
      <div class="form-group">
        <label>Name</label>
        <input v-model="form.name" class="form-control" required />
        <!-- //! v-model="form.name" : Lấy data để điền sẵn vào nếu có -->
      </div>

      <div class="form-group mt-3">
        <label>Email</label>
        <input
          v-model="form.email"
          class="form-control"
          type="email"
          required
        />
      </div>

      <button type="submit" class="btn btn-primary mt-3">Update</button>
    </form>
  </div>
</template>
    // ! script (Controller)
    <script>
import { reactive, computed, onMounted } from "vue";
//import function mặc định của vue
import { useRoute, useRouter } from "vue-router";
//import các function đã tạo trong file firebase.js
import { getUser, updateUser } from "@/firebase";

export default {
  setup() {
    const router = useRouter();
    const route = useRoute();
    //Lấy id từ params
    const userId = computed(() => route.params.id);
    //Trả về một bản sao phản ứng của đối tượng (Khi giá trị thay đổi thì view thay đổi theo)
    const form = reactive({ name: "", email: "" });
    // Sau khi render đi tải dữ liệu và cập nhật vào form
    onMounted(async () => {
      const user = await getUser(userId.value);
      form.name = user.name;
      form.email = user.email;
    });

    const update = async () => {
      //update user
      await updateUser(userId.value, { ...form });
      //vào url này =>home
      router.push("/");
      //đưa form về giá trị trống ban đầu
      form.name = "";
      form.email = "";
    };

    return { form, update };
  },
};
</script>
