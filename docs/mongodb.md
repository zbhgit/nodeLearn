### MongoDB 实操
> 常见数据库

>postgreSQL: 支持JSON,良好分布式支持

>oracle: 老牌数据库

>redis: 存储键值对

>MongoDB: 非关系行数据库


#### 命令行

> 设置数据库目录和端口

 `mongod --dbpath=/home/z/App/db --port=27018`
 
> 连接实例
`mongo`

> show databases

> use name

> show collections

 `db.users.insert({name: "laozhang",age: 101})`

> find({})的参数

```
db.users.find({})

user.find({age: {$gt:12}})

user.find({age: {$lte:12}})

db.users.find({age: {$exists: false}})

```

`db.users.update({name: "laozhang"},{name: "zhangsan",age: 110})`

`db.users.remove({})`

`db.users.stats()`

`db.users.insertOne({name: "laowang", age: 30})`

```
var id = ObjectId()
id.getTimestamp()
```

```
    db.users.update({name: "laozhang"},{$set:{age: 57}})
    
    
```