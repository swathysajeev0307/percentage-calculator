/* COPYRIGHT (C) 2024 - SWATHYMOL SAJEEV | GNU General Public License v3.0

This program is free software: you can redistribute it and/or modify it under the terms of the GNU General Public License as published by the Free Software Foundation, 
either version 3 of the License, or (at your option) any later version. This program is distributed in the hope that it will be useful,but WITHOUT ANY WARRANTY; 
without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the GNU General Public License for more details.

You should have received a copy of the GNU General Public License along with this program.  If not, see <https://www.gnu.org/licenses/>. */

document.addEventListener("DOMContentLoaded", function(){

    const percentageSlider = document.getElementById("percentageSlider");

    const percentageValue = document.getElementById("percentageValue");

    percentageSlider.addEventListener("input", function(){
        percentageValue.textContent = `${percentageSlider.value}%`;
    });
});

function calculatePercentage(){

    const percentageSlider = document.getElementById("percentageSlider").value;

    const baseNumber = document.getElementById("baseNumber").value;

    if(baseNumber === ""){
        alert("Please enter a base number");
        return
    }

    const result = (parseFloat(baseNumber) * parseFloat(percentageSlider) / 100).toFixed(2);

    document.getElementById("result").innerHTML = `Result: ${result}`;
}