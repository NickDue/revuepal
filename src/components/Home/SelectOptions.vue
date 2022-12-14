<template>
    <div>
    <router-link :to="{
        path: link,
        beforeEnter(){
            location.href=value
        }    
    }"><img :src="require(`@/assets/img/${filename}`)" class="im"></router-link>
    
    <p>{{ imgText }}</p>
    </div>
   
</template>
<script>

export default {
        props: {
            filename: {
                type: String,
                default: ""
            },

            imgText: {
                type: String,
                default: ""
            },

            link: {
                type: String,
                default: ""
            },

            value: {
                type: String,
                default: ""
            }
        }
    }

</script>

<style>

   
    .im {
        display: inline-block;
        border-radius: 50%;
        border: 15px solid #6ddbb8;
        padding: 30px;
        height: 150px;
        width: 150px;
        box-shadow: 0 2px 2px 0 rgba(100,100,100.2);
        cursor: pointer;
    }

    

    

</style>