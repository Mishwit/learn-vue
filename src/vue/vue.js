let app = new Vue({
  el: "#vue",
  data: {
    counter: 1,
    // list: ["один", "два", "три"],
    // users: [
    //   {
    //     id: 1,
    //     name: "Иван",
    //   },
    //   {
    //     id: 2,
    //     name: "Сергей",
    //   },
    // ],
  },
  // created: function () {
  //   this.list;
  // },
  created: function () {
    this.counter = 3;
    this.high();
  },
  methods: {
    high() {
      this.counter++;
    },
    // nameFunction() {
    //   alert("nameFunction");
    // },
    // nameFunction2: function () {
    //   alert("nameFunction2");
    // },
  },
});

// let app = new Vue({
//   el: "#app",
//   data: {
//     message: "Hello Vue!",
//     status: 1,
//     isActive: true,
//     isBtn: true,
//     width: 15,
//   },
// });
