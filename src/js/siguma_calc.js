(function() {
  // input取得
  var e_siguma = document.querySelector("#siguma_e_num");
  var w_siguma = document.querySelector("#siguma_w_num");
  var l_siguma = document.querySelector("#siguma_l_num");
  var p_siguma = document.querySelector("#siguma_p_num");
  var i_siguma = document.querySelector("#siguma_i_num");
  var result_siguma = document.querySelector("#sigumaResult");

  var result_calc_siguma;

  // 保存ボタン 計算ボタン
  document.querySelector("#siguma_save").addEventListener("click", function() {
    // localStorage.setItem('inputValue', input.value);}
    var e_siguma_value = 0;
    if (e_siguma.value == "al") {
      e_siguma_value = 0.7 * 10 ** 6;
    } else if (e_siguma.value == "steal") {
      e_siguma_value = 2.1 * 10 ** 6;
    } else if (e_siguma.value == "stain") {
      e_siguma_value = 1.97 * 10 ** 6;
    }

    result_calc_siguma =
      (((5 * Number(p_siguma.value) * Number(w_siguma.value)) / 2) *
        Number(l_siguma.value) ** 4) /
      (384 * e_siguma_value * Number(i_siguma.value));

    result_calc_siguma = result_calc_siguma.toFixed(6);

    result_siguma.innerHTML = "= " + result_calc_siguma;
  });

  // // 読み込みボタン
  // document.querySelector('#load').addEventListener('click', function() {
  //   // input.value = localStorage.getItem('inputValue');
  // });
})();
