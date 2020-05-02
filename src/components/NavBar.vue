<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="dark" fixed="top">
      <b-navbar-brand :to="{ name: 'Home', params: { currentPage: 1 } }">
        <b-icon-code-slash class="d-inline-block align-top" font-scale="1.5">
        </b-icon-code-slash>
        Single Page Application Employees
      </b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item :to="{ name: 'About' }">About</b-nav-item>
        </b-navbar-nav>

        <b-navbar-nav class="ml-auto">
          <b-nav-form @submit="onSubmit">
            <b-form-input
              v-model="nameToSearch"
              size="sm"
              class="mr-sm-2"
              placeholder="Name begins with ..."
            ></b-form-input>
            <b-button
              type="submit"
              size="sm"
              class="my-2 my-sm-0"
              variant="outline-light"
              :disabled="hasValue"
            >
              <b-icon-search
                variant="info"
                :animation="isEnable"
              ></b-icon-search>
            </b-button>
          </b-nav-form>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      nameToSearch: ""
    };
  },
  computed: {
    hasValue() {
      return this.nameToSearch.length === 0 ? true : false;
    },
    isEnable() {
      return this.hasValue ? "" : "throb";
    }
  },
  methods: {
    onSubmit(evt) {
      evt.preventDefault();
      this.$router.push({
        name: "SearchByName",
        params: { nameToSearch: this.nameToSearch }
      });
      this.nameToSearch = "";
    }
  }
};
</script>
