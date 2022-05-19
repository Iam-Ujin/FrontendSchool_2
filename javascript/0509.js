let data = [{
    반 : 1, 
    번 : 1, 
    이름 : "호준", 
    중간고사점수 : 55
}, {
    반 : 1, 
    번 : 2, 
    이름 : "길동", 
    중간고사점수 : 60
}, {
    반 : 1, 
    번 : 3, 
    이름 : "영희", 
    중간고사점수 : 30
}, {
    반 : 1, 
    번 : 4, 
    이름 : "철수", 
    중간고사점수 : 20
}, {
    반 : 1, 
    번 : 5, 
    이름 : "규리", 
    중간고사점수 : 100
}]

// 1. 중간고사 점수를 하나의 array로 만들어주세요.
console.log(data.map(x => x.중간고사점수))
// 2. 이름과 중간고사 점수를 하나의 array로 만들어주세요.
console.log(data.map(x => [x.이름, x.중간고사점수]))
// (나아가기) 3. 중간고사점수의 표준편차를 구해주세요. 또 어떻게 구하는 것이 효율적일지 고민해주세요.