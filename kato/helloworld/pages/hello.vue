<template>
    <div class="color">
        {{message}}
    </div>
</template>

<script>
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