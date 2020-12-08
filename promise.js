let a = 0;

new Promise((res, rej) => {
  a += 1;
  console.log(a);
  res("res");
  a += 1;
  console.log(a);
  rej("rej");
  a += 1;
  console.log(a);
});
