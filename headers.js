// Vue.component('task-list',{
//     template:'<h2>Header</h2>'
// })

// new Vue({
//     el:'#header'
// })

Vue.component('tabs',{
    template:`
    <div>
        <div class='tabs is-large'>
            <ul>
                <li v-for='tab in tabs' :class="{'is-active' : tab.isActive}" >
                <a :href="tab.href"  @click="selectTab(tab)">{{tab.name}}</a></li>
            </ul>
        </div>
        <div id="tabs-details">
            <slot></slot>
        </div>
    </div>
    `,
    data() {
        return { tabs:[]}; 
    },
    // mounted() {
    //     console.log(this.$children);
    // },
    created() {
        this.tabs = this.$children;
    },
    methods: {
        selectTab(selected_tab) {
            this.tabs.forEach(tab =>{
                tab.isActive = (tab.name == selected_tab.name);
            });
        }
    },
    
})

Vue.component('tab',{
    template:`<div v-show="isActive"><slot></slot></div>`,
    props: {
        name: { requried:true },
        selected:{ default:false }
    },
    data(){
        return { isActive : false}
    },
    computed :{
        href(){
            return '#' + this.name.toLowerCase().replace(/ /g,'-'); 

        }
    },
    mounted(){
        this.isActive = this.selected;
    }

})

new Vue({
    el:'#root'
})