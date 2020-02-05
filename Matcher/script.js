window.addEventListener('load', function() {
    const num = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]
    const gender = [undefined,'М', 'Ж']

    const addMember = document.querySelector('#add-member');
    const nextBtn = document.querySelector('#next');
    let members = {
        '№1': {
            num:1,
            gender: 'M',
            name: '122',
            phone: '+9999999',
            email: 'lox'
        }
    }

    
    nextBtn.addEventListener('click', function() {
        switch(this.getAttribute('data-target')) {
            case 'next-1':
                document.querySelector('table').style.display = 'table'
                addMember.setAttribute('data-target', 'prev-1');
                this.setAttribute('data-target', 'next-2');
                addMember.innerText = 'Назад'
                document.querySelector('.window-1').style.display = 'none'
                document.querySelector('.window-2').style.display = 'block'
                const allItems = document.querySelectorAll('.window-1 .item');
                members = {}
                for(let i = 0; i< allItems.length; i++) {
                    members[allItems[i].querySelector('select[data-action=num]').value] = {
                        num: allItems[i].querySelector('select[data-action=num]').value,
                        gender: allItems[i].querySelector('select[data-action=gender]').value,
                        name: allItems[i].querySelector('input[name=name]').value,
                        phone: allItems[i].querySelector('input[name=phone]').value,
                        email: allItems[i].querySelector('input[name=email]').value,
                    }
                }   
                
                const itemWin2 = document.querySelector('.window-2');
                itemWin2.innerHTML = ''

                for(key in members) {
                    itemWin2.insertAdjacentHTML('beforeend', `<div data-gender="${members[key].gender}" class="item win-1"><div class="information"><div class="num">${members[key].num}</div><div class="name">${members[key].name}</div><div class="phonenumber">${members[key].phone}</div><div class="email">${members[key].email}</div></div><div onclick="event.stopPropagation()" class="selects"><div class="col-1"><p><input type="checkbox" name="1">1</p><p><input type="checkbox" name="2">2</p><p><input type="checkbox" name="3">3</p><p><input type="checkbox" name="4">4</p><p><input type="checkbox" name="5">5</p><p><input type="checkbox" name="6">6</p><p><input type="checkbox" name="7">7</p><p><input type="checkbox" name="8">8</p><p><input type="checkbox" name="9">9</p><p><input type="checkbox" name="10">10</p></div><div class="col-1"><p><input type="checkbox" name="11">11</p><p><input type="checkbox" name="12">12</p><p><input type="checkbox" name="13">13</p><p><input type="checkbox" name="14">14</p><p><input type="checkbox" name="15">15</p><p><input type="checkbox" name="16">16</p><p><input type="checkbox" name="17">17</p><p><input type="checkbox" name="18">18</p><p><input type="checkbox" name="19">19</p><p><input type="checkbox" name="20">20</p></div></div></div>`);
                }

                const items = document.querySelectorAll('.window-2 .item');

                for(let i = 0; i<items.length; i++) {
                    items[i].addEventListener('click', function() {
                        if(items[i].classList.contains('opened-check')) {
                            for(let o = 0; o<items.length; o++) {
                                items[o].classList.remove('opened-check')
                            }
                        } else {
                            for(let o = 0; o<items.length; o++) {
                                items[o].classList.remove('opened-check')
                            }
                            this.classList.add('opened-check')
                        }
                        
                        
                    })
                    let selects = items[i].querySelectorAll('.selects input')
                    for(let p = 0; p<selects.length; p++) {
                        selects[p].addEventListener('change', function(e) {
                            if(selects[p].checked) {
                                let whatGender = this.parentNode.parentNode.parentNode.parentNode.getAttribute('data-gender');
                                let whatElem = this.parentNode.parentNode.parentNode.parentNode.querySelector('.information .num').innerText;
                                let whichElem = this.name

                                if(whatGender === '1') {
                                    let w = document.querySelectorAll('thead tr th');
                                    let tr = document.querySelectorAll('tbody tr');
                                    for(let y = 0; y<w.length; y++) {
                                        if(w[y].innerText === whichElem) {
                                            w = y;
                                            y = y<w.length;
                                        }
                                    }


                                    for(let y = 0; y<tr.length; y++) {
                                        if(tr[y].querySelector('th').innerText === whatElem) {
                                            let findElem = tr[y].querySelectorAll('th');
                                            findElem[w].insertAdjacentHTML('beforeend','<span class="man">&times;</span>')
                                        }
                                    }

                                } else {

                                    let w = document.querySelectorAll('thead tr th');
                                    let tr = document.querySelectorAll('tbody tr');
                                    for(let y = 0; y<w.length; y++) {
                                        if(w[y].innerText === whatElem) {
                                            w = y;
                                            y = y<w.length;
                                        }
                                    }
                                    
                                    for(let y = 0; y<tr.length; y++) {
                                        if(tr[y].querySelector('th').innerText === whichElem) {
                                            let findElem = tr[y].querySelectorAll('th');
                                            findElem[w].insertAdjacentHTML('beforeend','<span class="woman">&times;</span>')
                                        }
                                    }
                                }
                            } else {
                                let whatGender = this.parentNode.parentNode.parentNode.parentNode.getAttribute('data-gender');
                                let whatElem = this.parentNode.parentNode.parentNode.parentNode.querySelector('.information .num').innerText;
                                let whichElem = this.name

                                if(whatGender === '1') {
                                    let w = document.querySelectorAll('thead tr th');
                                    let tr = document.querySelectorAll('tbody tr');
                                    for(let y = 0; y<w.length; y++) {
                                        if(w[y].innerText === whichElem) {
                                            w = y;
                                            y = y<w.length;
                                        }
                                    }


                                    for(let y = 0; y<tr.length; y++) {
                                        if(tr[y].querySelector('th').innerText === whatElem) {
                                            let findElem = tr[y].querySelectorAll('th');
                                            findElem[w].querySelector('.man').remove()
                                        }
                                    }

                                } else {

                                    let m = document.querySelectorAll('tbody tr');
                                    let w = document.querySelectorAll('thead th')
                                    let tr = document.querySelectorAll('tbody tr');
                                    for(let y = 0; y<w.length; y++) {
                                        if(w[y].innerText === this.parentNode.parentNode.parentNode.parentNode.querySelector('.information .num').innerText) {
                                            m = y;
                                        }
                                    }
                                    // for(let y = 0; y<m.length; y++) {
                                    //     if(m[y].querySelector('th').innerText === whichElem) {
                                    //         m = y;
                                    //         y = y<m.length;
                                    //     }
                                    // }
                                    
                                    for(let y = 0; y<tr.length; y++) {
                                        if(tr[y].querySelector('th').innerText === whichElem) {
                                            let findElem = tr[y].querySelectorAll('th');

                                            findElem[m].querySelector('.woman').remove()
                                        }
                                    }
                                }
                            }
                        })
                    }
                    
                }
                
                tableRender(allItems)
                break;
            case 'next-2':
                document.querySelector('.window-3').innerHTML = ''
                let tr = document.querySelectorAll('tbody tr')
                



                this.style.display = 'none'
                document.querySelector('.window-2').style.display = 'none'
                document.querySelector('.window-3').style.display = 'block'
                document.querySelector('table').style.display = 'none'
                addMember.setAttribute('data-target', 'prev-2');

                const itemWin3 = document.querySelector('.window-3');

                for(key in members) {
                    itemWin3.insertAdjacentHTML('beforeend', `<div class="item win-1"><div class="information"><div class="num">${members[key].num}</div><div class="name">${members[key].name}</div><div class="phonenumber">${members[key].phone}</div><div class="email">${members[key].email}</div></div><div onclick="event.stopPropagation()" class="choose-list"><h5>Взаимные симпатии</h5><div class="mutually"></div><h5>Вас отметили, а вы их нет</h5><div class="noted"></div></div></div>`)
                }

                for(let h = 0; h<tr.length; h++) {
                    let th = tr[h].querySelectorAll('th');
                    let choose;
                    let numberW;
                    let whichItem
                    for(let z = 0; z<th.length; z ++) {
                        if(z === 0) {
                            whichItem = th[z].innerText
                        } else {
                            if(th[z].querySelectorAll('span').length !== 0) {
                                choose = th[z].querySelectorAll('span');
                                numberW = z;
                                if(choose.length > 1) {
                                    let itemWoman = document.querySelectorAll('thead th');
                                    let window3 = document.querySelector('.window-3')
                                    let allItem = window3.querySelectorAll('.item');

                                    for(let g = 0; g<allItem.length; g++) {
                                        if(allItem[g].querySelector('.information .num').innerText === itemWoman[numberW].innerText) {
                                            allItem[g].querySelector('.choose-list .mutually').insertAdjacentHTML('beforeend', `<div class="line"><div class="num">${members[whichItem].num}</div><div class="name">${members[whichItem].name}</div><div class="phonenumber">${members[whichItem].phone}</div></div>`);
                                        } else if(allItem[g].querySelector('.information .num').innerText === whichItem) {
                                            allItem[g].querySelector('.choose-list .mutually').insertAdjacentHTML('beforeend', `<div class="line"><div class="num">${members[itemWoman[numberW].innerText].num}</div><div class="name">${members[itemWoman[numberW].innerText].name}</div><div class="phonenumber">${members[itemWoman[numberW].innerText].phone}</div></div>`);
                                        }
                                    }
                                } else {
                                    switch(choose[0].getAttribute('class')) {
                                        case 'man':
                                            let itemW = document.querySelectorAll('thead th');
                                            let window3 = document.querySelector('.window-3')
                                            let allItems = window3.querySelectorAll('.item');
                                            for(let m = 0; m< allItems.length; m++) {
                                                if(allItems[m].querySelector('.information .num').innerText === itemW[numberW].innerText) {
                                                    allItems[m].querySelector('.choose-list .noted').insertAdjacentHTML('beforeend', `<div class="line"><div class="num">${members[whichItem].num}</div><div class="name">${members[whichItem].name}</div><div class="phonenumber">${members[whichItem].phone}</div></div>`);
                                                }
                                            }
                                            break;
                                        case 'woman':
                                            let itemM = document.querySelectorAll('thead th');
                                            let windows3 = document.querySelector('.window-3')
                                            let items = windows3.querySelectorAll('.item');

                                            for(let c = 0; c<items.length; c++) {
                                                if(items[c].querySelector('.information .num').innerText === whichItem) {
                                                    items[c].querySelector('.choose-list .noted').insertAdjacentHTML('beforeend', `<div class="line"><div class="num">${members[itemM[numberW].innerText].num}</div><div class="name">${members[itemM[numberW].innerText].name}</div><div class="phonenumber">${members[itemM[numberW].innerText].phone}</div></div>`);
                                                }
                                            }
                                            break;
                                    }
                                }
                            }
                            
                        }
                    }
                    
                }

                const itemsWin3 = document.querySelectorAll('.window-3 .item');

                for(let r = 0; r<itemsWin3.length; r++) {
                    itemsWin3[r].addEventListener('click', function() {
                        if(itemsWin3[r].classList.contains('opened')) {
                            for(let o = 0; o<itemsWin3.length; o++) {
                                itemsWin3[o].classList.remove('opened')
                            }
                        } else {
                            for(let o = 0; o<itemsWin3.length; o++) {
                                itemsWin3[o].classList.remove('opened')
                            }
                            this.classList.add('opened')
                        }
                    })
                }

                break;

        }
    })
    addMember.addEventListener('click', function() {
        switch(this.getAttribute('data-target')) {
            case 'prev-1':
                addMember.innerText = 'Добавить участника'
                document.querySelector('.window-2').style.display = 'none'
                document.querySelector('table').style.display = 'none'
                document.querySelector('.window-1').style.display = 'block'
                this.setAttribute('data-target', '')
                nextBtn.setAttribute('data-target', 'next-1')
                break
            case 'prev-2':
                document.querySelector('.window-3').style.display = 'none'
                document.querySelector('.window-2').style.display = 'block'
                this.setAttribute('data-target', 'prev-1')
                nextBtn.setAttribute('data-target', 'next-2')
                nextBtn.style.display = 'block'
                document.querySelector('table').style.display = 'table  '
                break;
            default:
                createElemWin1()
        }
    });
    

    

    function tableRender(items) {
        const table = document.querySelector('table');
        let o = 0;
        document.querySelector('tbody').innerHTML = ''
        document.querySelector('thead tr').innerHTML = ''
        document.querySelector('thead tr').append(document.createElement('th'));
        for(let i = 0; i<items.length; i++) {
            if(items[i].querySelector('select[data-action=gender]').value === '2') {
                o++
            }
        }
        
        for(let i = 0; i<items.length; i++) {
            const tr = document.createElement('tr');
            const th = document.createElement('th');

            switch(items[i].querySelector('select[data-action=gender]').value) {
                case '1':
                    
                    for(let z=0;z<=o;z++) {
                        const th = document.createElement('th');
                        if(z === 0) {
                            th.innerText = items[i].querySelector('select[data-action=num]').value
                        }
                        
                        tr.append(th)
                    }
                    table.querySelector('tbody').append(tr)
                    break;
                case '2':
                    th.innerText = items[i].querySelector('select[data-action=num]').value
                    table.querySelector('thead tr').append(th)
                    break;
            }
        }

    }



    

    function createElemWin1() {
        const elems = generateElemWin1()
        const header = document.querySelector('header .window-1');
        const item = document.createElement('div');
        item.classList.add('item');
        header.append(item)

        for(let i = 0; i< elems.length; i++) {
            item.append(elems[i])
        }
        
        const delElems = document.querySelectorAll('.delete')

        for(let i = 0; i<delElems.length; i++) {
            delElems[i].addEventListener('click', del);
        }
        
    }

    function generateElemWin1() {
        const selectNum = document.createElement('select');
        const selectGen = document.createElement('select');
        const inputName = document.createElement('input');
        const inputTel = document.createElement('input');
        const inputEmail = document.createElement('input');
        const deleteElem = document.createElement('div');
        const itemsList = document.querySelectorAll('.window-1 .item')

        selectNum.setAttribute('data-action', 'num');
        if(itemsList.length) {
            const exItem = document.querySelectorAll('.item:first-child select[data-action=num] option');
            for(let i = 0; i<exItem.length; i++) {
                const optionNum = document.createElement('option');
                if(exItem[i].hidden === true) {
                    optionNum.setAttribute('value', exItem[i].value);
                    optionNum.innerText = exItem[i].value
                    optionNum.hidden = true
                    selectNum.append(optionNum);
                } else {
                    optionNum.setAttribute('value', exItem[i].value);
                    optionNum.innerText = exItem[i].value
                    optionNum.disabled = false
                    selectNum.append(optionNum);
                }
                
            }
            
        } else {
            for(let i = 0; i<num.length; i++) {
                const optionNum = document.createElement('option');
                if(i !== 0) {
                    optionNum.setAttribute('value', num[i]);
                    optionNum.innerText = num[i]
                    selectNum.append(optionNum);
                } else {
                    optionNum.disabled = true;
                    optionNum.selected = true;
                    optionNum.hidden = true;
                    optionNum.innerText ='№'
                    selectNum.append(optionNum);
                }
            }
        }
        

        selectGen.setAttribute('data-action', 'gender');
        for(let i = 0; i <gender.length;i++) {
            const optionGen = document.createElement('option');
            if(i !== 0) {
                optionGen.setAttribute('value', i);
                optionGen.innerText = gender[i]
                selectGen.append(optionGen);
            } else {
                optionGen.disabled = true;
                optionGen.selected = true;
                optionGen.hidden = true;
                optionGen.innerText ='ПОЛ'
                selectGen.append(optionGen);
            }
        }

        inputName.setAttribute('type', 'text');
        inputName.setAttribute('name', 'name');
        inputName.setAttribute('placeholder', 'Имя');

        inputTel.setAttribute('type', 'text');
        inputTel.setAttribute('name', 'phone');
        inputTel.setAttribute('placeholder', 'Телефон');

        inputEmail.setAttribute('type', 'email');
        inputEmail.setAttribute('name', 'email');
        inputEmail.setAttribute('placeholder', 'Email');

        deleteElem.classList.add('delete')
        deleteElem.innerHTML = '&#215;'

        selectNum.addEventListener('focus', function() {
            sessionStorage.setItem('prevItem', this.value);
            this.blur()
        })

        selectNum.addEventListener('change', function() {
            freeDif(sessionStorage.getItem('prevItem'))
            lockDif(this.value)
        })

        

        return [selectNum, selectGen, inputName, inputTel,inputEmail, deleteElem]
    }

    function del() {
        this.parentNode.remove();
        freeDif(this.parentNode.querySelector('select').value)
    }

    function freeDif(num) {
        const items = document.querySelectorAll('.item')
        for(let i = 0; i<items.length; i++) {
            let options = items[i].querySelectorAll('select[data-action=num] option');
            for(let o = 1; o<options.length; o++) {
                if(options[o].value === num) {
                    options[o].hidden = false;
                }
            }
        }
    }

    function lockDif(num) {
        const items = document.querySelectorAll('.item')
        for(let i = 0; i<items.length; i++) {
            let options = items[i].querySelectorAll('select[data-action=num] option')
            for(let o = 1; o<options.length; o++) {
                if(options[o].value === num) {
                    options[o].hidden = true;
                }
            }
        }
    }
})