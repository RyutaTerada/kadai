<template>
    <div>
        <div>
            <!-- 計算結果を表示 -->
            <h1>{{ myResult }}</h1><hr>
        </div>
        <div>
            <!-- 各種ボタン -->
            <!-- v-btnタグでvuetifyのボタン呼び出し -->
            <!-- v-on:click.[native]いるかよくわからん -->
            <v-btn v-on:click="runC()">C</v-btn>
            <v-btn v-on:click="runCalc('/')">/</v-btn>
            <v-btn v-on:click.native="addValue(7)">7</v-btn>
            <v-btn v-on:click="addValue(8)">8</v-btn>
            <v-btn v-on:click="addValue(9)">9</v-btn>
            <v-btn v-on:click="runCalc('*')">*</v-btn>
            <v-btn v-on:click="addValue(4)">4</v-btn>
            <v-btn v-on:click="addValue(5)">5</v-btn>
            <v-btn v-on:click="addValue(6)">6</v-btn>
            <v-btn v-on:click="runCalc('-')">-</v-btn>
            <v-btn v-on:click="addValue(1)">1</v-btn>
            <v-btn v-on:click="addValue(2)">2</v-btn>
            <v-btn v-on:click="addValue(3)">3</v-btn>
            <v-btn v-on:click="runCalc('+')">+</v-btn>
            <v-btn v-on:click="addValue(0)">0</v-btn>
            <v-btn v-on:click="addValue('.')">.</v-btn>
            <v-btn v-on:click="runCalc('=')">=</v-btn>
        </div>
    </div>
</template>

<script>
export default{
    // FIXME:ReferenceError: myFlg is not defined
    // FIXME:意味わからん
    data(){  //変数宣言するところ
        return{
           myTotal : 0,  //現在の合計値
           myInput : '',  //現在入力している値
           myCalc : '+',  //合計と入力値の演算子
           myFlg : 1,  //1回前に入力したもの 0:数字 1:演算子
           myResult : 0,
        }
    },

    methods: {  //関数処理をするところ
        addValue: function(myData){  //数字or小数点の入力
            myFlg = 0;  //前回は数字の入力
            myInput += myData;  //入力している値に追加
            myResult = myInput;  //入力している値を表示
        },
        runCalc(myData){  //演算子を押した
            if (myFlg == 0) {  //前回の入力は数字か？
                myFlg = 1;  //前回の入力は演算子
                myWork = myTotal + myCalc + myInput;  //計算式の作成
                myTotal = eval(myWork);  //計算の実行
                myInput = ''; //入力した値のクリア
                myResult = myInput; //合計出力
            }
            if(myData == '='){ //＝を押したか？
                myTotal = 0;  //合計クリア
                myCalc = '+';  //演算子を+に 
            }else{
                myCalc = myData; //演算子の退避
            }
        },
        runC(){ //クリアボタンを押した
            myTotal = 0; //合計クリア
            myCalc = '+'; //演算子のクリア
            myInput = '';  //現在入力している値をクリア
            myResult = myTotal; //表示を0に
        }
    },
}
</script>

<style>
/* TODO:スタイルいじりは後回し */
</style>