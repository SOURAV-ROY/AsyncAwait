function makeRequest(location) {
    return new Promise((resolve, reject)=>{
        console.log(`Make Request to ${location}`);
        // if(location == 'Google'){
        if(location == 'Facebook'){
            resolve(`${location} Say Hi`);
        }else{
            reject(`We can only talk to Google`);
        }
    });   
}

function processRequest(response) {
    return new Promise((resolve, reject)=>{
        console.log('Processing Response');
        resolve(`Extra Information + ${response}`);
    });
}

// makeRequest('Google').then(response=>{
// makeRequest('Facebook').then(response=>{
//     console.log("Response Received");
//     return processRequest(response);

// }).then(processedResponse =>{
//     console.log(processedResponse);
// }).catch(err=>{
//     console.log(err);
// });

async function doWork(){
    try{

    // const response = await makeRequest("Google");
    const response = await makeRequest("Facebook");
    console.log('Response Received !!');
    const processResponse = await processRequest(response);
    console.log(processResponse);

    }catch(err){
        console.log(err);
    }
}
doWork();


// function myFunction() {

//     console.log("A");
//     console.log("B");
// }

// console.log('Start');

// myFunction();
// setTimeout(()=>{
//     console.log('WE Are set TimeOut');
// },3000);

// console.log('End');