<template>
  <div>
    <b-button v-b-modal="`modal + ${employee.empId}`" size="sm" variant="link">
      View
    </b-button>

    <b-modal
      :id="`modal + ${employee.empId}`"
      centered
      header-bg-variant="dark"
      header-text-variant="light"
      footer-bg-variant="dark"
      footer-text-variant="light"
      button-size="sm"
      title="Employee Details"
      no-stacking
    >
      <b-card>
        <b-card-text>
          <span v-if="employee.empActive">
            <b-avatar badge="Yes" badge-variant="primary"></b-avatar>
          </span>
          <span v-else>
            <b-avatar badge="No" badge-variant="danger"></b-avatar>
          </span>
          <b>
            <span>&nbsp;{{ employee.empName }}&nbsp;</span>
          </b>
        </b-card-text>

        <b-card-text>
          <b>Department:&nbsp;</b>
          <b-badge variant="info"> {{ employee.emp_dpId.dpName }}</b-badge>
        </b-card-text>
      </b-card>

      <template v-slot:modal-footer="{ ok, cancel }">
        <b-button size="sm" variant="outline-light" @click="cancel()">
          Cancel
        </b-button>
        <b-button
          v-b-modal="`2nd-modal + ${employee.empId}`"
          size="sm"
          variant="outline-primary"
        >
          Edit
        </b-button>
      </template>
    </b-modal>

    <b-modal
      :id="`2nd-modal + ${employee.empId}`"
      centered
      header-bg-variant="dark"
      header-text-variant="light"
      footer-bg-variant="dark"
      footer-text-variant="light"
      button-size="sm"
      title="Edit Employee"
    >
      <p class="my-2">Second Modal</p>
    </b-modal>
  </div>
</template>

<script>
export default {
  props: {
    employee: {
      type: Object,
      required: true
    }
  }
};
</script>

<style></style>
