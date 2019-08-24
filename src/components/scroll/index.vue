<template>
    <div class="wrapper" ref="wrapper">
        <slot></slot>
    </div>
</template>
<script>
import Bscroll from "better-scroll";
export default {    
    name:"Scroller",
    props:{
         handleToScroll:{
             type:Function,
             default:function(){}
         },
         handleToTounchEnd:{
             type:Function,
             default:function(){}
         }
    },
    mounted(){
        var scroll = new Bscroll(this.$refs.wrapper, {
                tap: true,
                probeType: 1
        });
        scroll.on("scroll", pos => {
             this.handleToScroll(pos)
        });
        this.scroll=scroll;
        scroll.on("touchEnd", pos => {
              this.handleToTounchEnd(pos)
        })
    },
    methods:{
        ToSrcollTop(y){
            this.scroll.scrollTo(0,y)
        }
    }
}
</script>
<style scoped>
.wrapper{
 height: 100%;
}
</style>