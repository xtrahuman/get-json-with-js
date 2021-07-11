var request= new XMLHttpRequest;

request.open(GET,'data.json',true);

request.onload= function(){
    // beginning accessing json data here

    var data= JSON.parse(this.response);
    for(let i=0;i<data.length;i++){
        console.log(data[i].name + ' is a ' + data[i].race + '.')
    }
}
request.send();