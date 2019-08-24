<template>
    <div id="main">
      <Header title="我的"/>
      <login />
      <tabBar />
    </div>
</template>

<script>
import Header from '@/components/header'
import tabBar from '@/components/tabBar'
import login from '@/components/login'
export default {
    name:"movie",
    components:{
        tabBar,
        Header,
        login
        
    }
}
</script>

<style>

</style>
