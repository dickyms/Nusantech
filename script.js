const resultTag = document.getElementById("result");
const putValue = () => {
  const boxes = document.querySelectorAll('input[name="box"]:checked');
  if (boxes.length === 1 || boxes.length === 0) {
    alert(`Error - Input More Number`);
  } else {
    let values = [];
    boxes.forEach((box) => {
      values.push(parseInt(box.value));
    });
    return values;
  }
};

function sum() {
  const values = putValue();
  if (Array.isArray(values)) {
    const [one, two, three] = values;
    if (!three) {
      const result = one + two;
      resultTag.innerHTML = `Hasil : ${result}`;
    } else {
      const result = one + two + three;
      resultTag.innerHTML = `Hasil : ${result}`;
    }
  }
}

function subtract() {
  const values = putValue();
  if (Array.isArray(values)) {
    const [one, two, three] = values;
    if (!three) {
      const result = one - two;
      resultTag.innerHTML = `Hasil : ${result}`;
    } else {
      const result = one - two - three;
      resultTag.innerHTML = `Hasil : ${result}`;
    }
  }
}

function divide() {
  const values = putValue();
  if (Array.isArray(values)) {
    const [one, two, three] = values;
    if (!three) {
      const result = one / two;
      resultTag.innerHTML = `Hasil : ${result}`;
    } else {
      const result = one / two / three;
      resultTag.innerHTML = `Hasil : ${result}`;
    }
  }
}

function multiple() {
  const values = putValue();
  if (Array.isArray(values)) {
    const [one, two, three] = values;
    if (!three) {
      const result = one * two;
      resultTag.innerHTML = `Hasil : ${result}`;
    } else {
      const result = one * two * three;
      resultTag.innerHTML = `Hasil : ${result}`;
    }
  }
}
