<template>
  <nav class="navbar navbar-expand navbar-dark bg-success">
    <router-link :to="{ name: 'Employees' }" class="navbar-brand"
      >Employee Manager</router-link
    >
    <div class="navbar-nav ml-auto">
      <li class="nav-item">
        <router-link :to="{ name: 'Create' }" class="nav-link">Add</router-link>
      </li>
      <li class="nav-item">
        <router-link :to="{ name: 'Employees' }" class="nav-link"
          >View</router-link
        >
      </li>
    </div>
  </nav>
</template>

<style scoped>
.nav-item {
  padding: 3px;
}
.nav-link {
  color: #ffffff !important;
  border: 1px solid #ffffff;
  border-radius: 3px;
}

.nav-link:hover {
  color: #28a745 !important;
  background-color: #ffffff;
}

.nav-link.router-link-exact-active.router-link-active {
  color: #000000 !important;
  background-color: #ffffff;
}
</style>