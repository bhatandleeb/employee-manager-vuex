<template>
  <div class="update-employee">
    <div class="container">
      <the-title title="Update Employee Details"></the-title>
      <employee-form :isEdit="isEdit"></employee-form>
    </div>
  </div>
</template>

<script>
import TheTitle from "@/components/TheTitle.vue";
import EmployeeForm from "@/components/EmployeeForm.vue";
export default {
  components: {
    TheTitle,
    EmployeeForm,
  },
  data() {
    return {
      isEdit: true,
    };
  },
};
</script>