$(".phone_with_ddd").mask("(00) 0000-0000");

function mostraSenha() {
  const inputPass = document.getElementById("password");
  const showPass = document.getElementById("btn-password");

  if (inputPass.type === "password") {
    inputPass.setAttribute("type", "text");
    showPass.classList.replace("bi-eye-slash", "bi-eye");
  } else {
    inputPass.setAttribute("type", "password");
    showPass.classList.replace("bi-eye", "bi-eye-slash");
  }
}
function conformUser() {
  alert("User confirmed with success!!");
}
