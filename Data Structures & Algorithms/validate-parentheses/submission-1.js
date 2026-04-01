class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        if(s.length === 0) return true;
        if(s.length === 1) return false;

        let stack = [];
        let open = ['[', '{', '('];
        let close = [']', '}', ')'];

        for(let i = 0; i < s.length; i++){
            if( s.charAt(i) === open[0] ||
                s.charAt(i) === open[1] ||
                s.charAt(i) === open[2] ){
                    
                stack.push(s.charAt(i));

            } else if((s.charAt(i) === close[0]) && (stack[stack.length - 1] === open[0])){
                stack.pop();
            } else if((s.charAt(i) === close[1]) && (stack[stack.length - 1] === open[1])){
                stack.pop();
            } else if((s.charAt(i) === close[2]) && (stack[stack.length - 1] === open[2])){
                stack.pop();
            } else {
                return false;
            }
        }

        return (stack.length === 0);
    }
}