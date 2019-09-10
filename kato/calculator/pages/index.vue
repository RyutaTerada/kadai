<template>
  <div id="papa">
    <h3>電卓</h3>

    <form name="calc">
      <table border="2">
        <tr>
        <th colspan="3" align="right"><div id="output">0</div></th>
        <th><div id="type"></div></th>
        </tr>
        <tr>
        <td><input type="button" value="７" onClick="calc_run()"></td>
        <td><input type="button" value="８" onClick="calc_run()"></td>
        <td><input type="button" value="９" onClick="calc_run()"></td>
        <td><input type="button" value="÷" onClick="calc_run()"></td>
        </tr>
        <tr>
        <td><input type="button" value="４" onClick="calc_run()"></td>
        <td><input type="button" value="５" onClick="calc_run()"></td>
        <td><input type="button" value="６" onClick="calc_run()"></td>
        <td><input type="button" value="×" onClick="calc_run()"></td>
        </tr>
        <tr>
        <td><input type="button" value="１" onClick="calc_run()"></td>
        <td><input type="button" value="２" onClick="calc_run()"></td>
        <td><input type="button" value="３" onClick="calc_run()"></td>
        <td><input type="button" value="－" onClick="calc_run()"></td>
        </tr>
        <tr>
        <td><input type="button" value="０" onClick="calc_run()"></td>
        <td><input type="button" value="・" onClick="calc_run()"></td>
        <td><input type="button" value="＝" onClick="calc_run()"></td>
        <td><input type="button" value="＋" onClick="calc_run()"></td>
        </tr>
      </table>
    </form>

  </div>
</template>

<script>

</script>
