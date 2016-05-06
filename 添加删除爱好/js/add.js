function removeHobby() {
    var wbk = document.getElementById('wbk'),
        aihao = document.getElementById('aihao'),
        topbr = document.getElementById('topbr'),
        add = document.getElementById('btn'),
        ok = document.getElementById('ok');

        add.onclick = function() {
            var aihaoapp = iptbtnappend(),
                len = plen();
                // console.log(len);
                aihao.appendChild(aihaoapp);
            len >= 3 ? btn.disabled = 'disabled' : len;           
        };

        function iptbtnappend() {
            var p = document.createElement('p'),
                input = document.createElement('input'),
                button = document.createElement('button'),
                span = document.createElement('span'),
                text = document.createTextNode('删除');
                input.type = 'text';
                button.appendChild(text);
                // console.log(p);
                button.onclick = function() {
                    var r = confirm('确定要删除吗？');
                    if (r) {
                        aihao.removeChild(this.parentNode);
                        btn.disabled = '';
                    }
                };

                p.appendChild(input),
                p.appendChild(span),
                p.appendChild(button);
                return p;    
        };
  
        function plen() {
            return aihao.getElementsByTagName('p').length;
        };

        ok.onclick = function() {
            var inputs = document.getElementsByTagName('input'),
                len = inputs.length,
                arr = [],
                i;
                for (i=0; i<len; i++) {
                    arr.push(inputs[i].value);
                }
                alert(arr.join('/'));            
        };
};

removeHobby();
