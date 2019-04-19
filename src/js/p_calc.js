(function() {
  // input取得
  var e_p = document.querySelector("#e_num");
  var i_p = document.querySelector("#i_num");
  var siguma_p = document.querySelector("#siguma_num");
  var w_p = document.querySelector("#w_num");
  var l_p = document.querySelector("#l_num");
  var result_p = document.querySelector("#pResult");
  var insert_p_for_I = document.querySelector("#i_p_num");
  var insert_p_for_siguma = document.querySelector("#siguma_p_num");
  var result_calc_p;

  e_p.addEventListener("change", function() {
    var selected = e_p.value;
    var pulldown_option1 = document
      .getElementById("i_e_num")
      .getElementsByTagName("option");
    for (i = 0; i < pulldown_option1.length; i++) {
      if (pulldown_option1[i].value == selected) {
        pulldown_option1[i].selected = true;
        break;
      }
    }
    var pulldown_option2 = document
      .getElementById("siguma_E_num")
      .getElementsByTagName("option");
    for (i = 0; i < pulldown_option2.length; i++) {
      if (pulldown_option2[i].value == selected) {
        pulldown_option2[i].selected = true;
        break;
      }
    }
  });

  w_p.addEventListener("keyup", function() {
    var w_for_i = document.querySelector("#i_w_num");
    var w_for_siguma = document.querySelector("#siguma_w_num");
    w_for_i.value = w_p.value;
    w_for_siguma.value = w_p.value;
  });

  l_p.addEventListener("keyup", function() {
    var l_for_i = document.querySelector("#i_l_num");
    var l_for_siguma = document.querySelector("#siguma_l_num");
    l_for_i.value = l_p.value;
    l_for_siguma.value = l_p.value;
  });

  // 保存ボタン 計算ボタン
  document.querySelector("#p_save").addEventListener("click", function() {
    // localStorage.setItem('inputValue', input.value);}
    var e_value = 0;
    if (e_p.value == "al") {
      e_value = 0.7 * 10 ** 6;
    } else if (e_p.value == "steal") {
      e_value = 2.1 * 10 ** 6;
    } else if (e_p.value == "stain") {
      e_value = 1.97 * 10 ** 6;
    }

    result_calc_p =
      (384 * e_value * Number(i_p.value) * Number(siguma_p.value)) /
      (((5 * Number(w_p.value)) / 2) * Number(l_p.value) ** 4);

    result_calc_p = result_calc_p.toFixed(6);

    result_p.innerHTML = " = " + result_calc_p;

    insert_p_for_I.value = result_calc_p;
    insert_p_for_siguma.value = result_calc_p;
  });

  // // 読み込みボタン
  // document.querySelector('#load').addEventListener('click', function() {
  //   // input.value = localStorage.getItem('inputValue');
  // });
})();
