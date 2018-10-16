(function() {

// input取得
var e_p = document.querySelector('#e_num');
var i_p = document.querySelector('#i_num');
var siguma_p = document.querySelector('#siguma_num');
var w_p = document.querySelector('#w_num');
var l_p = document.querySelector('#l_num');
var c_p = document.querySelector('#c_num');
var result_p = document.querySelector('#pResult');

var result_calc_p;

// 保存ボタン 計算ボタン
document.querySelector('#p_save').addEventListener('click', function() {
  // localStorage.setItem('inputValue', input.value);}
  var e_value = 0;
  if(e_p.value == "al"){
    e_value = 0.7 * 10 **6
  }else if (e_p.value == "steal") {
    e_value = 2.1 *  10 **6
  }else if (e_p.value =="stain"){
    e_value = 1.97 * 10**6
  }

  result_calc_p = (384 * e_value * Number(i_p.value) * Number(siguma_p.value)) /
                (5 * Number(w_p.value) / 2 * Number(c_p.value) * ((Number(l_p.value)) ** 4))

  result_calc_p = result_calc_p.toFixed(6);

  result_p.innerHTML = " = " + result_calc_p;
});

// // 読み込みボタン
// document.querySelector('#load').addEventListener('click', function() {
//   // input.value = localStorage.getItem('inputValue');
// });

})();
