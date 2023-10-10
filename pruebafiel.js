function solution(n, arrA){
    var arrNs = Array(n).fill(0);

    arrA.forEach(x => {
        if (x <= n && x >= 1){
            arrNs[x-1] += 1;
        }else if (x == n+1){
            var max = Math.max(...arrNs);
            arrNs.fill(max);
        }
    }); 

    return arrNs;
}

console.log(solution(5, [1,1,4,6,1,5,5]));