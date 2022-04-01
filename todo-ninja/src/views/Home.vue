<template>
  <div class="home">
    <h1>Homepage</h1>
    <p class="red white--text">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt eligendi quibusdam ex, at ducimus perferendis mollitia vel rem nesciunt unde deserunt non voluptatibus nostrum illum neque placeat consequuntur porro. Tempora.</p>
    <p class="pink red--text">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi sequi voluptatum vel ut iure, optio at iusto! Nobis ipsa, aperiam qui voluptas praesentium sapiente veritatis fuga omnis adipisci cumque itaque?</p>
    <p class="pink lighten-4 red--text text--darken-4">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi sequi voluptatum vel ut iure, optio at iusto! Nobis ipsa, aperiam qui voluptas praesentium sapiente veritatis fuga omnis adipisci cumque itaque?</p>
    <!-- make  -->
    <h1 class="display-4">Massive Display</h1>
    <h4 class="display-1">Smaller display</h4>
    <p class="headline">This is a headline</p>
    <p class="subheading font-weight-bold">This is a subheading</p>
    <p class="caption">This is a caption</p>
    
    <!-- create a button -->
    <v-btn>Click me</v-btn>
    <!-- pink background and white text -->
    <v-btn class="pink white--text">Click me</v-btn>
    <v-btn color="pink">Click me</v-btn>
    <v-btn dark color="pink">Click me</v-btn>
    <!-- no shadow -->
    <v-btn depressed color="pink">Click me</v-btn>
    <!-- it takes away the drap shadow and makes the background transparent，
    the prop color control the text color and the hover over color-->
    <v-btn text color="pink">Click me</v-btn>


    <v-btn depressed class="pink white--text">
      <v-icon left>mdi-email</v-icon>
      <span>EMAIL ME</span>
    </v-btn>

    <v-btn depressed small class="pink white--text">
      <v-icon left small>mdi-email</v-icon>
      <span>EMAIL ME</span>
    </v-btn>

    <v-btn depressed large class="pink white--text">
      <span>EMAIL ME</span>
      <v-icon right large>mdi-email</v-icon>
    </v-btn>

    <v-btn depressed small dark color="purple">
      <v-icon>mdi-heart</v-icon>
    </v-btn>

    <!-- a circle button -->
    <v-btn fab depressed small dark color="purple">
      <v-icon>mdi-heart</v-icon>
    </v-btn>

    <!-- visibility hidden on medium sized screen and anything less-->
    <v-btn class="hidden-md-and-down">click me</v-btn>
    <v-btn class="hidden-md-and-up">click me</v-btn>
    <v-btn class="hidden-sm-only">click me</v-btn>
    
  </div>
</template>

<script>


export default {

}
</script>
