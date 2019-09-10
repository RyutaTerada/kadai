<template>
  <div id="papa">
    <div id="alert"></div>
    <div class="color">
        {{message}}
    </div>
  </div>
</template>

<script>
alert('ハローワールド');
export default {
  data: () => {
    return { message: 'HelloWorld' }
  }
}



</script>

<style>
.color{
    font-size: 100px;
    color: red;
    font-weight: bold;
    letter-spacing: 50px;
}
</style>