function anagram(name1,name2){
var arrname1 = name1.split('');
var isana = true;
var lenname1 = name1.length;
var lenname2 = name2.length;
if(lenname1 == lenname2){
arrname1.map((a)=>{
	var val = name2.includes(a);
  if(val == false){
  	isana = false;
  }
})
}else{
isana = false;
}
if(isana == true){
console.log("string is anagrm")
}else{
console.log("string is not anagrm")
}
}

var op = anagram("swathika","akithaws")