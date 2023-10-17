
// windows.Event = new Vue();
windows.Event = new class{

    constructor(){
        this.vue = new vue();
    }
    fire(){
        this.vue.$emit(event,data);
    }
    listen(){
        this.vue.$on(event,callback);

    }
}

Vue.component('coupon',{
    template:`<input placeholder="Enter Your Coupon Here" @blur="onCouponApplied" >`,
    methods:{
        onCouponApplied(){
            // this.$emit('applied');
            Event.$emit('applied');
        }
    }
})

new Vue({
    el:'#root2',
    data:{
        couponApplied : false
    },
    methods:{
        onCouponApplied(){
            this.couponApplied = true; 
        }
    }
})


