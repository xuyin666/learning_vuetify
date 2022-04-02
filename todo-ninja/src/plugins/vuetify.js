import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

Vue.use(Vuetify);

export default new Vuetify({
    // we change the theme color here
    theme: {
        themes:{
            light:{
                success: '#3cd1c2',
                secondary: '#b0bec5',
                accent: '#ffaa2c',
                error: '#b71c1c',
            }
        }
    }
});
