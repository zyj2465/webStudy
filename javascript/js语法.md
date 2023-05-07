1.输入输出：
    输出：
        第一种
            document.write('xsadasda')
            向body内输出内容，如果输出的是标签，会被解析成网页元素
        第二种
            alert()
        第三种：
            console.log()
    输入：
    显示一个对话框用于输入文字
    prompt('    ')
        prompt默认是字符串形
        +prompt将字符串转为整数类型



声明变量
    在旧版本的js中使用var进行声明变量，但是现在不再使用，现在使用let

数组变量
    声明形式：
        lat arr = []
        exp:let arr =[1,2,3,4,5,6]
    数组长度：数组变量名.length

常量：
    const 常量名 = XXXX
    注意点：
        1.常量不允许被更改
        2.常量声明的时候必须赋值


数据类型：
    js是一种弱数据类型的语言，只有对一个变量赋值了才知道这个变量是什么类型

    基本数据类型：
        number:直接赋值数字
        string：三种引号（'',"",``)
        bool:true,false
        undefined:声明了一个变量没有赋值的时候该变量默认为undefine
        null：代表无/空/值未知的值

        undefined和null的区别：undefined表示没有赋值，null表示赋值了但是内容为空
        undefined + 1:::::NaN
        null + 1::::::1
    引用数据类型：
        object
    数据类型的检测：
        typeof x  ///推荐
            exp:
                let num = 10
                console.log(typeof num)
                let str = 'name'
                console.log(typeof name)
        typrof(x)


算数运算符
算数运算符的优先级：
    先乘除取余后加减，有小括号的先算小括号
逻辑运算符的优先级：
    ！  > &&   >||

    NaN:计算错误时候会出现NaN
        NaN是粘性的，任何对NaN的操作输出结果都是NaN

字符串类型：
    用引号（'',"",``）括起来的都是字符串

    字符串拼接：
        用+运算符进行字符串拼接

模板字符串：
    拼接字符串和变量
    1.外面必须是反引号``
    内容在拼接的时候用${}包住要取值的变量









语句：
1.顺序语句：按代码顺序从上往下执行


2.分支语句:
    ifelse
    三元运算符
        a >b?结果1：结果2
            若真则结果1否则结果2
    switch 
        switch(数据){
            case 值1：
            代码1
            break
            
            case 值2：
            代码2
            break
            
            case 值3：
            代码3
            break

            default:
            代码n
            break
        }



3.循环语句
    for
    while






数组：
    声明方式
        1.字面量声明
        let 数组名 = [数据1，数据2，。。。。。。。，数据n]
        2.构造函数声明
        let arr = new Array(数据1，数据2，。。。。，数据n)
    数组长度：
        数组名.length
























17/18/32/33-39集还没看