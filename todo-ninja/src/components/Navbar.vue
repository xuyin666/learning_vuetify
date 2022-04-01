<template>
  <nav>
      <v-toolbar flat app>
          <v-app-bar-nav-icon class="grey--text" @click="drawer = !drawer"></v-app-bar-nav-icon>
          <v-toolbar-title class="text-uppercase grey--text">
              <span class="font-weight-light">Todo</span>
              <span>Ninja</span>
          </v-toolbar-title>
          <!-- it will grow into all of the available room inside the navbar-->
          <v-spacer></v-spacer>
          <!-- when we use the props, the color controls the foreground text color 
          and the hover color -->
          <v-btn text color="grey">
              <span>Sign Out</span>
              <v-icon right>mdi-exit-to-app</v-icon>
          </v-btn>
      </v-toolbar>
      <v-navigation-drawer app temporary v-model="drawer" class="indigo" >
          <p>test</p>
      </v-navigation-drawer>
  </nav>
</template>

<script>
export default {
    data() {
        return {
            drawer: false
        }
    }
}
</script>

<style>

</style>