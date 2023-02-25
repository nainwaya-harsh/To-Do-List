{/* <script> */}
        add = document.getElementById("add");
        add.addEventListener("click", getAndUpdate);
        update();

        function getAndUpdate() {
            console.log("Updating list");
            tit = document.getElementById('title').value;
            desc = document.getElementById('description').value;
            if (localStorage.getItem('itemsJson') == null) {
                itemJsonArray = [];
                itemJsonArray.push([tit, desc]);
                localStorage.setItem('itemsJson', JSON.stringify(itemJsonArray))
            }
            else {
                itemJsonArraystr = localStorage.getItem('itemsJson');
                itemJsonArray = JSON.parse(itemJsonArraystr);
                itemJsonArray.push([tit, desc]);
                localStorage.setItem('itemsJson', JSON.stringify(itemJsonArray))
            }
            update();
        }
        function update() {
            if (localStorage.getItem('itemsJson') == null) {
                itemJsonArray = [];
                localStorage.setItem('itemsJson', JSON.stringify(itemJsonArray))
            }
            else {
                itemJsonArraystr = localStorage.getItem('itemsJson');
                itemJsonArray = JSON.parse(itemJsonArraystr);
            }
            tablebody = document.getElementById('tableBody');
            str = "";
            itemJsonArray.forEach((element, index) => {
                str += `<tr>
                    <td>${index + 1}</td>
                    <td>${element[0]}</td>
                    <td>${element[1]}</td>
                    <td><button class="btn btn-sm btn-primary " onclick="deleted(${index})">Delete
                        </button></td>
                </tr>`
            });
            tableBody.innerHTML = str;
        }

        function deleted(item) {
            console.log("Item deleted", item);
            itemJsonArraystr = localStorage.getItem('itemsJson');
            itemJsonArray = JSON.parse(itemJsonArraystr);
            //deleted
            itemJsonArray.splice(item, 1)
            localStorage.setItem('itemsJson', JSON.stringify(itemJsonArray));
            update();

        }
    // </script>

{/* <script> */}
    var isDark = true;
    var toggleTheme = function() {
      var body = document.getElementsByTagName('body')[0];
      var lis = document.getElementsByClassName('li');
      if (isDark) {
        // Switch to light theme
        body.style.backgroundColor = 'white';
        body.style.color = 'black';
        for (var i = 0; i < lis.length; i++) {
          lis[i].style.color = 'white';
        }
        document.getElementById('dark').innerHTML = 'Dark Theme';
      } else {
        // Switch to dark theme
        body.style.backgroundColor = '#1c1c1e';
        body.style.color = '#f2f2f2';
        for (var i = 0; i < lis.length; i++) {
          lis[i].style.color = 'white';
        }
        document.getElementById('dark').innerHTML = 'Light Theme';
      }
      isDark = !isDark;
    };
    document.getElementById('dark').addEventListener('click', toggleTheme);
//   </script>

// <script>
    var sidemenu=document.getElementById("sidemenu");
    function openmenu(){
        sidemenu.style.left="0";
    }
    function closemenu(){
            sidemenu.style.left="-200px";
    }

// </script>