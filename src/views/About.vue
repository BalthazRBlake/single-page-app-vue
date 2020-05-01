<template>
  <div class="about">
    <b-container>
      <b-row align-h="center">
        <b-col md="8">
          <b-card-group deck>
            <b-card
              title="FrontEnd GitHub Repo"
              footerBgVariant="dark"
              body-bg-variant="dark"
              body-text-variant="light"
            >
              <b-card-text>
                This repository contains the Vue.js project.
              </b-card-text>
              <b-button
                href="https://github.com/BalthazRBlake/single-page-app-vue"
                target="_blank"
                variant="outline-info"
                >Visit
              </b-button>
            </b-card>

            <b-card
              title="Back End App"
              footerBgVariant="dark"
              body-bg-variant="dark"
              body-text-variant="light"
            >
              <b-card-text>
                Here you can get the API Swagger Documentation for the available
                endpoints.
              </b-card-text>
              <b-button
                href="https://spa-java-api.herokuapp.com"
                variant="outline-info"
                >Visit
              </b-button>
            </b-card>
          </b-card-group>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>
