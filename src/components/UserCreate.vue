  <template>
  <div class="card card-body mt-4">
    <form @submit.prevent="onSubmit">
      <div class="form-group">
        <label>Name</label>
        <input v-model="form.name" class="form-control" required />
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

      <button type="submit" class="btn btn-success mt-3">Create User</button>
    </form>
  </div>
</template>

  <script>
import { createUser } from "@/firebase";
import { reactive } from "vue";

export default {
  setup() {
    //Khi nhập đối tượng form cũng được cập nhật
    const form = reactive({ name: "", email: "" });
    //Khi submit, sau khi lưu lên db xong thì trả thành phần trong form về empty string
    const onSubmit = async () => {
      await createUser({ ...form });
      form.name = "";
      form.email = "";
    };

    return { form, onSubmit };
  },
};
</script>
