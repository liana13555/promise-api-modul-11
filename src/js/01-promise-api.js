/*
 * Создание промиса
 *  - Класс Promise
 *  - resolve
 *  - reject
 *  - Promise.prototype.then(onResolve, onReject)
 * 
 * Promise (обещание, промис) - объект, представляющий текущее состояние асинхронной операции. 
 * Это обёртка для значения, неизвестного на момент создания промиса. 
 * Промис может находиться в трёх состояниях:
Ожидание (pending) - начальное состояние при создании промиса.
Исполнено (fulfilled) - операция исполнена успешно, с каким-то результатом.
Отклонено (rejected) - операция отклонена с ошибкой.
 */

const promise = new Promise((resolve, reject) => { // всегда объявл-ся 2 параметра: resolve и reject
  const canFulfill = Math.random() > 0.5;

  setTimeout(() => {
    if (canFulfill) {
      resolve('Промис выполнился успешно, с результатом (исполнен, fulfilled)');
    }

    reject('Промис выполнился с ошибкой (отклонён, rejected)');
  }, 1000);
});

// promise.then(onFulfilled, onRejected); // then - если промис выполнится успешно 
// then(onSuccess, onError)

function onFulfilled(result) {
  console.log('onFulfilled -> onFulfilled');
  console.log(`✅ ${result}`);
}

function onRejected(error) {
  console.log('onRejected -> onRejected');
  console.log(`❌ ${error}`);
}

/*
 * Цепочки промисов (chaining)
 */
// promise
//   .then(result => {  // then на свое место возвращает promise
//   console.log(result);

//   return 5;
// }).then(x => {
//   console.log(x);

//   return 10;
// }).then(y => {    // y = 10
//   console.log(y);
// })

/*
 * Promise.prototype.catch(error)
 * Promise.prototype.finally()
 */

promise
  .then(onFulfilled)
  .then(x => {
    console.log(x);

    // throw new Error('ошибка во втором then');

    return 10;
  })
  .then(y => {
    console.log(y);
  })
  .catch(error => console.log(error))  // catch ставится в конце промиса, отлавливает ошибку
  .finally(() => console.log('Я буду выполнен в любом случае'));
  // В finally() не передаются аргументы, поскольку нельзя определить выполнено ли обещание или отклонено.
