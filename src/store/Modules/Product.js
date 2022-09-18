const product = {
    state : {
        count : 0,
        loading : false,
        items : [
            {id : 1, name:'shirt', price:2000, quantity : 10 },
            {id : 2, name:'Trouser', price:3000, quantity : 10 },
            {id : 3, name:'Skirt', price:1000, quantity : 10 },
            {id : 4, name:'Shoe', price:5000, quantity : 10 },
            {id : 5, name:'Wrist Watch', price:2500, quantity : 0 },
            {id : 6, name:'Glases', price:500, quantity : 10 },
            {id : 7, name:'Belt', price:1500, quantity : 10 },
            {id : 8, name:'Wrist Band', price:200, quantity : 10 },
            {id : 9, name:'Face Cap', price:500, quantity : 10 },
            {id : 10, name:'Bag', price:2000, quantity : 10 },
        ],
        cart : [
            {id: 1, item:{id : 1, name:'shirt', price:2000, quantity : 10 }, quantity : 1},
            {id: 2, item: {id : 6, name:'Glases', price:500, quantity : 10 }, quantity : 3},
            {id: 3, item: {id : 9, name:'Face Cap', price:500, quantity : 10 }, quantity : 1},
        ]
    },
    mutations : {
        ADD_ITEM(state, item) {
            item.id = state.items.length+1;
            state.items.push(item);
        },
        UPDATE_ITEM(state, updatedItem) {
            let foundEle = state.items.find((ele)=>{
                return ele.id = updatedItem.id
            })
            if(foundEle)
            foundEle = updatedItem;
        },
        ADD_ITEM_TO_CART(state, item){
            var data = {
                id : state.cart.length+1,
                item : item,
                quantity : 1,
            }
            state.cart.push(data);
        },
        REMOVE_ITEM_FROM_CART(state, item){
            const index = state.cart.findIndex(object => {
                return object.id == item.id;
            });
            state.cart.splice(index, 1);
        },
        REMOVE_ITEM(state, item) {
            const index = state.items.findIndex(object => {
                return object.id == item.id;
            });
            state.items.splice(index, 1);
        },
        INCREMENT(state, item) {
            for (const obj of state.cart) {
                if (obj.id === item.id) {
                    var currentItem = state.items.find(ele=>{
                        return ele.id == item.item.id
                    })
                    if(obj.quantity < currentItem.quantity){
                        obj.quantity ++;
                        break;
                    }else{
                        alert("Out of Stock");
                    }
                  
                }
              }
        },
        DECREMENT(state, item) {
            for (const obj of state.cart) {
                if (obj.id === item.id) {
                    if(obj.quantity > 1){
                        obj.quantity --;
                        break;
                    }
                    else{
                        alert("Can't be lesser than one ");
                    }
                  
                }
              }
        },
        CHECKOUT(state){
            state.cart.forEach(cart => {
                for (const obj of state.items) {
                    if(obj.id == cart.item.id){
                        obj.quantity -= cart.quantity
                    }
                }
            });
            state.cart = [];
        }
    },
    actions : {
    },
  }

export default product;  