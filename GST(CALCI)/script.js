let base_amount;
let gst_amount;
let inpt_amt = document.querySelector("#amnt");

let amt_disp = document.querySelector("#amt-disp");
let gst_disp = document.querySelector("#gst-disp");

let total_amount_disp = document.querySelector("#total-amt-disp");
let percent_value = document.querySelector("#percentages");
let tax_option = document.querySelector("#tax-option");

const inclusive = (base, gst) => {
  gst = base * (gst / (gst + 100));
  base = base - gst;
  return [gst.toFixed(2), base.toFixed(2)];
};

const exclusive = (base, gst) => {
  gst = (base * gst) / 100;
  return [gst.toFixed(2), base.toFixed(2)];
};

const total_amount = (base, gst) => {
  return base + gst;
};

const calci = () => {
  if (inpt_amt.value.length == 0) return;
  entered_value = inpt_amt.value;
  entered_value = Number(entered_value);
  gst = Number(percent_value.value);

  // now according to inclusive/exclusive option selected

  if (tax_option.value == "inclusive") {
    const [gst_amount, base_amount] = inclusive(entered_value, gst);

    amt_disp.innerText = `₹${base_amount}`;
    gst_disp.innerText = `₹${gst_amount}`;
    total_amount_disp.innerText = `₹${total_amount(
      Number(base_amount),
      Number(gst_amount)
    )}`;
  } else {
    const [gst_amount, base_amount] = exclusive(entered_value, gst);
    amt_disp.innerText = `₹${base_amount}`;
    gst_disp.innerText = `₹${gst_amount}`;
    total_amount_disp.innerText = `₹${total_amount(
      Number(base_amount),
      Number(gst_amount)
    )}`;
  }
};

// trigger calci fun as per the selected option
inpt_amt.addEventListener("keyup", () => {
  calci();
});

percent_value.addEventListener("click", () => {
  calci();
});

tax_option.addEventListener("click", () => {
  calci();
});

inpt_amt.addEventListener("keydown", (e) => {
  if (e.key === "Backspace") {
    if (inpt_amt.value.length == 1) {
      amt_disp.innerText = "₹0";
      gst_disp.innerText = "₹0";
      total_amount_disp.innerText = "₹0";
      return;
    }

    entered_value = entered_value.substring(0, entered_value.length - 1);
    amt_disp.innerText = entered_value;
  }
});
