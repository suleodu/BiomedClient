<template>
    <div>
        <h2>Product Category</h2>
        <div class="catSub">
            <ul id="myUL">
                <li>
                    <ul class="nesteds">
                        <li v-for="(c, i) in categories" :key="i" class="wtu"><span class="caret" id="caret"
                                @click="toggle(i)">{{ c.category_name
                                }}</span>
                            <ul class="nested" :id="'nested' + i">
                                <li class="wtu" style="padding-left:25px" v-for="(sc, id) in c.sub_category" :key="id">
                                    <span class="caret" @click="toggle(i + '' + id)">{{ sc.sub_category_name }}</span>
                                    <ul class="nested" :id="'nested' + i + id">
                                        <li class="wtu" style="padding-left:25px;font-size: 20px;
    color: #466eb4;" v-for="(ic, i) in sc.nested_sub_category" :key="i">{{ ic.name }}</li>
                                    </ul>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </li>
            </ul>

        </div>
    </div>
</template>
<style>
h2 {
    color: #111111;
    font-weight: 700;
    line-height: 46px;
    margin-bottom: 10px;
    font-family: 'Rubik';
    font-size: 23px;
}

li {
    font-family: 'Rubik' !important;
}

ul,
#myUL {
    list-style-type: none;
}

#myUL {
    margin: 0;
    padding: 0;
}

.caret {
    cursor: pointer;
    -webkit-user-select: none;
    /* Safari 3.1+ */
    -moz-user-select: none;
    /* Firefox 2+ */
    -ms-user-select: none;
    /* IE 10+ */
    user-select: none;
    font-family: 'Rubik';
    font-size: 20px;
    color: #466eb4;
}

.caret::after {
    content: "\25B6";
    color: black;
    display: inline-block;
    margin-right: 6px;

}

.caret-down::after {
    transform: rotate(90deg);
}

.nested {
    display: none;
}

.active {
    display: block;
}

.wtu {
    /* margin-bottom: 8px !important; */
    padding: 5px;
}

.wtu:hover {
    /* background-color: #f5f5f5 !important; */
    color: black;
    transition: 1s;
}
</style>
<script>
export default {
    data() {
        return {
            filter: {
                filters: ""
            },
            categories: {}
        }
    },
    methods: {
        getCategories() {
            let payload = {
                filters: ""
            }
            this.$api.post(this.dynamic_route('/category/all'), payload).then(response => {
                this.categories = response.data.data
                //     var toggler = document.getElementsByClassName("caret");
                // var i;
                // console.log(toggler);
                // for (i = 0; i < 3; i++) {
                //     console.log(1)
                //     document.getElementsByClassName("caret").addEventListener("click", function () {
                //         document.getElementsByClassName("nested").classList.toggle("active");
                //         document.getElementsByClassName("caret").toggle("caret-down");
                //     });
                // }
            })
        },
        toggle(i) {
            console.log(i)
            document.getElementById(`nested${i}`).classList.toggle("active");
            document.getElementById(`caret${i}`).classList.toggle("caret-down");
        }
    },
    mounted() {
        this.getCategories();
    },
}
</script>