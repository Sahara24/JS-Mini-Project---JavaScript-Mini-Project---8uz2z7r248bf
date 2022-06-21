function clrscr() {
  document.getElementById("input").value = "";
}

function display(value) {
  document.getElementById("input").value += value;
}

function del() {
  var str = document.getElementById("input").value;
  var sliceStr = str.slice(0, str.length - 1);
  document.getElementById("input").value = sliceStr;
}

function calculate() {
  var x = document.getElementById("input").value;
  try {
    var y = eval(x);
    document.getElementById("input").value = y;
  }
  catch {
    alert("Invalid");
  }

}

localStorage.setItem('theme', 'style.css');
function togglefn() {


  var theme = document.getElementById('theme');

  if (localStorage.getItem('theme') == './darkTheme.css') {
    theme.href = 'style.css';
    // toggle = false;
    //document.getElementById('displayVal').innerHTML = document.getElementById('displayVal').innerHTML = !document.getElementById('displayVal').innerHTML ? false : true;
    localStorage.setItem('theme', 'style.css');
  } else {
    theme.href = './darkTheme.css';
    //document.getElementById('displayVal').innerHTML = document.getElementById('displayVal').innerHTML = !document.getElementById('displayVal').innerHTML ? false : true;
    localStorage.setItem('theme', './darkTheme.css');
  }

}

