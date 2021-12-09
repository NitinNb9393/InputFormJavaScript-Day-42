const textError = document.querySelector(".text-error");
text.oninput = function () {
  let nameRegex = RegExp("^[A-Z]{1}[a-z]{2,}$");
  if (nameRegex.test(text.value)) textError.textContent = "";
  else textError.textContent = "Name is Incorrect";
};
const emailError = document.querySelector(".email-error");
email.oninput = function () {
  let emailRegex = RegExp(
    "^[a-zA-Z0-9-_+]+(\\.?[a-zA-Z0-9-_]+)@[a-zA-Z0-9-_]+\\.[a-zA-Z]{2,}(\\.?[a-zA-Z-_]+)$"
  );
  if (emailRegex.test(email.value)) emailError.textContent = "";
  else emailError.textContent = "Email is Incorrect";
};
const salary = document.querySelector("#salary");
const output = document.querySelector(".salary-output");
output.textContent = salary.value;
salary.addEventListener("input", function () {
  output.textContent = salary.value;
});