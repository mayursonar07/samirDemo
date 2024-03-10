import data from '../assets/sampleData.json'

export function getMockData() {
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve(data);
        }, 2000);
    })
}
