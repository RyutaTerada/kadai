<template>
  <div>
    <div>
      <!-- 計算結果を表示 -->
      <h1>{{ output }}</h1>
      <hr />
    </div>
    <div>
      <!-- 各種ボタン -->
      <!-- v-btnタグでvuetifyのボタン呼び出し -->
      <!-- v-on:click.[native]いるかよくわからん -->
      <v-btn v-on:click="addValue('c')">C</v-btn>
      <v-btn v-on:click="addValue('/')">/</v-btn>
      <v-btn v-on:click="addValue(7)">7</v-btn>
      <v-btn v-on:click="addValue(8)">8</v-btn>
      <v-btn v-on:click="addValue(9)">9</v-btn>
      <v-btn v-on:click="addValue('*')">*</v-btn>
      <v-btn v-on:click="addValue(4)">4</v-btn>
      <v-btn v-on:click="addValue(5)">5</v-btn>
      <v-btn v-on:click="addValue(6)">6</v-btn>
      <v-btn v-on:click="addValue('-')">-</v-btn>
      <v-btn v-on:click="addValue(1)">1</v-btn>
      <v-btn v-on:click="addValue(2)">2</v-btn>
      <v-btn v-on:click="addValue(3)">3</v-btn>
      <v-btn v-on:click="addValue('+')">+</v-btn>
      <v-btn v-on:click="addValue(0)">0</v-btn>
      <v-btn v-on:click="addValue('.')">.</v-btn>
      <v-btn v-on:click="addValue('=')">=</v-btn>
    </div>
  </div>
</template>

<script>
// TODO: 細かい分岐の処理を追加すれば電卓として完成する
// TODO: CEボタンの追加
export default {
  data() {
    //変数宣言するところ
    return {
      output: "0" //出力部分の変数
    };
  },

  methods: {
    //関数処理をするところ
    addValue: function(cmd) {
      if (cmd === "=") {
        this.output = eval(this.output); //evalは計算をしてくれる
        // evalがVSCodeでエラー吐くけどふつうに動く
        // Snippets系の拡張が悪さしてる？特に問題は見当たらない
      } else if (cmd === "c") {
        this.output = "0"; //出力をクリア
      } else if (this.output === "0") {
        this.output = cmd; //出力が0なら入力した値で上書き
      } else {
        this.output += cmd; //出力の右に追加
      }
    }
  }
};
</script>

<style>
/* TODO:スタイルいじりは後回し */
/* めんどくさいからやらないかも */
</style>