export const fruitMixin = {
    data() {
        return {
            fruits: ['Apple','Mango','grapes','orange'],
            filterText: ''
        }
    },
    computed: {
        filteredFruits() {
            return this.fruits.filter((element) => {
                return element.match(this.filterText);
            });
        }
    }
};