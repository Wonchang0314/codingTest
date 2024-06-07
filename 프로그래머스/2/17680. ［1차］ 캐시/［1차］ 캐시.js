function solution(cacheSize, cities) {
    var answer = 0;
    let cache = [];
    
    cities = cities.map(city => city.toLowerCase());
    
    for(let i = 0; i < cities.length; i++){
        let index = cache.indexOf(cities[i]);
        if(index !== -1) {
            answer += 1; 
            cache.splice(index, 1);
        }
        else answer += 5; 
        
        if(cache.length < cacheSize) cache.push(cities[i]);
        else if(cacheSize > 0 && cache.length === cacheSize){
            cache.shift();
            cache.push(cities[i]);
        } 
    }
    return answer;
}