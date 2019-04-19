(function() {
  // input取得
  var e_i = document.querySelector("#i_e_num");
  var siguma_i = document.querySelector("#i_siguma_num");
  var w_i = document.querySelector("#i_w_num");
  var l_i = document.querySelector("#i_l_num");
  var p_i = document.querySelector("#i_p_num");
  var result_i = document.querySelector("#iResult");

  var insert_i_for_siguma = document.querySelector("#siguma_i_num");
  var result_calc_i;

  // 保存ボタン 計算ボタン
  document.querySelector("#i_save").addEventListener("click", function() {
    // localStorage.setItem('inputValue', input.value);}
    var e_i_value = 0;
    if (e_i.value == "al") {
      e_i_value = 0.7 * 10 ** 6;
    } else if (e_i.value == "steal") {
      e_i_value = 2.1 * 10 ** 6;
    } else if (e_i.value == "stain") {
      e_i_value = 1.97 * 10 ** 6;
    }

    result_calc_i =
      (((5 * Number(p_i.value) * Number(w_i.value)) / 2) *
        Number(l_i.value) ** 4) /
      (Number(siguma_i.value) * 384 * e_i_value);

    result_calc_i = result_calc_i.toFixed(6);

    result_i.innerHTML = "= " + result_calc_i;

    insert_i_for_siguma.value = result_calc_i;
  });

  // // 読み込みボタン
  // document.querySelector('#load').addEventListener('click', function() {
  //   // input.value = localStorage.getItem('inputValue');
  // });
})();
