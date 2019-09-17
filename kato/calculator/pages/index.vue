<template>
  <div id="papa">
    <h3>電卓</h3>

    <form name="myForm">
      <table border="1" bgcolor="#BDB76B">
        <tr></tr>
        <tr>
          <td colspan="3" align="center">
            <input type="text" size="12" name="myLine" value="0" />
          </td>
          <td align="center">
            <input type="button" value="Ｃ" v-on:click="myC()" />
          </td>
        </tr>
        <tr>
          <td align="center">
            <v-btn outline round class="red color-text darken-1">
              <input type="button" value=" ７ " v-on:click="myValue(7)" />
            </v-btn>
          </td>
          <td align="center">
            <v-btn outline round class="green green-text darken-2">
              <input type="button" value=" ８ " v-on:click="myValue(8)" />
            </v-btn>
          </td>
          <td align="center">
            <v-btn outline round class="red color-text darken-1">
              <input type="button" value=" ９ " v-on:click="myValue(9)" />
            </v-btn>
          </td>
          <td align="center">
            <input type="button" value="÷" v-on:click="myCalculate('/')" />
          </td>
        </tr>
        <tr>
          <td align="center">
            <input type="button" value=" ４ " v-on:click="myValue(4)" />
          </td>
          <td align="center">
            <input type="button" value=" ５ " v-on:click="myValue(5)" />
          </td>
          <td align="center">
            <input type="button" value=" ６ " v-on:click="myValue(6)" />
          </td>
          <td align="center">
            <input type="button" value="×" v-on:click="myCalculate('*')" />
          </td>
        </tr>
        <tr>
          <td align="center">
            <input type="button" value=" １ " v-on:click="myValue(1)" />
          </td>
          <td align="center">
            <input type="button" value=" ２ " v-on:click="myValue(2)" />
          </td>
          <td align="center">
            <input type="button" value=" ３ " v-on:click="myValue(3)" />
          </td>
          <td align="center">
            <input type="button" value="－" v-on:click="myCalculate('-')" />
          </td>
        </tr>
        <tr>
          <td align="center">
            <input type="button" value=" ０ " v-on:click="myValue(0)" />
          </td>
          <td align="center">
            <input type="button" value=" ・ " v-on:click="myValue('.')" />
          </td>
          <td align="center">
            <input type="button" value=" ＋ " v-on:click="myCalculate('+')" />
          </td>
          <td align="center">
            <input type="button" value="＝" v-on:click="myCalculate('=')" />
          </td>
        </tr>
      </table>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      myTotal: 0, // 現在の合計値
      myInput: "", // 現在入力している値
      myCalc: "+", // 合計と入力値の演算子
      myFlg: 1 ,// １回前に入力したもの 0:数字 1:演算子
      myWork: ""
    };
  },
  methods: {
    myValue(myData) {
      // 0～9または小数点ボタンを押した
      this.myFlg = 0; // １回前に入力したものは数値
      this.myInput += myData; // 現在入力している値に追加
      document.myForm.myLine.value = this.myInput; // 現在入力している値表示
    },
    myCalculate(myData) {
      // 演算ボタンを押した
      if (this.myFlg == 0) {
        // １回前に入力したものは数値か？
        this.myFlg = 1; // １回前に入力したものは演算子
        this.myWork = this.myTotal + this.myCalc + this.myInput; // 一連の計算式を作る
        this.myTotal = eval(this.myWork); // 計算式を計算させる
        this.myInput = ""; // 現在入力している値をクリア
        document.myForm.myLine.value = this.myTotal; // 合計を表示
      }
      if (myData == "=") {
        // 演算ボタンは[＝]か？
        this.myCalc = "+"; // 演算子を[+]とする
      } else {
        // 演算ボタンは[＝]以外である
        this.myCalc = myData; // 演算子を退避させておく
      }
    },
    myC() {
      // クリアボタン[C]を押した
      this.myTotal = 0; // 合計クリア
      this.myCalc = "+"; // 演算子クリア
      this.myInput = ""; // 現在入力している値をクリア
      document.myForm.myLine.value = this.myTotal; // つまり、０を表示
    }
  }
};
</script>

<style>


h3 {
  color: red;
  margin: 60px 0 0 0;
  padding: 30px;
}

table {
  width: 300px;
  height: 500px;
  text-align: center;
  font-size: 50px;
}
</style>
