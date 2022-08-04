Webcam.set({
    width:350,
    height:300,
image_format:'png',
png_quality:90
});
camara=document.getElementById("camara");
Webcam.attach('#camara');
function takesnapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById('result').innerHTML="<img id='capture_img' src="+data_uri+">"
    })
}
console.log('ml5 virson: ',ml5.verson);
classifier=ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/Hf2R780l5/model.json',modelloaded);
function modelloaded(){
    console.log('model loaded');
}
function check(){
    img=document.getElementById("capture_img");
    classifier.classify(img,get_result);
}
function get_result(error,result){
    if (error){
console.error(error);
    }
    else
    {
        console.log(result);
        document.getElementById("result_object_name").innerHTML=result[0].label;
        document.getElementById("result_object_accuracy").innerHTML=result[0].confidence.toFixed(3);
    }
}

