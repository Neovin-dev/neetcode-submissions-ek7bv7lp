class MyHashSet {
    constructor() {
        this.hasSet = [];
    }

    /**
     * @param {number} key
     * @return {void}
     */
    add(key) {
        if(this.hasSet.includes(key)) return;
        this.hasSet.push(key);
    }

    /**
     * @param {number} key
     * @return {void}
     */
    remove(key) {
        if(this.hasSet.includes(key)){
            for(let i = 0; i < this.hasSet.length; i++){
                if(key === this.hasSet[i]){
                    this.hasSet.splice(i, 1);
                }
            }
        }
    }

    /**
     * @param {number} key
     * @return {boolean}
     */
    contains(key) {
        if(this.hasSet.includes(key)) return true;
        return false;
    }
}

/**
 * Your MyHashSet object will be instantiated and called as such:
 * var obj = new MyHashSet()
 * obj.add(key)
 * obj.remove(key)
 * var param_3 = obj.contains(key)
 */
