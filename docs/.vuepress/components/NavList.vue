<template>
  <div class="nav-container">
    <div class="nav-item">
      <img class="logo" src="/logo.png">
      <div class="text"><a href="/happyboot-api/">HappyBoot API</a></div>
    </div>
    <div class="nav-item">
      <img class="logo" src="https://element.happykit.org/favicon.svg">
      <div class="text"><a href="/happyboot-element">HappyBoot ElementPlus</a></div>
    </div>
    <div class="nav-item">
      <img class="logo" src="/electron.jpg">
      <div class="text"><a href="/happy-ssh">HappySSH</a></div>
    </div>
  </div>
</template>

<script>
export default {
name: "NavList"
}
</script>

<style scoped>
.nav-container{
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-column-gap: 10px;
  grid-row-gap: 10px;
  margin-bottom: 50px;
}

.nav-item{
  padding: 20px;
  box-shadow: 0 0 17px 0px #0000001a;
  transition: all 0.3s ease-out;
  border-radius: 3px;
  text-align: center;
}

.nav-item:hover{
  box-shadow: 0 0 20px 3px #00000026;
}

.logo{
  height: 80px;
}

.text{
  font-size: 20px;
  text-align: center;
  font-weight: bold;
}
</style>
