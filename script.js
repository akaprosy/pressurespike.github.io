/*Function for velocity formulas. Find Q*/

addEventListener("click", function velocityone() {

    let stroke, time;

    stroke = Number(document.formcalc6.txtstroke.value);

    time = Number(document.formcalc6.txttime.value);

    velocity = stroke * (60 / time);

    if (isNaN(velocity) || velocity < 0) {

        document.formcalc6.txtvelocity.value = "";

        if (isNaN(stroke) || stroke < 0) {

            stroke = Number(document.formcalc6.txtstroke.value = "");

        } else if (isNaN(time) || time < 0) {

            time = Number(document.formcalc6.txttime.value = "");

        }

    } else {

        document.formcalc6.txtvelocity.value = velocity;

    }

})



/*Function for velocity given flow and area*/

addEventListener("click", function velocitytwo() {

    let flow, area;

    flow = Number(document.formcalc7.txtflow.value);

    area = Number(document.formcalc7.txtarea.value);

    velocity = (flow * 231) / area;

    if (isNaN(velocity) || velocity < 0) {

        document.formcalc7.txtvelocity.value = "";

        if (isNaN(flow) || flow < 0) {

            flow = Number(document.formcalc7.txtflow.value = "");

        } else if (isNaN(area) || area < 0) {

            area = Number(document.formcalc7.txtarea.value = "");

        }

    } else {

        document.formcalc7.txtvelocity.value = velocity;

    }

})



//Function for flow requirement given cylinder velocity and area(extending)

addEventListener("click", function flowreqext() {

    let velocity,bore, area, flow;

    velocity = Number(document.formcalc9.txtvelocity.value);

    bore = Number(document.formcalc9.txtbore.value);  

    area = bore * bore * .7854;

    flow = (velocity * area) / 231;

    if (isNaN(flow) || flow < 0) {

        document.formcalc9.txtflow.value = "";

        if (isNaN(velocity) || velocity < 0) {

            velocity = Number(document.formcalc9.txtvelocity.value = "");

        } else if (isNaN(bore) || bore < 0) {

            bore = Number(document.formcalc9.txtbore.value = "");

        }

    } else {

        document.formcalc9.txtflow.value = flow;

    }

})

//Function for flow requirement given cylinder velocity and area(retracting)

addEventListener("click", function flowreqret() {

    let velocity, bore, roddia, rodarea, borearea, annarea, flow;

    velocity = Number(document.formcalc10.txtvelocity.value);

    bore = Number(document.formcalc10.txtbore.value);

    roddia = Number(document.formcalc10.txtroddia.value);

    borearea = bore * bore * .7854;

    rodarea = roddia * roddia * .7854;

    annarea = borearea - rodarea;

    flow = (velocity * annarea) / 231;

    if (isNaN(flow) || flow < 0) {

        document.formcalc10.txtflow.value = "";

        if (isNaN(velocity) || velocity < 0) {

            velocity = Number(document.formcalc10.txtvelocity.value = "");

        } else if (isNaN(bore) || bore < 0) {

            bore = Number(document.formcalc10.txtbore.value = "");

        } else if (isNaN(roddia) || roddia < 0) {

            roddia = Number(document.formcalc10.txtroddia.value = "");

        } else if (roddia > bore) {

            bore = Number(document.formcalc10.txtbore.value = "");

            roddia = Number(document.formcalc10.txtroddia.value = "");

        }

    } else {

        document.formcalc10.txtflow.value = flow;

    }

})

addEventListener("click", function horsepower() {
    let pressure, flow, horsepower;
    pressure = Number(document.formcalc11.txtpress.value);
    flow = Number(document.formcalc11.txtflow.value);
    horsepower = (pressure * flow) / 1714;
    if (isNaN(horsepower) || horsepower < 0) {
        document.formcalc11.txthp.value = "";
        if (isNaN(pressure) || pressure < 0) {
            pressure = Number(document.formcalc11.txtpress.value = "");
        } else if (isNaN(flow) || flow < 0) {
            flow = Number(document.formcalc11.txtflow.value = "");
        }
     } else {
        document.formcalc11.txthp.value = horsepower;
        }
})

// pump flow
addEventListener("click", function pumpflow() {
    let displacement, flow, rpm;
    displacement = Number(document.formcalc15.txtdisplacement.value);
    rpm = Number(document.formcalc15.txtrpm.value);
    flow = (displacement * rpm)/231
    if (isNaN(flow) || flow < 0) {
        document.formcalc15.txtflow.value = "";
        if (isNaN(displacement) || displacement < 0) {
            displacement = Number(document.formcalc15.txtdisplacement.value = "");
        } else if (isNaN(rpm) || rpm < 0) {
            rpm = Number(document.formcalc15.txtrpm.value = "");
        }
    } else {
        document.formcalc15.txtflow.value = flow;
    }
})

/*Function for calculating Force*/
addEventListener("click", function force() {
    let area, pressure, force;
    area = Number(document.formcalc2.txtarea.value);  
    pressure = Number(document.formcalc2.txtpress.value);    
    force = area * pressure;
    if (isNaN(force) || force < 0) {
        document.formcalc2.txtforce.value = "";        
        if (isNaN(area) || area < 0) {
            area = Number(document.formcalc2.txtarea.value = "");            
        } else if (isNaN(pressure) || pressure < 0) {
            pressure = Number(document.formcalc2.txtpress.value = "");            
        }
    } else {
        document.formcalc2.txtforce.value = force;
    }
})

