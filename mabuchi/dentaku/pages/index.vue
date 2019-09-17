<template>
  <table id="calcTable">
    <tr>
      <td colspan="3"><input type="text" v-model="output" value="0"></td>
      <td><button value="C" @click="calc('C')">C</button></td>
    </tr>
    <tr>
      <td><button @click="calc('7')">7</button></td>
      <td><button @click="calc('8')">8</button></td>
      <td><button @click="calc('9')">9</button></td>
      <td><button @click="calc('/')">/</button></td>
    </tr>
    <tr>
      <td><button @click="calc('4')">4</button></td>
      <td><button @click="calc('5')">5</button></td>
      <td><button @click="calc('6')">6</button></td>
      <td><button @click="calc('*')">*</button></td>
    </tr>
    <tr>
      <td><button @click="calc('1')">1</button></td>
      <td><button @click="calc('2')">2</button></td>
      <td><button @click="calc('3')">3</button></td>
      <td><button @click="calc('-')">-</button></td>
    </tr>
    <tr>
      <td><button @click="calc('0')">0</button></td>
      <td><button @click="calc('.')">.</button></td>
      <td><button @click="calc('+')">+</button></td>
      <td><button @click="calc('=')">=</button></td>
    </tr>
  </table>
</template>>

<script>
  export default{
    data(){
      return{
        output: 0,  /* 数字の合計 */
      }
    },

    methods:{
      calc: function (cmd) {
            if(cmd === '='){
                this.output = eval(this.output)
            }else if(cmd === 'C'){
                this.output = '0'
            }else if(this.output === '0') {
                this.output = cmd
            }else{
                this.output += cmd
            }
        },
    },
  }
</script>