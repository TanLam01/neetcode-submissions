class Solution {
    dailyTemperatures(temperatures) {
        const n = temperatures.length;
        const stack = [];
        const result = new Array(n).fill(0);

        // Dùng vòng lặp for truyền thống để 'i' luôn là kiểu Number và chạy đúng thứ tự
        for (let i = 0; i < n; i++) {
            const currTemp = temperatures[i];

            // Tận dụng chính điều kiện của while để chặn, không cần if/break bên trong
            while (stack.length > 0 && currTemp > temperatures[stack[stack.length - 1]]) {
                const prevIndex = stack.pop();
                result[prevIndex] = i - prevIndex; // Phép tính giữa 2 Number cực nhanh
            }
            
            stack.push(i);
        }

        return result;
    }
}