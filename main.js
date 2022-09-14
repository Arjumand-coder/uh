

prediction=""

Webcam.set({

    width:350,
    height:300,
    image_format:'png',
    png_quality:90
}); 

camera = document.getElementById("camera");

Webcam.attach('#camera');

function take_snapshot()
{
    Webcam.snap(function(data_uri)
    {
        document.getElementById("result").innerHTML ='<img id="captured_image src="'+data_uri+'"/>';

    });
}

console.log('ml5 version:', ml5.version);

classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/cZP7cKAz9/model.json', modelLoaded);

function modelLoaded () {

    console.log('Model Loaded!')
}

function speak() {
    var synth = window.speechSynthesis;
    speak_data =to_spaek;
    var utterThis = new SpeechSynthesisUtterance(speak_data);
    
    synth.speak(utterThis);
} 

function check()  {
    img = document.getElementById('captured_image');
    classifier.classify(img, gotResult);
}

function gotResult(error, results) {
    if (error) {
        console.error(error);
    }  else {
        console.log(results);
        document.getElementById("result_emotion_name").innerHTML = results[0].label;
        to_speak="";

        prediction = results[0].label;
     
      
        if(prediction == "Best") {
            to_speak ="All the best"
            document.getElementById("update_emoji").innerHTML = "&#128077;";
        }

        if(results[0].label == "Amazing") {
            to_speak ="This is amazing"
            document.getElementById("update_emoji").innerHTML = "&#128076;";
        }

        if(results[0].label == "Victory") {
            to_speak ="That was a marvellous victory"
            document.getElementById("update_emoji").innerHTML = "&#9996;";
        }



    }
}