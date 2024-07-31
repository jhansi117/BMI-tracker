const form = document.querySelector("form");

form.addEventListener('submit',function(e){
    e.preventDefault(); //preventing default event because the form's actions are POST and GET. so it may get submitted to the server.

    //select height - value
    const height = parseInt(document.querySelector("#height").value);
    //select weight - value
    const weight = parseInt(document.querySelector("#weight").value);
    //select - result - div
    const result = document.querySelector("#results");
    //calculate bmi
    const bmi = (weight/(height/100)**2).toFixed(2);

    //display based on condition
    if(height=="" || height<0 || isNaN(height)){
        result.innerHTML = `Enter a valid height ${height}`;
    }else if(weight=="" || weight<0 || isNaN(weight)){
        result.innerHTML = `Enter a valid weight ${weight}`;
    }else{
        let guide;
        if(bmi<18.6){
            guide = "under weight";
        }else if(bmi>18.6 && bmi<24.9){
            guide = "normal"
        }else{
            guide = "over weight"
        }
        result.innerHTML= `<span>${bmi} - ${guide}</span>`
    }

})