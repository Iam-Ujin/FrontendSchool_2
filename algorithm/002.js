const list = {
  head: {
    value: 90,
    next: {
      value: 2,
      next: {
        value: 77,
        next: {
          value: 35,
          next: {
            value: 21,
            next: null,
          },
        },
      },
    },
  },
};

console.log(list.head.next.next.next.value);
