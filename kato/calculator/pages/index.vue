<template>
  <div id="papa">
    <h3>電卓</h3>

    <form name="myForm">
<table border="1" bgcolor="#BDB76B">
<tr>
</tr>
<tr>
<td colspan="3" align="center"><input type="text" size="12" name="myLine" value="0"></td>
<td align="center"><input type="button" value="Ｃ" onclick="myC()"></td>
</tr>
<tr>
<td align="center"><input type="button" value=" ７ " onclick="myValue(7)"></td>
<td align="center"><input type="button" value=" ８ " onclick="myValue(8)"></td>
<td align="center"><input type="button" value=" ９ " onclick="myValue(9)"></td>
<td align="center"><input type="button" value="÷" onclick="myCalculate('/')"></td>
</tr>
<tr>
<td align="center"><input type="button" value=" ４ " onclick="myValue(4)"></td>
<td align="center"><input type="button" value=" ５ " onclick="myValue(5)"></td>
<td align="center"><input type="button" value=" ６ " onclick="myValue(6)"></td>
<td align="center"><input type="button" value="×" onclick="myCalculate('*')"></td>
</tr>
<tr>
<td align="center"><input type="button" value=" １ " onclick="myValue(1)"></td>
<td align="center"><input type="button" value=" ２ " onclick="myValue(2)"></td>
<td align="center"><input type="button" value=" ３ " onclick="myValue(3)"></td>
<td align="center"><input type="button" value="－" onclick="myCalculate('-')"></td>
</tr>
<tr>
<td align="center"><input type="button" value=" ０ " onclick="myValue(0)"></td>
<td align="center"><input type="button" value=" ・ " onclick="myValue('.')"></td>
<td align="center"><input type="button" value=" ＋ " onclick="myCalculate('+')"></td>
<td align="center"><input type="button" value="＝" onclick="myCalculate('=')"></td>
</tr>
</table>
</form>

  </div>
</template>

<script>
  export default{
    data() {
      return{
        myTotal : 0,	// 現在の合計値
        myInput : "",	// 現在入力している値
        myCalc : "+", // 合計と入力値の演算子
        myFlg : 1,	// １回前に入力したもの 0:数字 1:演算子
      };
    },
    methods :{
      function  : myValue(myData){	// 0～9または小数点ボタンを押した
        myFlg = 0;	// １回前に入力したものは数値
        myInput += myData;	// 現在入力している値に追加
        document.myForm.myLine.value = myInput;	// 現在入力している値表示
      };
    }
  };
</script>

<style>

h3{
  color: red;
  margin: 60px 0 0 0 ;
  padding: 30px;
}

table{
  width: 300px;
  height: 500px;
  text-align: center;
  font-size: 50px;
}
#output{
  text-align: center
}

</style>
