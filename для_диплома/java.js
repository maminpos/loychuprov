let number_1
let number_2
let number_3
let number_4
let number_5
let number_6
let number_7
let number_8
let number_9
let number_10
let number_11

let VVP_1;
let VVP_2;
let VVP_3;
let VVP_4;
let VVP_5;
let VVP_6;
let VVP_7;
let VVP_8;
let VVP_9;
let VVP_10;
let VVP_11;

function number_one(){
  let a = document.querySelector('#number_1')
  number_1 = parseFloat(a.value)
}

function number_two(){
  let a = document.querySelector('#number_2')
  number_2 = parseFloat(a.value)
}

function number_three(){
  let a = document.querySelector('#number_3')
  number_3 = parseFloat(a.value)
}

function number_four(){
  let a = document.querySelector('#number_4')
  number_4 = parseFloat(a.value)
}

function number_five(){
  let a = document.querySelector('#number_5')
  number_5 = parseFloat(a.value)
}

function number_six(){
  let a = document.querySelector('#number_6')
  number_6 = parseFloat(a.value)
}

function number_seven(){
  let a = document.querySelector('#number_7')
  number_7 = parseFloat(a.value)
}

function number_eight(){
  let a = document.querySelector('#number_8')
  number_8 = parseFloat(a.value)
}

function number_nine(){
  let a = document.querySelector('#number_9')
  number_9 = parseFloat(a.value)
}

function number_ten(){
  let a = document.querySelector('#number_10')
  number_10 = parseFloat(a.value)
}

function number_eleven(){
  let a = document.querySelector('#number_11')
  number_11 = parseFloat(a.value)
}

function VVP_one(){
  let a = document.querySelector('#VVP_1')
  VVP_1 = parseFloat(a.value)
}

function VVP_two(){
  let a = document.querySelector('#VVP_2')
  VVP_2 = parseFloat(a.value)
}

function VVP_three(){
  let a = document.querySelector('#VVP_3')
  VVP_3 = parseFloat(a.value)
}

function VVP_four(){
  let a = document.querySelector('#VVP_4')
  VVP_4 = parseFloat(a.value)
}

function VVP_five(){
  let a = document.querySelector('#VVP_5')
  VVP_5 = parseFloat(a.value)
}

function VVP_six(){
  let a = document.querySelector('#VVP_6')
  VVP_6 = parseFloat(a.value)
}

function VVP_seven(){
  let a = document.querySelector('#VVP_7')
  VVP_7 = parseFloat(a.value)
}

function VVP_eight(){
  let a = document.querySelector('#VVP_8')
  VVP_8 = parseFloat(a.value)
}

function VVP_nine(){
  let a = document.querySelector('#VVP_9')
  VVP_9 = parseFloat(a.value)
}

function VVP_ten(){
  let a = document.querySelector('#VVP_10')
  VVP_10 = parseFloat(a.value)
}

function VVP_eleven(){
  let a = document.querySelector('#VVP_11')
  VVP_11 = parseFloat(a.value)
}

// let = investments = [number_1, number_2, number_3, number_4, number_5,
// number_6, number_7, number_8, number_9, number_10, number_11];
let investments = [];
let slope = 0;
let y_intercept = 0;

function updatePlot() {
  // Данные об инвестициях в ВВП России за 2010-2020 годы
  investments = [VVP_1, VVP_2, VVP_3, VVP_4, VVP_5,
    VVP_6, VVP_7, VVP_8, VVP_9, VVP_10, VVP_11];
  const VVP = [number_1, number_2, number_3, number_4, number_5,
    number_6, number_7, number_8, number_9, number_10, number_11]

  // Линейная регрессия
  const x = VVP;
  const y = investments;

  const x_mean = x.reduce((acc, curr) => acc + curr, 0) / x.length;
  const y_mean = y.reduce((acc, curr) => acc + curr, 0) / y.length;

  const numerator = x.reduce((acc, curr, i) => acc + (curr - x_mean) * (y[i] - y_mean), 0);
  const denominator = x.reduce((acc, curr) => acc + Math.pow(curr - x_mean, 2), 0);

  slope = numerator / denominator;
  y_intercept = y_mean - slope * x_mean;

  const newSlope = parseFloat(document.getElementById('slopeInput').value);
  const newYIntercept = parseFloat(document.getElementById('interceptInput').value);
  slope = 4.69 + (newSlope - 5.06);
  y_intercept = newYIntercept;

  const regression_line = x.map(year => slope * year + y_intercept);

  // Построение графика
  const plot_data = [
    {
      x: VVP,
      y: investments,
      type: 'scatter',
      mode: 'markers',
      name: 'Инвестиции'
    },
    {
      x: VVP,
      y: regression_line,
      type: 'scatter',
      mode: 'lines',
      name: 'Линейная регрессия'
    }
  ];

  const plot_layout = {
    xaxis: { title: 'Годы' },
    yaxis: { title: 'Доля инвестиций в ВВП, %' }
  };

  Plotly.newPlot('plot', plot_data, plot_layout);
}

function BackPage() {
  location.href = "../main.html";
}

function openPopup3() {
  document.getElementById("popup3").classList.add("active");
}

// Функция для закрытия всплывающего окна
function closePopup3() {
  document.getElementById("popup3").classList.remove("active");
}
