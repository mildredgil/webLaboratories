class Stack { 
    // Array is used to implement stack 
    constructor() { 
        this.data = []; 
        this.top = 0;
    } 

    push(val) {
        this.data[this.top] = val;
        this.top += 1;
    }

    pop() {
        if(this.top > 0)
            this.data.pop();
    }

    peek() {
        return this.data[this.top - 1];
    }
} 