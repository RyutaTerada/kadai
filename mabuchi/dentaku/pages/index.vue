<template>
  <v-layout
    column
    justify-center
    align-center
  >
    <v-flex
      xs12
      sm8
      md6
    >
      <div class="text-center">
        <logo />
        <vuetify-logo />
      </div>
      <v-card>
        <v-card-title class="headline">
          <table>
            
            <tr>
              <td colspan="3"><button>AC</button></td>
              <td><button>÷</button></td>
            </tr>
            <tr>
              <td><button>7</button></td>
              <td><button>8</button></td>
              <td><button>9</button></td>
              <td><button>×</button></td>
            </tr>
            <tr>
              <td><button>4</button></td>
              <td><button>5</button></td>
              <td><button>6</button></td>
              <td><button>−</button></td>
            </tr>
            <tr>
              <td><button>1</button></td>
              <td><button>2</button></td>
              <td><button>3</button></td>
              <td><button>+</button></td>
            </tr>
            <tr>
              <td colspan="2"><button>0</button></td>
              <td><button>.</button></td>
              <td><button>=</button></td>
            </tr>

          </table>
        </v-card-title>
        <v-card-text>
          
        </v-card-text>
        <v-card-actions>
          <v-spacer />
          <v-btn
            color="primary"
            nuxt
            to="/inspire"
          >
            Continue
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
import Logo from '~/components/Logo.vue'
import VuetifyLogo from '~/components/VuetifyLogo.vue'

export default {
  components: {
    Logo,
    VuetifyLogo
  }
}
</script>
