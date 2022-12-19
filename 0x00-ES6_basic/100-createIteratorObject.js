export default function createIteratorObject(report) {
    let returns = []
    for(let value in {...report}){
        console.log(value);
    }
}
