let data = {
  clientKey: "",
  UserLocal: "",
  spv_excl_arch_ee: "N",
  spv_excl_purged_ee: "N",
  querry: "",
};

let check1 = document.getElementById("check1");
let check2 = document.getElementById("check2");
let clientKey = document.getElementById("client_key");
let UserLocal = document.getElementById("user_loc_sel");
let querry = document.getElementById("query_inp");
let result_div = document.getElementById("result_div");

check1.addEventListener("change", function () {
  if (this.checked) {
    data.spv_excl_arch_ee = "Y";
  } else {
    data.spv_excl_arch_ee = "N";
  }
});

check2.addEventListener("change", function () {
  if (this.checked) {
    data.spv_excl_purged_ee = "Y";
  } else {
    data.spv_excl_purged_ee = "N";
  }
});

document.getElementById("submit_btn").addEventListener("click", function () {
  data.clientKey = clientKey.value;
  data.UserLocal = UserLocal.value;
  data.querry = querry.value;
  console.log(data);

  let context = `context:==> exc sp_set_vpd_ctx('vpd_extracted','clientscript',spv_excl_arch_ee =>'${data.spv_excl_arch_ee}',spv_excl_purged_ee =>'${data.spv_excl_purged_ee}',spv_prod_locale =>'UN');
   <p> clientKey:==>${data.lientKey} ,</P>
    <p>UserLocal:==> ${data.UserLocal} ,</P>
    <p>spv_excl_arch_ee:==> ${data.spv_excl_arch_ee} ,</P>
    <p>spv_excl_purged_ee:==> ${data.spv_excl_purged_ee} ,</P>
    <p>querry:==> ${data.querry},</P>
    `;
  result_div.innerHTML = context;
});

let toggle_bar = document.getElementById("toggle_bar");

let subdivs = toggle_bar.getElementsByClassName("sub_tog_div");

for (var i = 0; i < subdivs.length; i++) {
  subdivs[i].addEventListener("click", function () {
    var current = document.getElementsByClassName("active");

    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}
