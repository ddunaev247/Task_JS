//Ваша задача - создать объект chainMaker, который создает цепочки. Готовая цепочка представляет собой строку и выглядит так: 
//'(значение1) (значение2) (значение3)'. В ChainMaker есть несколько методов для создания цепочек и их изменения:

// getLength возвращает текущую длину цепочки в виде числа;
// addLink (value) добавляет в цепочку ссылку, содержащую строковое представление значения;
// removeLink (position) удаляет звено цепи в указанной позиции;
// reverseChain переворачивает цепочку;
// finishChain завершает цепочку и возвращает ее.

const ChainMaker ={
    chain:[],
    getLength(){return this.chain.length},
    addLink(value=''){this.chain.push(`(${value})`);return this},
    removeLink(position){
        if ((Number.isInteger(position) || isFinite(position)) && (0<position && position<this.chain.length)) { 
            this.chain.splice(position-1,1);return this}
        console.log('цепочка не изменена, ошибка в методе removeLink')
        return this
        },
    reverseChain(){this.chain.reverse();return this},
    finishChain(){ let bufChain = this.chain.slice();this.chain.length=0;return bufChain.join('~~')}  

}

console.log(ChainMaker.addLink(1).addLink(2).addLink(3).removeLink(0).finishChain())
console.log(ChainMaker.addLink(1).addLink(2).addLink(3).removeLink(1).finishChain())
console.log(ChainMaker.chain)//проверка что цепочка очищена