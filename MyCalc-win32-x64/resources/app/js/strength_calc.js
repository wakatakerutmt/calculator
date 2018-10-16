// input取得
var w1 = document.querySelector('#w1_num');
var w2 = document.querySelector('#w2_num');
var a = document.querySelector('#a_num');
var a_copy = document.querySelector('#a_num_copy');
var a1 = document.querySelector('#a1_num');
var a2 = document.querySelector('#a2_num');
var p = document.querySelector('#p_num');
var p_copy = document.querySelector('#p_num_copy');
var result_a1 = document.querySelector('#a1Result');
var result_a2 = document.querySelector('#a2Result');
var result_w1 = document.querySelector('#w1Result');
var result_w2 = document.querySelector('#w2Result');


var i1 = document.querySelector('#i1_num');
var i2 = document.querySelector('#i2_num');
var i3 = document.querySelector('#i3_num');
var result_i123 = document.querySelector('#i123Result');


var l_1 = document.querySelector('#l_num_1');
var e_1 = document.querySelector('#e_num_1');
var i_cop = document.querySelector('#i_num_cop');
var l_copy = document.querySelector('#l_num_copy');
var e_copy = document.querySelector('#e_num_copy');
var i_copy = document.querySelector('#i_num_copy');
var a1_copy = document.querySelector('#a1_num_copy');
var a2_copy = document.querySelector('#a2_num_copy');
var w1_copy = document.querySelector('#w1_num_copy');
var w2_copy = document.querySelector('#w2_num_copy');
var result_smax = document.querySelector('#smaxResult');


var l_copy2 = document.querySelector('#l_num_copy2');
var l_copy3 = document.querySelector('#l_num_copy3');
var a1_copy2 = document.querySelector('#a1_num_copy2');
var a2_copy2 = document.querySelector('#a2_num_copy2');
var w1_copy2 = document.querySelector('#w1_num_copy2');
var w2_copy2 = document.querySelector('#w2_num_copy2');
var result_mmax = document.querySelector('#mmaxResult');


var m_max = document.querySelector('#m_max_num');
var m_max_copy = document.querySelector('#m_max_num_copy');
var m_max_copy2 = document.querySelector('#m_max_num_copy2');
var z1 = document.querySelector('#z1_num');
var z2 = document.querySelector('#z2_num');
var z3 = document.querySelector('#z3_num');
var i1_copy = document.querySelector('#i1_num_copy');
var i2_copy = document.querySelector('#i2_num_copy');
var i3_copy = document.querySelector('#i3_num_copy');
var i_copy1 = document.querySelector('#i_num_copy1');
var i_copy2 = document.querySelector('#i_num_copy2');
var i_copy3 = document.querySelector('#i_num_copy3');
var result_sgm1 = document.querySelector('#sgm1Result');
var result_sgm2 = document.querySelector('#sgm2Result');
var result_sgm3 = document.querySelector('#sgm3Result');

// 保存ボタン 計算ボタン
document.querySelector('#a1_save').addEventListener('click', function() {

  var result;
  result = ( Number(w1.value) + Number(a.value) ) / 4;
  result = result.toFixed(4);

  a_copy.value =  Number(a.value);
  a1.value =  result;
  a1_copy.value =  result;
  a1_copy2.value =  result;
  result_a1.innerHTML = "= " + result;
});

document.querySelector('#a2_save').addEventListener('click', function() {

  var result;
  result = ( Number(w2.value) + Number(a_copy.value) ) / 4;
  result = result.toFixed(4);

  a.value =  Number(a_copy.value);
  a2.value = result;
  a2_copy.value =  result;
  a2_copy2.value =  result;
  result_a2.innerHTML = "= " + result;
});

document.querySelector('#w1_save').addEventListener('click', function() {

  var result;
  result = Number(p.value) * Number(a1.value);
  result = result.toFixed(4);

  p_copy.value =  Number(p.value);
  w1_copy.value =  result;
  w1_copy2.value =  result;
  result_w1.innerHTML = "= " + result;
});

