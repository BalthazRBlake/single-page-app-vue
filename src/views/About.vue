<template>
  <div class="about">
    <b-container>
      <b-row align-h="center">
        <b-col md="8">
          <b-card-group deck>
            <b-card
              title="FrontEnd GitHub Repo"
              footerBgVariant="dark"
              footer-border-variant="dark"
              body-bg-variant="dark"
              body-text-variant="light"
            >
              <b-card-text>
                This repository contains the Vue.js project.
              </b-card-text>

              <template v-slot:footer>
                <b-button
                  href="https://github.com/BalthazRBlake/single-page-app-vue"
                  target="_blank"
                  variant="outline-info"
                  ><BaseIcon name="github"></BaseIcon>
                </b-button>
              </template>
            </b-card>

            <b-card
              title="Back End App"
              footerBgVariant="dark"
              footer-border-variant="dark"
              body-bg-variant="dark"
              body-text-variant="light"
            >
              <b-card-text>
                Here you can get the API Swagger Documentation for the available
                endpoints.
              </b-card-text>

              <template v-slot:footer>
                <b-button
                  href="https://spa-java-api.herokuapp.com"
                  variant="outline-info"
                  ><BaseIcon name="code"></BaseIcon>
                </b-button>
              </template>
            </b-card>
          </b-card-group>
        </b-col>
        <div class="w-100"><br /><br /></div>
        <b-col md="4">
          <b-card-group deck>
            <b-card
              title="LinkedIn"
              footerBgVariant="dark"
              footer-border-variant="dark"
              body-bg-variant="dark"
              body-text-variant="light"
            >
              <b-card-text>
                Visit my LinkedIn profile.
              </b-card-text>

              <template v-slot:footer>
                <b-button
                  href="https://www.linkedin.com/in/fabian-humberto-hernandez-forero/"
                  target="_blank"
                  variant="outline-info"
                  ><BaseIcon name="linkedin"></BaseIcon>
                </b-button>
              </template>
            </b-card>
          </b-card-group>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import BaseIcon from "@/components/BaseIcon.vue";
export default {
  components: {
    BaseIcon
  }
};
</script>
