class Solution {
    asteroidCollision(asteroids) {
        let stack = [];

        for (let i = 0; i < asteroids.length; i++) {
            let curr = asteroids[i];
            let alive = true;

            while ( alive && stack.length > 0 && stack[stack.length - 1] > 0 && curr < 0 ) {
                let top = stack[stack.length - 1];

                if (Math.abs(top) < Math.abs(curr)) {
                    stack.pop();
                } else if (Math.abs(top) === Math.abs(curr)) {
                    stack.pop();
                    alive = false;
                } else {
                    alive = false;
                }
            }

            if (alive) {
                stack.push(curr);
            }
        }

        return stack;
    }
}