/*Function for calculating Pressure*/
addEventListener("click", function pressure() {
    let area, pressure, force;
    area = Number(document.formcalc3.txtarea.value);
    force = Number(document.formcalc3.txtforce.value);
    pressure = force / area;  
    if (isNaN(pressure) || pressure < 0) {
        document.formcalc3.txtpress.value = "";
        if (isNaN(area) || area < 0) {
            area = Number(document.formcalc3.txtarea.value = "");
        } else if (isNaN(force) || force < 0) {
            force = Number(document.formcalc3.txtforce.value = "");
        }
    } else {
        document.formcalc3.txtpress.value = pressure;
    }
})
/*Function for calculating area*/
addEventListener("click", function area() {
    let area, pressure, force;
    pressure = Number(document.formcalc4.txtpress.value);
    force = Number(document.formcalc4.txtforce.value);
    area = force / pressure;
    if (isNaN(area) || area < 0) {
        document.formcalc4.txtarea.value = "";
        if (isNaN(pressure) || pressure < 0) {
            pressure = Number(document.formcalc4.txtpress.value = "");
        } else if (isNaN(force) || force < 0) {
            force = Number(document.formcalc4.txtforce.value = "");
        }
    } else {
        document.formcalc4.txtarea.value = area;
    }
})
/*Function for calculating area of a cylinder*/
addEventListener("click", function areacyl() {
    let diameter, area;
    diameter = Number(document.formcalc5.txtdia.value);
    area = diameter * diameter * .7854;
    if (isNaN(area) || area < 0) {
        document.formcalc5.txtarea.value = "";
        if (isNaN(diameter) || diameter < 0) {
            diameter = Number(document.formcalc5.txtdia.value = '');
        }
    } else {
        document.formcalc5.txtarea.value = area;
    }
})
/*Function for calculating annular area*/
addEventListener("click", function annareacyl() {
    let borediameter, borearea, roddiameter, rodarea, annulararea;
    borediameter = Number(document.formcalc8.txtboredia.value);
    borearea = borediameter * borediameter * .7854;
    roddiameter = Number(document.formcalc8.txtroddia.value);
    rodarea = roddiameter * roddiameter * .7854;
    annulararea = borearea - rodarea;
    if (isNaN(annulararea) || annulararea < 0) {
        document.formcalc8.txtannarea.value = "";
        if (isNaN(borediameter) || borediameter < 0) {
            borediameter = Number(document.formcalc8.txtboredia.value = "");
        } else if (isNaN(roddiameter) || roddiameter < 0) {
            roddiameter = Number(document.formcalc8.txtroddia.value = "");
        } else if (roddiameter >= borediameter) {
            borediameter = Number(document.formcalc8.txtboredia.value = "");
            roddiameter = Number(document.formcalc8.txtroddia.value = "");
        } else if (borearea == rodarea) {
            document.formcalc8.txtannarea.value = "recheck bore and rod size";
        }
    } else {
            document.formcalc8.txtannarea.value = annulararea;
        }
})


// calculate hp given torqe(lbs-ft) and rpm
addEventListener("click", function motorhp1() {
    let torque, rpm, horsepower;
    torque = Number(document.formcalc12.txttorque.value);
    rpm = Number(document.formcalc12.txtrpm.value);
    horsepower = (torque * rpm) / 5252;
    if (isNaN(horsepower) || horsepower < 0) {
        document.formcalc12.txthp.value = "";
        if (isNaN(torque) || torque < 0) {
            torque = Number(document.formcalc12.txttorque.value = "");
        } else if (isNaN(rpm) || rpm < 0) {
            rpm = Number(document.formcalc12.txtrpm.value = "");
        }
    } else {
        document.formcalc12.txthp.value = horsepower;
    }
})

// calculate hp given torqe(lbs-in) and rpm
addEventListener("click", function motorhp2() {
    let torque, rpm, horsepower;
    torque = Number(document.formcalc13.txttorque.value);
    rpm = Number(document.formcalc13.txtrpm.value);
    horsepower = (torque * rpm) / 63025;
    if (isNaN(horsepower) || horsepower < 0) {
        document.formcalc13.txthp.value = "";
        if (isNaN(torque) || torque < 0) {
            torque = Number(document.formcalc13.txttorque.value = "");
        } else if (isNaN(rpm) || rpm < 0) {
            rpm = Number(document.formcalc13.txtrpm.value = "");
        }
    } else {
        document.formcalc13.txthp.value = horsepower;
    }
})

// calculate torque given displacement and pressure
addEventListener("click", function motortorque() {
    let displacement, pressure, torque;
    displacement = Number(document.formcalc14.txtdisplacement.value);
    pressure = Number(document.formcalc14.txtpressure.value);
    torque = (displacement * pressure)/6.28;
    if (isNaN(torque) || torque < 0) {
        document.formcalc14.txttorque.value = "";
        if (isNaN(displacement) || displacement < 0) {
            displacement = Number(document.formcalc14.txtdisplacement.value = "");
        } else if (isNaN(pressure) || pressure < 0) {
            pressure = Number(document.formcalc14.txtpressure.value = "");
        }
    } else {
        document.formcalc14.txttorque.value = torque;
    }
})

addEventListener("click", function inletpressure() {
    let positiveHead, specificGravity, res;
    positiveHead = Number(document.formcalc.txtposhead.value);
    specificGravity = Number(document.formcalc.txtspecgrav.value);
    res = positiveHead * specificGravity * .433;
    if (isNaN(res) || res < 0) {
        document.formcalc.txtres.value = "";
        if (isNaN(positiveHead) || positiveHead < 0) {
            positiveHead = Number(document.formcalc.txtposhead.value = "");
        } else if (isNaN(specificGravity) || specificGravity < 0) {
            specificGravity = Number(document.formcalc.txtspecgrav.value = "");
        }
    } else
    document.formcalc.txtres.value = res;
})
// Your code here!









