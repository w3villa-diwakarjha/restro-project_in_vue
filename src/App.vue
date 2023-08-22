<template>
  <div class="component-center">
    <router-view/>
  </div>
  
  
</template>

<script>
export default{
  name: 'App',
}
</script>
<style>
body{
  margin: 0px;
  padding: 0px;
}
  #app{
    font-family: Arial, Helvetica, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }
  .component-center{
    text-align: center;
  }


  .register input, .login input, .add-resturant input, .update-resturant input{
    width: 300px;
    height: 40px;
    padding-left: 20px;
    display: block;
    margin-bottom: 30px;
    margin-left: auto;
    margin-right: auto;
    border: 1px solid skyblue;
}

.register button, .login button, .add-resturant button, .update-resturant button{
    width: 320px;
    height: 40px;
    border: 1px solid skyblue;
    color: #fff;
    background-color: skyblue;
    cursor: pointer;
}
</style>