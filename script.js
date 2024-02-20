// Your JavaScript goes here
(() => {
  document.addEventListener("DOMContentLoaded", () => {
    // Your JavaScript logic goes here
    const forms = document.querySelectorAll('.form');

    forms.forEach(form => {
      form.addEventListener('submit', function (e) {
        e.preventDefault();

        const values = this.querySelectorAll('input[type=text]');
        const resultField = this.querySelector('input[readonly]');
        const valueType = this.id;

        let value1 = parseFloat(values[0].value.replace(",", ""));
        let value2 = parseFloat(values[1].value.replace(",", ""));
        let result = 0;

        if (isNaN(value1) || isNaN(value2)) {
          values[0].style.background = "#fee";
          values[1].style.background = "#fee";
          resultField.value = "";
          return false;
        }

        switch (valueType) {
          case "f1":
            result = (value1 / 100) * value2;
            break;
          case "f2":
            result = (value1 / value2) * 100;
            break;
          case "f3":
            result = ((value2 - value1) / value1) * 100;
            break;
        }

        resultField.value = result.toFixed(2);
        values[0].style.background = "#fff";
        values[1].style.background = "#fff";
      });
    });
  });
})();
