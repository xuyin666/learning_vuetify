<template>
  <nav>
      <v-toolbar flat app>
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
  </nav>
</template>

<script>
export default {

}
</script>

<style>

</style>