document.querySelector('#w2_save').addEventListener('click', function() {

  var result;
  result = Number(p.value) * Number(a2.value) ;
  result = result.toFixed(4);

  p.value =  Number(p_copy.value);
  w2_copy.value =  result;
  w2_copy2.value =  result;
  result_w2.innerHTML = "= " + result;
});

document.querySelector('#i123_save').addEventListener('click', function() {

  var result;
  result = Number(i1.value) + Number(i2.value) + Number(i3.value);
  result = result.toFixed(4);

  i_cop.value = result;
  i_copy.value = result;
  i_copy1.value = result;
  i_copy2.value = result;
  i_copy3.value = result;
  i1_copy.value = Number(i1.value);
  i2_copy.value = Number(i2.value);
  i3_copy.value = Number(i3.value);
  result_i123.innerHTML = "= " + result;
});


document.querySelector('#smax_save').addEventListener('click', function() {

  var e_value;
  if(e_copy.value == "al"){
    e_value = 0.7 * 10 **6
  }else if (e_copy.value == "steal") {
    e_value = 2.1 *  10 **6
  }else if (e_copy.value =="stain"){
    e_value = 1.97 * 10**6
  }

  var e_copy_value
  if(e_1.value == "al"){
    e_copy_value = 0.7 * 10 **6
  }else if (e_1.value == "steal") {
    e_copy_value = 2.1 *  10 **6
  }else if (e_1.value =="stain"){
    e_copy_value = 1.97 * 10**6
  }

  var result;
  result = (
              Number(w1_copy.value) * (( 5 * (Number(l_1.value)**2) - 4 * (Number(a1_copy.value)**2) ))**2
           ) /  (
              1920 * e_value * Number(i_cop.value)
           )
            +
           (
              Number(w2_copy.value) * (( 5 * (Number(l_copy.value)**2) - 4 * (Number(a2_copy.value)**2) ))**2
           ) /  (
              1920 * e_copy_value * Number(i_copy1.value)
           )

  result = result.toFixed(6);

  result_smax.innerHTML = "= " + result;
});

document.querySelector('#mmax_save').addEventListener('click', function() {
  var result;
  result = (
              Number(w1_copy2.value) * (( 3 * (Number(l_copy2.value)**2) - 4 * (Number(a1_copy2.value)**2) ))
           ) /  (
              24
           )
            +
           (
              Number(w2_copy2.value) * (( 3 * (Number(l_copy3.value)**2) - 4 * (Number(a2_copy2.value)**2) ))
           ) /  (
              24
           )

  result = result.toFixed(6);
  m_max.value = result;
  m_max_copy.value = result;
  m_max_copy2.value = result;

  result_mmax.innerHTML = "= " + result;
});


document.querySelector('#sgm1_save').addEventListener('click', function() {
  var result;
  result = (
              Number(m_max.value) * Number(i1_copy.value)
           ) /  (
              Number(z1.value) * Number(i_copy1.value)
           );

  result = result.toFixed(6);
  result_sgm1.innerHTML = "= " + result;
});

document.querySelector('#sgm2_save').addEventListener('click', function() {
  var result;
  result = (
              Number(m_max_copy.value) * Number(i2_copy.value)
           ) /  (
              Number(z2.value) * Number(i_copy2.value)
           );

  result = result.toFixed(6);
  result_sgm2.innerHTML = "= " + result;
});

document.querySelector('#sgm3_save').addEventListener('click', function() {
  var result;
  result = (
              Number(m_max_copy2.value) * Number(i3_copy.value)
           ) /  (
              Number(z3.value) * Number(i_copy3.value)
           );

  result = result.toFixed(6);
  result_sgm3.innerHTML = "= " + result;
});


function keyUpP() {
    p_copy.value = Number(p.value);
}
function keyUpL() {
    l_copy.value = Number(l_1.value);
    l_copy2.value = Number(l_1.value);
    l_copy3.value = Number(l_1.value);
}
// function keyUpI() {
//     i_copy.value = Number(i.value);
// }
function clickE() {
    e_copy.value = e_1.value;
}
