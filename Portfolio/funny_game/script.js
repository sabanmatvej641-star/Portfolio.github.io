let b_not = document.getElementById("b");
let b_yes = document.getElementById("a");
let body = document.getElementById("c");

b_yes.addEventListener("click", function () {
  body.style.backgroundColor = "green";
  alert("Молодец ты остался на работе");
});
function get_random_position() {
  let n_height = window.innerHeight;
  let n_width = window.innerWidth;
  let b_width = 100;
  let b_height = 100;
  let max_x = n_width - b_width - 1200;
  let max_y = n_height - b_height - 600;
  let random_x = Math.floor(Math.random() * max_x);
  let random_y = Math.floor(Math.random() * max_y);

  return { x: random_x, y: random_y };
}
b_not.addEventListener("mouseover", function () {
  let new_position = get_random_position();
  b_not.style.left = `${new_position.x}px`;
  b_not.style.top = `${new_position.y}px`;
});

// alert(`Matvey ${n2} `);
// alert(`Matvey ${n3} `);
