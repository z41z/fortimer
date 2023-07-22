# fortimer

Manage your JavaScript timer.

## Install

``` node
  npm i fortimer //or yarn add fortimer
```

### Usage

``` js
  import Timer from 'fortimer'
  let timer = new Timer()
  timer.add({
    name: 'test',
    repeat: true,
    func: () => {
      console.log(new Date())
    }
  })
```

* add(obj = {})
  * {Object} config
    * {String} name: timer name
    * {Boolean} repeat: default `false`,`true` for setInterval(),`false` for setTimeout()
    * {Number} duration: timer duraion,default `1000`ms

  ``` js
    timer.add({
      name: 'test',
      repeat: true,
      duration: 10e3,
      func: ()=>{
        console.log(new Date())
      }
    });
    // return timer
  ```
* getAll()
  ``` js
    timer.getAll();
  ```
* remove(name)
  * {String} name: timer name

  ``` js
    timer.remove('test');
  ```
* removeAll()
  ``` js
    timer.removeAll();
  ```